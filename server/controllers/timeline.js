const models = require("../database");

const getTimeline = async (req, res, next) => {
  const { handle } = req.params;
  try {
    req.body.timeline = await models.instance.TweetsByHandle.findAsync({ handle });

    next();
  } catch (e) {
    const { message } = e;
    console.log(message);
    res.status(400).send({ message });
  }
}

const sendTimelineData = async (req, res) => {
  const { timeline } = req.body;

  res.status(200).send({ timeline });
}

module.exports = {
  getTimeline,
  sendTimelineData
}