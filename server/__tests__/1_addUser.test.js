/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../");
const { connect, models } = require("./testDb");
const { getUser, getInvalidUser } = require("./data");
chai.use(chaiHttp);
chai.should();

before(async () => {
  try {
    await connect();
    await models.instance.User.truncateAsync();
  } catch (e) {
    console.log('Error initializing user table', e);
  }
});

describe("/api/user/signup", () => {
  it("should create valid user", done => {
    const user = { ...getUser(0) };
    chai
      .request(app)
      .post("/api/user/signup")
      .set("content-type", "application/json")
      .send(user)
      .then(res => {
        res.should.have.status(201);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        throw err;
      })
  });

  it("should find inserted user in database", async () => {
    const user = { ...getUser(0)};

    try {
      const data = await models.instance.User.findAsync({handle: user.handle});
      data.should.have.lengthOf(1);
      data[0].should.have.property('handle', user.handle);
      data[0].should.have.property('email', user.email);
      data[0].should.have.property('alias', user.alias);
      data[0].should.have.property('avatar', user.avatar);
    } catch (err) {
      throw err;
    }
  });

  it("should store the user's password as encrypted value", async () => {
    const user = { ...getUser(0)};

    try {
      const data = await models.instance.User.findAsync({handle: user.handle});
      (data[0].password).should.not.equal(user.password);
    } catch (err) {
      throw err;
    }
  })

  it("should respond with an error for invalid handle", done => {
    const user = { ...getInvalidUser('handle') };
    chai
      .request(app)
      .post("/api/user/signup")
      .set("content-type", "application/json")
      .send(user)
      .then(res => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        throw err;
      })
  });

  it("should respond with an error for invalid email", done => {
    const user = { ...getInvalidUser('email') };
    chai
      .request(app)
      .post("/api/user/signup")
      .set("content-type", "application/json")
      .send(user)
      .then(res => {
        res.should.have.status(400);
        res.body.should.have.property("message");
        done();
      })
      .catch(err => {
        throw err;
      })
  });
});
