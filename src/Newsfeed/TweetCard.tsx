import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  color: red;
`;

const Avatar = styled.img``;

const HandleContainer = styled.div``;

const Handle = styled.span``;

const Alias = styled.span``;

const CreatedDate = styled.span``;

const TextContainer = styled.div``;

const SocialContainer = styled.div``;

const SocialButton = styled.div``;

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
    </CardContainer>
  )
};

export default TweetCard;