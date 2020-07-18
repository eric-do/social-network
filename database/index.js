const cassandra = require('cassandra-driver');
 
const contactPoints = ['127.0.0.1'];

const client = new cassandra.Client({
  contactPoints,
  localDataCenter: 'datacenter1',
  keyspace: 'tweeter'
});
 
// const query = `SELECT * FROM tweets_by_user WHERE handle = ? and tweet_date= ?`;
// const values = ['eric', '2020-07-11' ];
// const options = { prepare: true };
 
// client.execute(query, values, options)
//   .then(result => console.log('Found user', result.rows[0]))
//   .catch(e => console.error(e));


module.exports = client;