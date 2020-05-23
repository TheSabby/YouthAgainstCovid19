const { db } = require("./_utils/firebase");
const newsletterSignUps = db.collection('newsletter_sign_ups');

module.exports = async (req, res) => {
  await newsletterSignUps.add({
    email: req.body.email
  });

  res.json({ success: true });
};