const bcrypt = require('bcrypt');
const saltRounds = 7;

const encryptPassword = async (req, res, next) => {
  const { password } = req.body;
  
  try {
    req.body.password = await bcrypt.hash(password, saltRounds);
    next();
  } catch (e) {
    res.status(400).send({message: "Password field cannot be empty"})
  }
}

module.exports = {
  encryptPassword
}