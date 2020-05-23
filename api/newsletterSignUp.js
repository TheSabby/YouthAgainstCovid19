const { db, admin } = require("./_utils/firebase");
const newsletterSignUps = db.collection('newsletter_sign_ups');

module.exports = async (req, res) => {
  await newsletterSignUps.add({
    email: req.body.email,
    date: admin.firestore.Timestamp.fromMillis(Date.now())
  });

  res.json({ success: true });
};