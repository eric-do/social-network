/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet } = require("./data");
chai.use(chaiHttp);
chai.should();

describe("POST /api/tweet/favorite", () => {
  it("should return a 201 for a successful favorite", async () => {
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

  xit("should increment favorite count by 1", async () => {
    // Get favorite count for initialized tweet
    // Get favorite count for given tweet
    // Confirm count has been incremented by 1
  });
});

describe("GET /api/tweet/:tweet_id/interactions", () => {
  xit("should return tweet interaction count", async () => {
    try {

    } catch (e) {
      const tweets = await models.instance.TweetsByHandle.findAsync({
        handle: "eric",
      });

      const { tweet_id } = tweets[0]; 
      const res = await chai
        .request(app)
        .get(`/api/tweet/${tweet_id}/favorite`)
        .set("content-type", "application/json")
        .send();
    }
  })
});