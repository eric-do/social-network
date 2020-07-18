# Tweet Data
## Partition by UserId
- Read/write operations for user tweets will be fast since all tweets on one server/node
- Hot users would cause excess queries to one server
- Hot users with lots of tweets/followers would cause non-uniform data distribution

## Partition by TweetID
- Uniform distribution
- Extremely slow reads - can't get all tweets from single user without scanning all partitions

## Partition by creation time
- Fast access to recent tweets
- Uneven distribution of reads/writes, since all reads/writes at a given point in time will go to one server

## Partition by TweetID and creation time


# Newsfeed data
- N