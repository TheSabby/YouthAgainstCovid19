const { db, admin } = require("./_utils/firebase");
const newsletterSignUps = db.collection("newsletter_sign_ups");

module.exports = async (req, res) => {
  const allNewsletterSignUps = await newsletterSignUps
    .get().catch((err) => {
      console.error("Error getting documents", err);
      return {
        err,
        failed: true
      }
    });

  res.json(allNewsletterSignUps);
};
