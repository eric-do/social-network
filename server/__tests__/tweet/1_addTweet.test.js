/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet, getInvalidTweet } = require("./data");
chai.use(chaiHttp);
chai.should();

describe("/api/tweet/", () => {
  it("should respond with a 201 status for valid tweet inputs", done => {
    const tweet = { ...getTweet(1) };
    chai
      .request(app)
      .post(`/api/tweet`)
      .set("content-type", "application/json")
      .send(tweet)
      .then(res => {
        res.should.have.status(201);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        console.log(err);
      })
  });

  it("should find inserted tweet and inserted tweet should have no interactions", async () => {
    const newTweet = { ...getTweet(1) };

    try {
      const tweets = await models
        .instance
        .TweetsByHandle
        .findAsync({ handle: newTweet.handle }, {raw: true});
     
      const foundTweet = tweets[0];

      const favorited = await models
        .instance
        .TweetCounter
        .findOneAsync({ tweet_id: foundTweet.tweet_id })

      foundTweet.should.deep.include(newTweet);
      foundTweet.should.have.any.keys("tweet_id");
      favorited.likes.toNumber().should.equal(0)
      favorited.comments.toNumber().should.equal(0)
      favorited.retweets.toNumber().should.equal(0)
    } catch (err) {
      throw err;
    }
  });

  it("should respond with an error status for an empty tweet", done => {
    const tweet = { ...getTweet(1) };
    
    delete tweet.full_text;

    chai
      .request(app)
      .post(`/api/tweet`)
      .set("content-type", "application/json")
      .send(tweet)
      .then(res => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        throw err;
      })
  });

  it("should respond with an error status for a tweet from non-existent user", done => {
    const tweet = { ...getInvalidTweet('missingUser') };

    chai
      .request(app)
      .post(`/api/tweet`)
      .set("content-type", "application/json")
      .send(tweet)
      .then(res => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        throw err;
      })
  });
});