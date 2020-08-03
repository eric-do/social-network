const { Router } = require("express");
const router = Router();

router.post('/', async (req, res) => {
  res.status(201).send({ message: "tweet added" });
})

module.exports = router;