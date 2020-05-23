const admin = require("firebase-admin");

const serviceAccount = JSON.parse(
  Buffer.from(process.env.GCLOUD_CREDENTIALS, "base64").toString()
);

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} catch (error) {
  if (!/already exists/u.test(error.message)) {
    console.error(error);
    console.error("Firebase admin initialization error", error.stack);
  }
}

const db = admin.firestore();

module.exports = { db };
