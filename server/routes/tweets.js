const { Router } = require('express');
const router = Router();
const { getTweetsByHandle, userHasCommentedOnTweet,
        getCommentCountForTweet, userHasFavoritedTweet,
        getFavoritesCountForTweet } = require('../../database/tweet');


router.get('/user_timeline', async (req, res) => {
  const { handle } = req.query;

  try {
    const tweets = await getTweetsByHandle(handle);
    console.log(tweets);
    res.send(tweets);
  } catch (e) {
    res.status(400).send()
  }
});

router.get('/:tweet_id/social/:handle', async (req, res) => {
  // This route returns booleans for whether a user has liked/commented/retweeted a tweet
  // Query for whether tweet in user's list of likes
  // Query for like count
  // Query for whether tweet in user's list of comments
  // Query for comment count
  // Query for whether tweet in user's list of retweets
  // Query for retweet count
  // Boolean for each as an object

  const { handle, tweet_id } = req.params;
  const social = {};
  social.comments = {};
  social.favorites = {};
  social.retweets = {};

  try {
    social.comments.active = await userHasCommentedOnTweet(tweet_id, handle);
    social.comments.count = await getCommentCountForTweet(tweet_id);
    social.favorites.active = await userHasFavoritedTweet(tweet_id, handle);
    social.favorites.count = await getFavoritesCountForTweet(tweet_id);
    console.log(social);
    res.send(social);
  } catch (e) {
    res.status(400).send(e);
  }
  
});

router.get('/:tweet_id/comments', async (req, res) => {
  // This route gets list of comments for each tweet
  // Query comments for a given tweet
  // Send array of comments to client
  
});

module.exports = router;