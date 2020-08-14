/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const chaiTime = require("chai-datetime");
const app = require("../..");
const { models } = require("../testDb");
chai.use(chaiHttp);
chai.use(chaiTime);
chai.should();

describe("GET /api/timeline/:handle", () => {
  it("should respond with a tweet and status 200 for a valid tweet ID", async () => {
    const handle = "eric";

    try {
      const res = await chai
        .request(app)
        .get(`/api/timeline/${handle}`)
        .send();

      const { timeline } = res.body;
      res.should.have.status(200);
      res.body.should.include.keys('timeline');
      timeline.should.be.an('array');
      timeline.length.should.not.equal(0);
      timeline[0].should.have.all.keys(
        'tweet_id',
        'handle',
        'alias',
        'avatar',
        'tweet_date',
        'full_text'
      );
    } catch (e) {
      throw e;
    }
  });
});