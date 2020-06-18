import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  color: red;
`;

interface tweetProps {
  key: number;
  tweet: {
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
}

const TweetCard = ({ tweet }: tweetProps) => {
  return (
    <CardContainer>{tweet.handle}</CardContainer>
  )
};

export default TweetCard;