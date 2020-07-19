DROP TABLE IF EXISTS tweets_by_user;

CREATE TABLE tweets_by_user (
  handle text,
  alias text,
  tweet_id int,
  tweet_date date,
  created_at timestamp,
  avatar text,
  full_text text
  PRIMARY KEY ((handle, tweet_date), created_at)
) WITH CLUSTERING ORDER BY (created_at DESC);

INSERT INTO tweets_by_user (handle, alias, tweet_id, tweet_date, created_at, avatar, full_text, has_commented, has_favorited ) 
VALUES ( 'eric', 'cool guy', 1, '2020-07-11', toTimestamp(now()), 'https://i.imgur.com/QHXuy5L.gif', 'Yesterday was my sisters birthday yay');


DROP TABLE IF EXISTS comments_by_tweet;

CREATE TABLE comments_by_tweet (
  tweet_id int,
  comment_id int,
  handle text,
  alias text,
  tweet_date date,
  created_at timestamp,
  avatar text,
  full_text text
  PRIMARY KEY (tweet_id, created_at)
) WITH CLUSTERING ORDER BY (created_at DESC);

INSERT INTO tweets_by_user (tweet_id, comment_id, handle, alias, created_at, avatar, full_text) 
VALUES (1, 1, 'tina', 'cool girl', toTimestamp(now()), 'https://i.imgur.com/QHXuy5L.gif', 'Happy birthday brother!');

CREATE TABLE comments_by_user (
  tweet_id int,
  handle text,
  PRIMARY KEY ((tweet_id, handle))
);

CREATE TABLE favorites_by_user (
  tweet_id int,
  handle text,
  PRIMARY KEY ((tweet_id, handle))
);

INSERT INTO favorites_by_user (tweet_id, handle) 
VALUES (1, 'eric');

CREATE TABLE retweets_by_user (
  tweet_id int,
  handle text,
  PRIMARY KEY ((tweet_id, handle))
);