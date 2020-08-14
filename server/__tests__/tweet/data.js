const { models } = require("../testDb");

const getTweet = (id) => {
  const tweets = [
    {
      handle: "eric",
      full_text: "this is the initialized tweet",
    },
    {
      handle: "eric",
      full_text: "this is a test inserted tweet",
    },
  ];

  return tweets[id];
};

const getInvalidTweet = (error) => {
  const tweets = {
    missingUser: {
      handle: "invalidHandle",
      full_text: "this should fail due to non-existent user",
    },
  };

  return tweets[error];
};

const populateTweet = async () => {
  const { full_text } = { ...getTweet(0) };

  try {
    const users = await models.instance.UsersByHandle.findAsync({ handle: "eric" });

    const insertTweet = {
      tweet_id: models.timeuuid(),
      full_text,
      tweet_date: {
        $db_function: "toTimestamp(now())",
      },
      ...users[0],
    };

    const tweetByHandle = await new models.instance.TweetsByHandle(insertTweet);
    const tweetByTweetId = await new models.instance.Tweet(insertTweet);
    await tweetByHandle.saveAsync();
    await tweetByTweetId.saveAsync();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getTweet,
  getInvalidTweet,
  populateTweet,
};
