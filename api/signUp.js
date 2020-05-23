const { db } = require("./_utils/firebase");
const signUpSubmissionsRef = db.collection('sign_up_submissions');

module.exports = (req, res) => {
  const submission = signUpSubmissionsRef.add({
    test: true
  });

  res.json({
    cred: process.env.GCLOUD_CREDENTIALS,
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};