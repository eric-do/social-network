DROP TABLE IF EXISTS tweets_by_user;

CREATE TABLE tweets_by_user (
  handle text,
  alias text,
  tweet_id int,
  tweet_date date,
  created_at timestamp,
  avatar text,
  full_text text,
  has_commented boolean,  
  has_favorited boolean,
  PRIMARY KEY ((handle, tweet_date), created_at)
) WITH CLUSTERING ORDER BY (created_at DESC);

INSERT INTO tweets_by_user (handle, alias, tweet_id, tweet_date, created_at, avatar, full_text, has_commented, has_favorited ) 
VALUES ( 'eric', 'cool guy', 1, '2020-07-11', toTimestamp(now()), 'https://i.imgur.com/QHXuy5L.gif', 'Yesterday was my sisters birthday yay', false,  true);
