const admin = require("firebase-admin");

const serviceAccount = JSON.parse(
  Buffer.from(process.env.GCLOUD_CREDENTIALS, "base64").toString()
);

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

  // admin.initializeApp({
  //   credential: admin.credential.cert({
  //     project_id: process.env.FIREBASE_PROJECT_ID,
  //     private_key: process.env.FIREBASE_PRIVATE_KEY,
  //     client_email: process.env.FIREBASE_CLIENT_EMAIL
  //   }),
  //   databaseURL: 'https://vercel-serverless.firebaseio.com'
  // });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error(error);
    console.error("Firebase admin initialization error", error.stack);
  }
}

const db = admin.firestore();

module.exports = { db };
