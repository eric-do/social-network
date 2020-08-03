/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../..");
const { getUser } = require("./data");
chai.use(chaiHttp);
chai.should();

// console.log(models);

describe("/api/user/login", () => {
  it("should return a JSON web token when passed valid login", done => {
    const { handle, password } = getUser(0);

    chai
      .request(app)
      .post("/api/user/login")
      .set("content-type", "application/json")
      .send({ handle, password })
      .then(res => {
        res.should.have.status(200);
        (res.body.user).should.have.all.keys("token");
        done();
      })
      .catch(err => {
        console.log(err);
      });
  })

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

  it("should return an error if handle is missing", done => {
    const { password } = getUser(0);

    chai
      .request(app)
      .post("/api/user/login")
      .set("content-type", "application/json")
      .send({ password })
      .then(res => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        console.log(err);
      })
  })

  it("should return an error if password is missing", done => {
    const { handle } = getUser(0);

    chai
      .request(app)
      .post("/api/user/login")
      .set("content-type", "application/json")
      .send({ handle })
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
