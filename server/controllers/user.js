const models = require("../database");
const bcrypt = require('bcrypt');

const addUser = async (req, res) => {
  const user = {
    ...req.body,
    registration: {
      $db_function: "toTimestamp(now())",
    },
  };

  const queries = [];
  const userByHandle = new models.instance.UsersByHandle(user);
  const userByEmail = new models.instance.UsersByEmail(user);

  const handleQuery = userByHandle.save({ return_query: true })
  const emailQuery = userByEmail.save({ return_query: true });
  queries.push(handleQuery, emailQuery)
  
  try {
    await models.doBatchAsync(queries);
    res.status(201).send({ message: "User successfully created" });
  } catch (e) {
    const { message } = e;
    res.status(400).send({ message });
  }
};

const loginUser = async (req, res) => {
  const { handle, password } = req.body;

  try {
    const data = await models.instance.UsersByHandle.findAsync({ handle });
    
    if (data.length === 0) {
      res.status(400).send({ message: "Invalid login" });
    } else {
      const match = await bcrypt.compare(password, data[0].password);

      if (match) {
        res.status(201).send({ message: "Success" });
      } else {
        res.status(400).send({ message: "Invalid login" })
      }
    }

  } catch (e) {
    res.status(400).send({ message: "Invalid login" })
  }
}

module.exports = {
  addUser,
  loginUser
};
