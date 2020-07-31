const models = require('../database');

const addUser = async (req, res) => {
  const userByHandle = new models.instance.UsersByHandle({
    ...req.body, 
    registration: { 
      $db_function: 'toTimestamp(now())' 
    }
  });

  const userByEmail = new models.instance.UsersByEmail({
    ...req.body, 
    registration: { 
      $db_function: 'toTimestamp(now())' 
    }
  });

  try {
    await userByHandle.saveAsync();
    await userByEmail.saveAsync();
    res.status(201).send({message: "User successfully created"});
    } catch (e) {
    const { message } = e;
    res.status(400).send({ message });
  }
}

module.exports = {
  addUser
}