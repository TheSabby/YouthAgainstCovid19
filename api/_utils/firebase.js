const admin = require('firebase-admin');  

admin.initializeApp({
  credential: process.env.GCLOUD_CREDENTIALS
});

const db = admin.firestore();

module.exports = { db }; 