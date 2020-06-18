import React from 'react';
import styled from 'styled-components';
import { ITweet } from '../Newsfeed';
import SocialButtons from './SocialButtons';

const CardContainer = styled.div`
  color: red;
`;

const Avatar = styled.img``;

const HandleContainer = styled.div``;

const Handle = styled.span``;

const Alias = styled.span``;

const CreatedDate = styled.span``;

const TextContainer = styled.div``;

const SocialButton = styled.div``;

export interface tweetProps {
  key: number;
  tweet: ITweet
}

const TweetCard = ({ tweet }: tweetProps) => {
  return (
    <CardContainer>
      <Avatar src={tweet.avatar} />
      <HandleContainer>
        <Handle>{tweet.handle}</Handle>
        <Alias>{tweet.alias}</Alias>
        <CreatedDate>{tweet.created_at}</CreatedDate>
      </HandleContainer>
      <TextContainer>
        {tweet.full_text}
      </TextContainer>
      <SocialButtons 
        tweet_id={tweet.tweet_id} 
        reply_count={tweet.reply_count} 
        retweet_count={tweet.retweet_count}
        favorite_count={tweet.favorite_count}
      />
    </CardContainer>
  )
};

export default TweetCard;