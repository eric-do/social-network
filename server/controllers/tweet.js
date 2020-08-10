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
  const { tweet_id } = req.params;

  try {
    req.body.tweet = await models.instance.Tweet.findOneAsync({ tweet_id });

    next();
  } catch (e) {
    const { message } = e;
    console.log(message);
    res.status(400).send({ message });
  }
};

const getInteractions = async (req, res, next) => {
  const { tweet_id } = req.params;

  try {
    const interactions = await models.instance.TweetCounter.findOneAsync({ tweet_id }, { raw: true });

    const convertedInteractions = {
      likes: interactions.likes.toNumber(),
      comments: interactions.comments.toNumber(),
      retweets: interactions.retweets.toNumber()
    }

    req.body.interactions = convertedInteractions;

    next();
  } catch (e) {
    const { message } = e;
    console.log(message)
    res.status(400).send({ message });
  }
};

const sendInteractionData = async (req, res) => {
  const { interactions } = req.body;

  res.status(200).send({ interactions });
}

const addFavorite = async (req, res) => {
  const { tweet_id } = req.params;
  const { handle } = req.body;

  try {
    await models.instance.TweetCounter.updateAsync({ tweet_id }, {
      likes: models.datatypes.Long.fromInt(1),
    });

    res.status(201).send({ message: 'Successfully liked tweet' })
  } catch (err) {
    const { message } = err;
    console.log(message);
    res.status(400).send({ message });
  }
}

module.exports = {
  addTweet,
  getTweet,
  sendTweetData,
  getInteractions,
  addFavorite,
  sendInteractionData,
};
