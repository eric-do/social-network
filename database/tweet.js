const db = require('./');

const getTweetsByHandle = async handle => {
  const query = `SELECT * FROM tweets_by_user WHERE handle = ? and tweet_date= ?`; 
  const values = [ handle, '2020-07-11'];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);

  return rows;
}

const addTweetByHandle = async tweet => {
  const {  handle, alias, tweet_id, 
           tweet_date, created_at, 
           avatar, full_text, has_commented, 
           has_favorited } = tweet;
  
  const query = `INSERT INTO tweets_by_user (
    handle, alias, tweet_id, 
    tweet_date, created_at, 
    avatar, full_text, has_commented, 
    has_favorited 
  ) 
  VALUES ( 
    '${ handle }', '${ alias }'
    'test user', 1, 
    '2020-07-11', 
    toTimestamp(now()), 
    'https://i.imgur.com/QHXuy5L.gif', 
    'I am a test user', 
    false,  
    true
  )`;
}

module.exports = { getTweetsByHandle };