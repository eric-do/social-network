/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet } = require("./data");
chai.use(chaiHttp);
chai.should();

describe("/api/tweet/favorite", () => {
  it("should return a 201 for a successful favorite", async () => {
    // get tweets by handle 'eric'
    // get tweet_id from first tweet in array
    // make POST request with tweet_id and favoriting user handle

    try {
      const tweets = await models.instance.TweetsByHandle.findAsync({
        handle: "eric",
      });
      const { tweet_id } = tweets[0];
      const favorite = {
        tweet_id: tweet_id.toString(),
        handle: "tina",
      };

      const res = await chai
        .request(app)
        .post(`/api/tweet/favorite`)
        .set("content-type", "application/json")
        .send(favorite);

      res.should.have.status(201);
      res.body.should.have.property("message");
      
    } catch (err) {
      throw err;
    }
  });
});
