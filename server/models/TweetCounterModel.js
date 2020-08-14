module.exports = {
  fields: {
    tweet_id: {
      type: "timeuuid",
      rule: {
        required: true,
      }
    },
    likes: {
      type: "counter",
    },
    retweets: {
      type: "counter",
    },
    comments: {
      type: "counter",
    },
  },
  key: ["tweet_id"],
  table_name: "tweet_counter"
}
