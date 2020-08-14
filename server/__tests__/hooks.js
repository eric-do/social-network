/* eslint-env mocha */
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../");
const { connect, models } = require("./testDb");
const { populateUser } = require("./user/data");
const { populateTweet } = require("./tweet/data");
chai.use(chaiHttp);
chai.should();

const truncateTables = async () => {
  await models.instance.UsersByHandle.truncateAsync();
  await models.instance.UsersByEmail.truncateAsync();
  await models.instance.TweetCounter.truncateAsync();
};

exports.mochaHooks = {
  beforeAll: async () => {
    try {
      await connect();
      await truncateTables()
      await populateUser();
      await populateTweet();
    } catch (e) {
      console.log("Error initializing user table", e);
    }
  },

  afterAll: async () => {
    try {
      await truncateTables()
      await models.closeAsync();
      app.close();
    } catch (e) {
      console.log("Error cleaning up user table", e);
    }
  },
};
