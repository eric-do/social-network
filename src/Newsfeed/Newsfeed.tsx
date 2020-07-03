import React from 'react';
import TweetCard from './TweetCard/TweetCard';
import styled from 'styled-components';
import data from './dummy';

const Newsfeed = () => {
  return (
    <FeedContainer>
      <title>Newsfeed</title>
      {
        data.map(tweet => <TweetCard key={tweet.tweet_id} tweet={tweet} />)
      }
    </FeedContainer>
  )
};

const FeedContainer = styled.div``;

export default Newsfeed;