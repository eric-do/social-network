const models = require("../database");

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
    await tweetByHandle.saveAsync();

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

module.exports = {
  addTweet
};
