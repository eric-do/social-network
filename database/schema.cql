-- TWEETS BY USER --
DROP TABLE IF EXISTS tweets_by_user;

CREATE TABLE tweets_by_user (
  handle text,
  alias text,
  tweet_id int,
  tweet_date date,
  created_at timestamp,
  avatar text,
  full_text text,
  PRIMARY KEY ((handle, tweet_date), created_at)
) WITH CLUSTERING ORDER BY (created_at DESC);

INSERT INTO tweets_by_user (handle, alias, tweet_id, tweet_date, created_at, avatar, full_text) 
VALUES ( 'eric', 'cool guy', 1, '2020-07-11', toTimestamp(now()), 'https://i.imgur.com/QHXuy5L.gif', 'Yesterday was my sisters birthday yay');


-- COMMENTS BY TWEET--
DROP TABLE IF EXISTS comments_by_tweet;

CREATE TABLE comments_by_tweet (
  tweet_id int,
  comment_id int,
  handle text,
  alias text,
  tweet_date date,
  created_at timestamp,
  avatar text,
  full_text text,
  PRIMARY KEY (tweet_id, created_at)
) WITH CLUSTERING ORDER BY (created_at DESC);

INSERT INTO comments_by_tweet (tweet_id, comment_id, handle, alias, created_at, avatar, full_text) 
VALUES (1, 2, 'tina', 'cool girl', toTimestamp(now()), 'https://i.imgur.com/QHXuy5L.gif', 'Happy birthday brother!');


-- FAVORITES BY TWEET--
DROP TABLE IF EXISTS favorites_by_tweet;

CREATE TABLE favorites_by_tweet (
  tweet_id int,
  handle text,
  PRIMARY KEY (tweet_id)
);

INSERT INTO favorites_by_tweet (tweet_id, handle) VALUES (1, 'tina');


-- COMMENTS BY USER--
DROP TABLE IF EXISTS tweet_comments_by_user;

CREATE TABLE tweet_comments_by_user (
  tweet_id int,
  handle text,
  PRIMARY KEY ((tweet_id, handle))
);

INSERT INTO tweet_comments_by_user (tweet_id, handle) VALUES (1, 'tina');

-- FAVORITES BY USER --
DROP TABLE IF EXISTS favorites_by_user;

CREATE TABLE favorites_by_user (
  tweet_id int,
  handle text,
  PRIMARY KEY ((tweet_id, handle))
);

INSERT INTO favorites_by_user (tweet_id, handle) VALUES (1, 'eric');
INSERT INTO favorites_by_user (tweet_id, handle) VALUES (1, 'tina');


-- RETWEETS BY USER --
DROP TABLE IF EXISTS retweets_by_user;

CREATE TABLE retweets_by_user (
  tweet_id int,
  handle text,
  PRIMARY KEY (handle, tweet_id)
);

INSERT INTO retweets_by_user (tweet_id, handle) VALUES (1, 'eric');
INSERT INTO retweets_by_user (tweet_id, handle) VALUES (2, 'eric');