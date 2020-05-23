const { db } = require("./_utils/firebase");

module.exports = (req, res) => {
  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  });
};