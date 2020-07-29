const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../");
const { connect, models } = require("./testDb");
const { getUser } = require("./data");
chai.use(chaiHttp);
chai.should();

connect(() => {
  describe("/api/user/signup", () => {
    it("should create valid user", (done) => {
      const user = { ...getUser(1) };
      chai
        .request(app)
        .post("/api/user/signup")
        .set("content-type", "application/json")
        .send(user)
        .end((err, res) => {
          if (err) console.log(err);
          else {
            res.should.have.status(201);
            res.body.should.have.property("message");
          }
          done();
        });
    });
  });
});
