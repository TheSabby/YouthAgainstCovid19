import Fastify from 'fastify';
import * as sapper from "@sapper/server";
import fs from 'fs';

process.on("unhandledRejection", function(err) {
  console.error(err);
  process.exit(1);
});

const start = async () => {
  const serverConf = {
    logger: {
      level: process.env.LOG_LEVEL || 'info'
    },
    disableRequestLogging: true
  };

  if(process.env.CHINGU_ENV !== 'production' && fs.existsSync('./server.key')) {
    serverConf.https = {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt')
    };
  }

  const fastify = Fastify(serverConf);

  fastify.register(import("fastify-env"), {
    dotenv: true,
    schema: {
      type: "object",
      properties: {
        NODE_ENV: {
          type: "string",
          default: "development"
        },
        PORT: {
          type: "string",
          default: 3000
        }
      }
    }
  });

  fastify.register(import('fastify-formbody'));
  
  fastify.register(import("fastify-compress"), {
    global: false,
  });

  fastify.register(import('fastify-url-data'));

  fastify.register(import('./plugins/static'));

  fastify.route({
    compress: {
      threshold: 0
    },
    method: 'GET',
    path: '/*',
    logLevel: process.env.NODE_ENV !== 'production' ? 'debug' : 'info',
    handler: async (request, reply) => {
      return new Promise((resolve, reject) => {
        function next(err) {
          if(err) {
            reject(err);
          }
          resolve();
        }
        sapper.middleware({
          session: req => req.session
        })(request.raw, reply.res, next);
      })
    },
  });

  fastify.register(import("fastify-helmet"));

  fastify.listen(process.env.PORT).then((address) => {
    fastify.log.info(`server listening on ${address}`);
  }).catch((err) => {
    fastify.log.error(err);
    process.exit(1);
  });
};

start();
