const models = require("../database");

const addTweet = async (req, res) => {
  const { handle, full_text } = req.body;
  
  try {
    const user = await models.instance.UsersByHandle.findOneAsync({ handle });
    const tweet = { 
      tweet_id: models.timeuuid(),
      full_text,
      tweet_date: {
        $db_function: "toTimestamp(now())",
      },
      ...user, 
    };

    const tweetByHandle = new models.instance.TweetsByHandle(tweet);
    tweetByHandle.save();

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
