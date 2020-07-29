const models = require('../database');

const add = async attributes => {
  const user = new models.instance.User(attributes)
  await user.saveAsync();
}

module.exports = {
  add
}