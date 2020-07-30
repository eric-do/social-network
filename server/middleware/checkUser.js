const models = require('../database');

const rejectExistingUser = async (req, res, next) => {
  const { handle } = req.body;

  try {
    const data = await models.instance.UsersByHandle.findAsync({ handle });
    if (data.length > 0) {
      res.status(409).send({ message: "Handle is unavailable" });
    } else {
      next();
    }
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "Something went wrong" });
  }
}

module.exports = {
  rejectExistingUser
}