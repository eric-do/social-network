import React from 'react';
import styled from 'styled-components';
import { ITweet } from '../Newsfeed';

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
    </CardContainer>
  )
};

export default TweetCard;