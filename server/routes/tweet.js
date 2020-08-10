const { Router } = require("express");
const checkTweet = require("../middleware/checkTweet");
const formatRequest = require("../middleware/formatRequest");
const TweetController = require("../controllers/tweet");
const router = Router();

router.post(
  '/', 
  checkTweet.validateTweetFields,
  TweetController.addTweet
);

router.get(
  '/:tweet_id', 
  TweetController.getTweet,
  TweetController.sendTweetData,
);

router.get(
  '/:tweet_id/interactions', 
  TweetController.getInteractions,
  TweetController.sendInteractionData,
);

router.post(
  '/:tweet_id/favorite',
  formatRequest.stringIdToTimeUuid,
  TweetController.addFavorite
)

module.exports = router;