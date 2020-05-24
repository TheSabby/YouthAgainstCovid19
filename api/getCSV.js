const { db, admin } = require("./_utils/firebase");
const newsletterSignUps = db.collection("newsletter_sign_ups");

module.exports = async (req, res) => {
  const allNewsletterSignUps = await newsletterSignUps
    .get()
    .then((snapshot) => snapshot.map((doc) => doc.data()))
    .catch((err) => {
      console.error("Error getting documents", err);
    });

  res.json(allNewsletterSignUps);
};
