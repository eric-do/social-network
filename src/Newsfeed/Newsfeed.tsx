import React from 'react';
import TweetCard from './TweetCard/TweetCard';
import styled from 'styled-components';
import data from './dummy';

export interface ITweet {
  tweet_id: number;
  handle: string;
  alias: string;
  avatar: string;
  created_at: string;
  full_text: string;
  favorite_count: number;
  reply_count: number;
  retweet_count: number;
}

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