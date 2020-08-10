/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet } = require("./data");
chai.use(chaiHttp);
chai.should();

describe("GET /api/tweet/:tweet_id/interactions", () => {
  it("should return tweet interaction count with status 200", async () => {
    const handle = "eric";
    
    try {
      const tweets = await models.instance.TweetsByHandle.findAsync({ handle }, { raw: true });
      const { tweet_id }  = tweets[0];

      const res = await chai
        .request(app)
        .get(`/api/tweet/${tweet_id}/interactions`)
        .set("content-type", "application/json")
        .send();

      const { interactions } = res.body;
      
      res.status.should.equal(200);
      interactions.likes.should.equal(0);
      interactions.comments.should.equal(0);
      interactions.retweets.should.equal(0);
    } catch (e) {
      console.log(e);
      throw e;
    }
  })
});