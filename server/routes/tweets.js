const { Router } = require("express");
const router = Router();
const {
  getTweetsByHandle,
  userHasCommentedOnTweet,
  getCommentCountForTweet,
  userHasFavoritedTweet,
  getFavoritesCountForTweet,
  userHasRetweetedTweet,
  getRetweetCountForTweet,
  addTweetByHandle
} = require("../../database/tweet");

router.get("/user_timeline", async (req, res) => {
  const { handle } = req.query;

  try {
    const tweets = await getTweetsByHandle(handle);
    console.log(tweets);
    res.send(tweets);
  } catch (e) {
    res.status(400).send();
  }
});

router.get("/:tweet_id/social/:handle", async (req, res) => {
  const { handle, tweet_id } = req.params;

  try {
    const socialQueries = [
      userHasCommentedOnTweet(tweet_id, handle),
      getCommentCountForTweet(tweet_id),
      userHasFavoritedTweet(tweet_id, handle),
      getFavoritesCountForTweet(tweet_id),
      userHasRetweetedTweet(tweet_id, handle),
      getRetweetCountForTweet(tweet_id),
    ];

    const [
      commentsActive,
      commentsCount,
      favoritesActive,
      favoritesCount,
      retweetsActive,
      retweetsCount,
    ] = await Promise.all(socialQueries);

    const social = {
      comments: {
        active: commentsActive,
        count: commentsCount,
      },
      favorites: {
        active: favoritesActive,
        count: favoritesCount,
      },
      retweets: {
        active: retweetsActive,
        count: retweetsCount,
      },
    };

    res.send(social);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/:tweet_id/comments", async (req, res) => {
  // This route gets list of comments for each tweet
  // Query comments for a given tweet
  // Send array of comments to client
});

router.post('/', async (req, res) => {
  console.log(req.body);

  const tweet = {...req.body};
  tweet.created_at = new Date();
  
  try {
    await addTweetByHandle(tweet);
    res.status(201).send();
  } catch (e) {
    console.log(e)
    res.status(500).send();
  }
})

module.exports = router;
