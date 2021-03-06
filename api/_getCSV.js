const { db, admin } = require("./_utils/firebase");
const newsletterSignUps = db.collection("newsletter_sign_ups");
const { parse } = require("json2csv");
const moment = require("moment");

const fields = ["email", "date"];

module.exports = async (req, res) => {
  const allNewsletterSignUps = await newsletterSignUps
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()))
    .then((signUps) =>
      signUps.map((signUp) => ({
        email: signUp.email,
        date: moment.unix(signUp.date._seconds),
      }))
    )
    .catch((err) => {
      console.error("Error getting documents", err);
      return {
        err,
        failed: true,
      };
    });

  const csv = parse(allNewsletterSignUps, { fields });

  res.setHeader("Content-disposition", "attachment; filename=data.csv");
  res.setHeader("Content-Type", "text/csv");
  res.status(200).send(csv);
};
