const models = require('../database');

const addUser = async (req, res) => {
  const user = new models.instance.UsersByHandle(req.body)

  try {
    const { handle } = user;
    const data = await models.instance.UsersByHandle.findAsync({ handle });
    if (data.length > 0) {
      res.status(409).send({ message: "Handle is unavailable" });
    } else {
      await user.saveAsync();
      res.status(201).send({message: "User successfully created"});
    }
  } catch (e) {
    const { message } = e;
    res.status(400).send({ message });
  }
}

module.exports = {
  addUser
}