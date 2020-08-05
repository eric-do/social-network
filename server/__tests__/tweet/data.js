const { models } = require('../testDb');

const getTweet = id => {
  const tweets = [
    {
      handle: 'eric',
      full_text: 'cool guy',
    },
  ];

  return tweets[id];
}

module.exports = {
  getTweet,
}