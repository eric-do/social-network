const models = require("../database");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const fs = require("fs");

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

const loginUser = async (req, res, next) => {
  const { handle, password } = req.body;

  const throwLoginError = () => {
    throw new Error("Invalid login");
  }

  try {
    const user = await models.instance.UsersByHandle.findOneAsync({ handle });

    if (!user) {
      throwLoginError()
    } else {
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        const privateKey = fs.readFileSync(process.env.JWT_KEY);
        const { email, handle } = user;
        const token = await jwt.sign(
          {
            email,
            handle
          },
          privateKey,
          {
            algorithm: 'RS256',
            expiresIn: "30m"
          });

        req.body.user = { token }

        next();
      } else {
        throwLoginError()
      }
    }

  } catch (e) {
    res.status(400).send({ message: "Invalid login" })
  }
}

const sendUserData = (req, res) => {
  const { user } = req.body;
  const message = "Login successful"
  res.status(200).send({ message, user });
}

module.exports = {
  addUser,
  loginUser,
  sendUserData
};
