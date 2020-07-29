const models = require("express-cassandra");

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
models.setDirectory(__dirname).bind(
  {
    clientOptions: {
      contactPoints: ["127.0.0.1"],
      protocolOptions: { port: 9042 },
      keyspace: "tweeter",
      queryOptions: { consistency: models.consistencies.one },
    },
    ormOptions: {
      defaultReplicationStrategy: {
        class: "SimpleStrategy",
        replication_factor: 1,
      },
      migration: "safe",
    },
  },
  function (err) {
    if (err) throw err;

    const attributes = {
      handle: "eric",
      alias: "cool guy",
      email: "eric@email.com",
      avatar: "https://i.imgur.com/QHXuy5L.gif",
      registration: new Date(),
      password: "123",
    };
    const user = new models.instance.User(attributes);

    user.save((err) => {
      if (err) console.log(err);
      else console.log("inserted user!");
    });
    // You'll now have a `person` table in cassandra created against the model
    // schema you've defined earlier and you can now access the model instance
    // in `models.instance.Person` object containing supported orm operations.
  }
);

module.exports = models;
