const models = require('express-cassandra');

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
const dbOptions = {
  clientOptions: {
      contactPoints: ['127.0.0.1'],
      protocolOptions: { port: 9042 },
      keyspace: 'tweeter',
      queryOptions: {consistency: models.consistencies.one}
  },
  ormOptions: {
      defaultReplicationStrategy : {
          class: 'SimpleStrategy',
          replication_factor: 1
      },
      migration: 'safe'
  }
}

const connect = callback => {
  models.setDirectory(__dirname + '/../models').bind(dbOptions, callback)
}

module.exports = { connect, models };