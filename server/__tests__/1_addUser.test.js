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

after(async () => {
  try {
    await models.instance.User.truncateAsync();
  } catch (e) {
    console.log('Error cleaning up user table', e);
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

  it("should store an encrypted password instead of the user's password", async () => {
    const user = { ...getUser(0)};

    try {
      const data = await models.instance.User.findAsync({handle: user.handle});
      (data[0].password).should.not.equal(user.password);
    } catch (err) {
      throw err;
    }
  })

  it("should not create user if handle contains special characters", done => {
    const user = { ...getInvalidUser('handleCharacter') };
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

  it("should not create user if handle is too long", done => {
    const user = { ...getInvalidUser('handleLength') };
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

  it("should not create user if email does not have @ character", done => {
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

  it("should not create user if handle is missing", done => {
    const user = { ...getUser(0) };

    delete user.handle;

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

  it("should not create user if email is missing", done => {
    const user = { ...getUser(0) };

    delete user.email;
    
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

  it("should not create user if password is missing", done => {
    const user = { ...getUser(0) };

    delete user.password;
    
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
