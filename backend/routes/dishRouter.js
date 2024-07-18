const express = require("express");
const { getProduct } = require("../src/mySQL");
const router = express.Router();

router.get("/", (req, res) => {
  getProduct(req.query)
    .then((result) => {
      res.json(result);
    })
    .catch(() => {
      res.status(500);
      res.json({ message: "Что-то пошло не так" });
    })
    .finally(() => res.end());
});

module.exports = router;
