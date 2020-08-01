/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../");
const { connect, models } = require("./testDb");
const { getUser, getInvalidUser } = require("./data");
chai.use(chaiHttp);
chai.should();

// console.log(models);

describe("/api/user/login", () => {
  it("should login a valid user", done => {
    const { handle, password } = getUser(0);
    chai
      .request(app)
      .post("/api/user/login")
      .set("content-type", "application/json")
      .send({ handle, password })
      .then(res => {
        res.should.have.status(201);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        throw err;
      })
  });

  it("should return an error if login handle does not exist", done => {
    const { handle, password } = getUser(2);
    chai
      .request(app)
      .post("/api/user/login")
      .set("content-type", "application/json")
      .send({ handle, password })
      .then(res => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        console.log(err);
      })
  });
});
