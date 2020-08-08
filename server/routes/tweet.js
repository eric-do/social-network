const { Router } = require("express");
const checkTweet = require("../middleware/checkTweet");
const TweetController = require("../controllers/tweet");
const router = Router();

router.post(
  '/', 
  checkTweet.validateTweetFields,
  TweetController.addTweet
)

router.post('/favorite', (req, res) => {
  console.log(req.body);
  res.status(201).send({ message: "testing" })
}
)
module.exports = router;