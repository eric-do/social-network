/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiTime = require("chai-datetime");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet, getInvalidTweet } = require("./data");
chai.use(chaiHttp);
chai.use(chaiTime);
chai.should();

describe("GET /api/tweet/:tweet_id", () => {
  it("should respond with a 200 status for a valid tweet ID", async () => {
    const handle = "eric";

    try { 
      const tweets = await models.instance.TweetsByHandle.findAsync({ handle }, { raw: true });
      const compareTweet = tweets[0];
      const { tweet_id } = compareTweet;

      const res = await chai
        .request(app)
        .get(`/api/tweet/${tweet_id.toString()}`)
        .send();

      console.log(compareTweet, res.body.tweet);
      const { tweet } = res.body;
      const responseDate = new Date(tweet.tweet_date);
      const compareDate = compareTweet.tweet_date;
      
      res.should.have.status(200);
      res.body.should.have.all.keys('tweet');
      tweet.tweet_id.should.equal(compareTweet.tweet_id.toString());
      tweet.handle.should.equal(compareTweet.handle);
      tweet.alias.should.equal(compareTweet.alias);
      tweet.avatar.should.equal(compareTweet.avatar);
      responseDate.should.equalDate(compareDate);
      tweet.full_text.should.equal(compareTweet.full_text);
    } catch (e) {
      throw e;
    }
  });
});