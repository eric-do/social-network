const { Router } = require('express');
const router = Router();
const { getTweetsByHandle } = require('../../database/tweet');


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

  const social = {
    comments: {
      active: true,
      count: 10
    },
    retweets: {
      active: false,
      count: 15
    },
    favorites: {
      active: true,
      count: 90
    }
  }

  res.send(social);
});

router.get('/:tweet_id/comments', async (req, res) => {
  // This route gets list of comments for each tweet
  // Query comments for a given tweet
  // Send array of comments to client
  
});

module.exports = router;