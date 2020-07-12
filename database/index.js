const cassandra = require('cassandra-driver');
 
const contactPoints = ['127.0.0.1'];

const client = new cassandra.Client({
  contactPoints,
  localDataCenter: 'datacenter1',
  keyspace: 'tweeter'
});
 
const query = `SELECT * FROM tweets_by_user WHERE handle = ? and tweet_date= ?`;
const values = ['eric', '2020-07-11'];
 
client.execute(query, values)
  .then(result => console.log('Found user', result.rows[0]))
  .catch(e => console.error(e));

const getTweetsByUser = async handle => {
  
}