
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../');
chai.use(chaiHttp);
chai.should();

describe('/api/user/signup', () => {
  it('should create user', done => {

  })
})