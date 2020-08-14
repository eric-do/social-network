const { models } = require('../testDb');
const bcrypt = require('bcrypt');

const getUser = id => {
  const users = [
    {
      handle: 'eric',
      alias: 'cool guy',
      email: 'eric@email.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: 'abcd1234',
    },
    {
      handle: 'tina',
      alias: 'cool girl',
      email: 'tina@email.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: 'abcd1234',
    },
    {
      handle: 'mom',
      alias: 'cool mom',
      email: 'mom@email.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: 'abcd1234',
    },
    {
      handle: 'dad',
      alias: 'cool dad',
      email: 'dad@email.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: 'abcd1234',
    },
  ];

  return users[id];
}

const getInvalidUser = issue => {
  const users = {
    invalidHandleCharacter: {
      handle: 'eric test',
      alias: 'cool guy',
      email: 'invalid@user.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: '123',
    },
    invalidHandleLength: {
      handle: 'ericericericeric',
      alias: 'cool guy',
      email: 'invalid@user.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: '123',
    },
    invalidEmailCharacter: {
      handle: 'tina',
      alias: 'cool girl',
      email: 'tina',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      password: '456',
    }
  };
  
  return users[issue];
}

const populateUser = async () => {
  const user = { 
    ...getUser(0),
    registration: {
      $db_function: 'toTimestamp(now())'
    },
  };

  try {
    user.password = await bcrypt.hash(user.password, 7);
    const userByHandle = new models.instance.UsersByHandle(user);
    const userByEmail = new models.instance.UsersByEmail(user);

    await Promise.all([userByHandle.saveAsync(), userByEmail.saveAsync()]);
  } catch (e) {
    console.log(e);
  }
}

module.exports = {
  getUser,
  getInvalidUser,
  populateUser,
}