import React from 'react';
import TweetCard from './TweetCard';
import data from './dummy';

const Newsfeed = () => {
  return (
    <div>
      <title>Newsfeed</title>
      {
        data.map(tweet => <TweetCard key={tweet.tweet_id} tweet={tweet} />)
      }
    </div>
  )
};

export default Newsfeed;