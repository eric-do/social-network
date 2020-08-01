/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../");
const { connect, models } = require("./testDb");
chai.use(chaiHttp);
chai.should();

exports.mochaHooks = {
  beforeAll: async () => {
    try {
      await connect();
      await models.instance.UsersByHandle.truncateAsync();
      await models.instance.UsersByEmail.truncateAsync();
    } catch (e) {
      console.log("Error initializing user table", e);
    }
  },

  afterAll: async () => {
    try {
      await models.instance.UsersByHandle.truncateAsync();
      await models.instance.UsersByEmail.truncateAsync();
      await models.closeAsync();
      app.close();
    } catch (e) {
      console.log("Error cleaning up user table", e);
    }
  },
};
