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
      validators: [handleValidator],
    }
  },
  alias: {
    type: "text",
    rule: {
      required: true,
      validators: [aliasValidator],
    }
  },
  tweet_id: {
    type: "timeuuid",
    rule: {
      required: true
    }
  },
  tweet_date: {
    type: "timestamp",
    rule: {
      required: true,
      validators: [createdValidator],
    }
  },
  avatar: {
    type: "text",
    rule: {
      required: true,
      validators: [avatarValidator],
    }
  },
  full_text: {
    type: "text",
    rule: {
      required: true,
      validators: [textLengthValidator]
    }
  }
}