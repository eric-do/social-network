const db = require('./');
const { count } = require('console');

module.exports.getTweetsByHandle = async handle => {
  const query = `SELECT * FROM tweets_by_user WHERE handle = ?`; 
  const values = [ handle ];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);

  return rows;
}

module.exports.userHasCommentedOnTweet = async (tweet_id, handle) => {
  const query = `SELECT count(*) FROM tweet_comments_by_user WHERE handle= ? AND tweet_id= ?`;
  const values = [handle, tweet_id];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);
  return rows[0].count > 0;
}

module.exports.getCommentCountForTweet = async tweet_id => {
  const rows = await module.exports.getCommentsForTweet(tweet_id);
  return rows.length;
}

module.exports.getCommentsForTweet = async tweet_id => {
  const query = `SELECT * FROM comments_by_tweet WHERE tweet_id = ?`;
  const values = [ tweet_id ];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);

  return rows;
}

module.exports.userHasFavoritedTweet = async (tweet_id, handle) => {
  const query = `SELECT count(*) FROM favorites_by_user WHERE handle= ? AND tweet_id= ?`;
  const values = [handle, tweet_id];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);
  return rows[0].count > 0;
}

module.exports.getFavoritesCountForTweet = async tweet_id => {
  const query = `SELECT count(*) FROM favorites_by_tweet WHERE tweet_id = ?`;
  const values = [ tweet_id ];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);
  return parseInt(rows[0].count);
}

module.exports.userHasRetweetedTweet = async (tweet_id, handle) => {
  const query = `SELECT count(*) FROM retweets_by_tweet WHERE handle= ? AND tweet_id= ?`;
  const values = [handle, tweet_id];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);
  return rows[0].count > 0; 
}

module.exports.getRetweetCountForTweet = async tweet_id => {
  const query = `SELECT count(*) FROM retweets_by_tweet WHERE tweet_id = ?`;
  const values = [ tweet_id ];
  const options = { prepare: true };

  const { rows } = await db.execute(query, values, options);
  return parseInt(rows[0].count);
}


module.exports.addTweetByHandle = async tweet => {
  const {  handle, alias, tweet_id, 
           tweet_date, created_at, 
           avatar, full_text } = tweet;
  
  const query = `INSERT INTO tweets_by_user (
                   handle, alias, tweet_id, 
                   tweet_date, created_at, 
                   avatar, full_text) 
                 VALUES ( ?, ?, ?, ?, ?, ?, ?)`;
  const values = [ 
    handle, alias, tweet_id, 
    tweet_date, created_at, 
    avatar, full_text
  ];     
  const options = { prepare: true };

  await db.execute(query, values, options);
}