const models = require('../database');

const addUser = async (req, res) => {
  const user = new models.instance.UsersByHandle(req.body)

  try {
      await user.saveAsync();
      res.status(201).send({message: "User successfully created"});
    } catch (e) {
    const { message } = e;
    res.status(400).send({ message });
  }
}

module.exports = {
  addUser
}