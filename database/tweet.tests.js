const db = require('./index');
const { getTweetsByUser } = require('./tweet');
const chai = require('chai');
const should = chai.should();

chai.should();

describe('Get tweets by user', () => {
  before(async () => {
    const query = `INSERT INTO tweets_by_user (
                     handle, alias, tweet_id, 
                     tweet_date, created_at, 
                     avatar, full_text, has_commented, 
                     has_favorited 
                   ) 
                   VALUES ( 
                     'test_user', 
                     'test user', 1, 
                     '2020-07-11', 
                     toTimestamp(now()), 
                     'https://i.imgur.com/QHXuy5L.gif', 
                     'I am a test user', 
                     false,  
                     true
                   )`;

    await db.execute(query);
  });  

  after(async () => {
    const query = `DELETE FROM tweets_by_user WHERE handle='test_user' AND tweet_date='2020-07-11'`;
    await db.execute(query);
  })

  it('should get all tweets for a given userId', async () => {
    try {
      const tweets = await getTweetsByUser('test_user');

      (tweets.length).should.equal(1);
    } catch (e) {
      console.log(e);
    }
  })
})

describe('Insert tweet by user', () => {
  before(async () => {
    const query = `INSERT INTO tweets_by_user (
                     handle, alias, tweet_id, 
                     tweet_date, created_at, 
                     avatar, full_text, has_commented, 
                     has_favorited 
                   ) 
                   VALUES ( 
                     'test_user', 
                     'test user', 1, 
                     '2020-07-11', 
                     toTimestamp(now()), 
                     'https://i.imgur.com/QHXuy5L.gif', 
                     'I am a test user', 
                     false,  
                     true
                   )`;

    await db.execute(query);
  });  

  after(async () => {
    const query = `DELETE FROM tweets_by_user WHERE handle='test_user' AND tweet_date='2020-07-11'`;
    await db.execute(query);
  })

  it('should get all tweets for a given userId', async () => {
    try {
      const tweets = await getTweetsByUser('test_user');

      (tweets.length).should.equal(1);
    } catch (e) {
      console.log(e);
    }
  })
})