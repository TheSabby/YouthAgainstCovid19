const admin = require('firebase-admin');  
admin.initializeApp();

console.log(process.env.GCLOUD_CREDENTIALS);

const db = admin.firestore();

module.exports = { db }; 