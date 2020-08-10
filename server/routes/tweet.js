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
  formatRequest.stringIdToTimeUuid,
  TweetController.getTweet,
  TweetController.getInteractions,
  TweetController.sendTweetData,
);

router.get(
  '/:tweet_id/interactions', 
  formatRequest.stringIdToTimeUuid,
  TweetController.getInteractions,
  TweetController.sendInteractionData,
);

router.post(
  '/:tweet_id/like',
  formatRequest.stringIdToTimeUuid,
  TweetController.addFavorite
)

module.exports = router;