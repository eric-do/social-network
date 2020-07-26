import React from 'react';
import TweetCard from './TweetCard/TweetCard';
import styled from 'styled-components';
import { ITweet } from './types/tweets';

const Newsfeed = ({ tweets }: { tweets: ITweet[] }) => {
  return (
    <FeedContainer>
      <title>Newsfeed</title>
      {
        tweets.map(tweet => <TweetCard key={tweet.tweet_id} tweet={tweet} />)
      }
    </FeedContainer>
  )
};

const FeedContainer = styled.div``;

export default Newsfeed;