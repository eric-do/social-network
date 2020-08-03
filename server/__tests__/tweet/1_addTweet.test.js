/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet } = require("./data");
chai.use(chaiHttp);
chai.should();

describe("/api/tweet/", () => {
  it("should create valid tweet", done => {
    const tweet = { ...getTweet(0) };
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
        throw err;
      })
  });
});