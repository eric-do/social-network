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
      avatar: 'cat.png',
      registration: new Date(),
      password: '456',
    }
  ];

  return users[id];
}

const populate = () => {
  console.log(db.connect)
  db.connect()
    .then(() => {
      console.log(db.models)
      const user = new db.models.instance.User({...getUser(1)});
      return user.save();
    })
    .then(() => console.log('success'))
    .catch(e => console.error(e));
}

module.exports = {
  getUser,
  populate,
}

populate();