const models = require("../database");

const sendTweetData = (req, res, next) => {
  const { tweet } = req.body;
  res.status(200).send({ tweet });
}

const addTweet = async (req, res) => {
  const { handle, full_text } = req.body;
  
  try {
    const user = await models.instance.UsersByHandle.findOneAsync({ handle });
    const tweet_id = models.timeuuid();

    const tweet = { 
      tweet_id,
      full_text,
      tweet_date: {
        $db_function: "toTimestamp(now())",
      },
      ...user, 
    };

    const tweetByHandle = new models.instance.TweetsByHandle(tweet);
    const tweetByTweetId = new models.instance.Tweet(tweet);

    await tweetByHandle.saveAsync();
    await tweetByTweetId.saveAsync();

    await models.instance.TweetCounter.updateAsync({ tweet_id }, {
      likes: models.datatypes.Long.fromInt(0),
      comments: models.datatypes.Long.fromInt(0),
      retweets: models.datatypes.Long.fromInt(0),
    });

    res.status(201).send({ message: "Tweet successfully created" });
  } catch (e) {
    const { message } = e;
    console.log(message);
    res.status(400).send({ message });
  }
};

const getTweet = async (req, res, next) => {
  console.log(req.params.tweet_id)
  const tweet_id = models.timeuuidFromString(req.params.tweet_id);

  try {
    req.body.tweet = await models.instance.Tweet.findOneAsync({ tweet_id });

    next();
  } catch (e) {
    const { message } = e;
    console.log(message);
    res.status(400).send({ message });
  }
}

const addFavorite = async (req, res) => {
  const { handle, tweet_id } = req.body;
}

module.exports = {
  addTweet,
  getTweet,
  sendTweetData,
};
