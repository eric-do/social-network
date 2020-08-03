const models = require("../database");

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
  res.status(201).send({ message: 'test' });
}

module.exports = {
  addUser,
  loginUser
};
