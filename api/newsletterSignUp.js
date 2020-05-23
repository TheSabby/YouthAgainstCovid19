const { db } = require("./_utils/firebase");
const newsletterSignUps = db.collection('newsletter_sign_ups');

module.exports = async (req, res) => {
  // const submission = await newsletterSignUps.add({
  //   test: true
  // });

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};