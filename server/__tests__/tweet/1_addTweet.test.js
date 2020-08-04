/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { models } = require("../testDb");
const { getTweet } = require("./data");
chai.use(chaiHttp);
chai.should();

describe("/api/tweet/", () => {
  it("should respond with a 201 status for valid tweet inputs", done => {
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

  it("should respond with an error status for an empty tweet", done => {
    const tweet = { ...getTweet(0) };
    
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
        console.log(err)
      })
  });
});