import React from 'react';
import TweetCard from './TweetCard';
import styled from 'styled-components';
import data from './dummy';

const FeedContainer = styled.div`
  max-width: 600px;
`;

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

export default Newsfeed;