const { Router } = require("express");
const checkTweet = require("../middleware/checkTweet");
const TweetController = require("../controllers/tweet");
const router = Router();

router.post(
  '/', 
  checkTweet.validateTweetFields,
  TweetController.addTweet
)

module.exports = router;