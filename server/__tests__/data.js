const db = require('./testDb');

const getUser = id => {
  const users = [
    {
      handle: 'eric',
      alias: 'cool guy',
      email: 'eric@email.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      registration: new Date(),
      password: '123',
    },
    {
      handle: 'tina',
      alias: 'cool girl',
      email: 'tina@email.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      registration: new Date(),
      password: '456',
    }
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
      registration: new Date(),
      password: '123',
    },
    invalidHandleLength: {
      handle: 'ericericericeric',
      alias: 'cool guy',
      email: 'invalid@user.com',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      registration: new Date(),
      password: '123',
    },
    invalidEmailCharacter: {
      handle: 'tina',
      alias: 'cool girl',
      email: 'tina',
      avatar: 'https://i.imgur.com/QHXuy5L.gif',
      registration: new Date(),
      password: '456',
    }
  };
  
  return users[issue];
}

const populate = async () => {
  // console.log(db.connect)
  try {
    await db.connect()
  } catch (e) { 
    console.log('hit error')
    console.log(e);
  }
  setTimeout(() => {
    console.log(db);
    const user = new db.models.instance.User({...getUser(1)});
    user.save(err => {
      if (err) console.log(err)
      else console.log('created user');
    });
  }, 3000)
}

module.exports = {
  getUser,
  getInvalidUser,
  populate,
}