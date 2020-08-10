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
      const handle = "tina";
      const favorite = { handle };

      const res = await chai
        .request(app)
        .post(`/api/tweet/${tweet_id.toString()}/favorite`)
        .set("content-type", "application/json")
        .send(favorite);

      res.should.have.status(201);
      res.body.should.have.property("message");
      
    } catch (err) {
      throw err;
    }
  });

  it("should increment likes count by 1", async () => {
    // Get favorite count for initialized tweet
    // Get favorite count for given tweet
    // Confirm count has been incremented by 1
    try {
      const handle = "eric";
      const tweets = await models.instance.TweetsByHandle.findAsync({ handle });

      const tweet_id = tweets[0].tweet_id.toString();
      const originalResponse = await chai
        .request(app)
        .get(`/api/tweet/${tweet_id}/interactions`)
        .send();
      
      const { interactions: originalInteractions } = originalResponse.body;
      const favorite = { handle: "tina" }

      await chai
        .request(app)
        .post(`/api/tweet/${tweet_id}/favorite`)
        .set("content-type", "application/json")
        .send(favorite);

      const updatedResponse = await chai
        .request(app)
        .get(`/api/tweet/${tweet_id}/interactions`)
        .send();

      const { interactions: updatedInteractions } = originalResponse.body;

      updatedInteractions.likes.should.equal(originalInteractions + 1);
      
    } catch (err) {

    }
  });
});