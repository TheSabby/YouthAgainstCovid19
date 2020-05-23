const { db } = require("./_utils/firebase");
const signUpSubmissionsRef = db.collection('sign_up_submissions');

module.exports = async (req, res) => {
  const submission = await signUpSubmissionsRef.add({
    test: true
  });

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    submission
  });
};