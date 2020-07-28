const {
  handleValidator,
  aliasValidator,
  avatarValidator
} = require('../validators/UserValidator');

const {
  createdValidator,
  textLengthValidator
} = require('../validators/TweetValidator');

module.exports = {
  handle: {
    type: "text",
    rule: {
      required: true,
      validator: handleValidator,
    }
  },
  alias: {
    type: "text",
    rule: {
      required: true,
      validator: aliasValidator,
    }
  },
  tweet_id: {
    type: "bigint"
  },
  tweet_date: {
    type: "timestamp",
    rule: {
      required: true,
      validator: createdValidator,
    }
  },
  avatar: {
    type: "text",
    rule: {
      required: true,
      validator: avatarValidator,
    }
  },
  full_text: {
    type: "text",
    rule: {
      required: true,
      validator: textLengthValidator
    }
  }
}