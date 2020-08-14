const TweetModel = require('./_shared/tweet');

module.exports = {
  fields: {
    ...TweetModel
  },
  key: ["tweet_id"],
}
