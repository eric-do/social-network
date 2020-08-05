const TweetModel = require('./_shared/tweet');

module.exports = {
  fields: {
    ...TweetModel
  },
  key: [["handle"], "tweet_date"],
  clustering_order: { tweet_date: "desc" },
  table_name: "tweets_by_handle"
}
