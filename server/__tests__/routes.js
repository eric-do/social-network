const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('..');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Routes", () => {
  describe("GET /", () => {
    // Test to get all students record
    xit("should return status 200", (done) => {
      chai
        .request(app)
        .get("/")
        .end((err, res) => {
          // console.log(err, res)
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
