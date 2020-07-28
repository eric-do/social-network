const TweetModel = require('./_shared/tweet');
const { handleValidator } = require('./validators/UserValidator');
const { dateValidator } = require('./validators/NewsfeedValidator');

module.exports = {
  fields: {
    handle: {
      type: "text",
      rule: {
        required: true,
        validator: handleValidator
      }
    },
    created_at: {
      type: "date",
      rule: {
        required: true,
        validator: dateValidator
      }
    },
    ...TweetModel
  },
  key: [["handle", "created_at"], "tweet_date"]
}
