const models = require("../database");

const stringIdToTimeUuid = (req, res, next) => {
  req.params.tweet_id = models.timeuuidFromString(req.params.tweet_id);
  next();
};

module.exports = {
  stringIdToTimeUuid
};