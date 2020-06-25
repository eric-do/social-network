import React from 'react';
import styled from 'styled-components';
import SocialSection from './SocialSection';

interface ContentProps {
  full_text: string;
  alias: string;
  handle: string;
  createdAt: string;
}

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 5px;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;  
  text-align: left;
`;

const HandleContainer = styled(TextContainer)`
`;

const TweetInfo = styled.span`
  font-size: 15px;
  margin-right: 5px;
`;

const Alias = styled(TweetInfo)`
  font-weight: 700;
  color: #FFFFFF;
`;

const Handle = styled(TweetInfo)`
  color: #8899A6;
`;

const CreatedDate = styled(TweetInfo)`
  color: #8899A6;
`;

const TweetTextContainer = styled(TextContainer)``;

const TweetText = styled.span`
  color: #FFFFFF;
  font-size: 15px;
  line-height: 120%;
`;

const ContentSection = ({full_text, alias, handle, createdAt}: ContentProps) => (
  <ContentContainer>
  {/* <HandleContainer>
    <Alias>{alias}</Alias>
    <Handle>@{handle}</Handle>
    <CreatedDate>{createdAt}</CreatedDate>
  </HandleContainer>
  <TweetTextContainer>
    <TweetText>
      {full_text}
    </TweetText>
  </TweetTextContainer>
  <SocialSection 
    tweet_id={tweet_id} 
    reply_count={reply_count} 
    retweet_count={retweet_count}
    favorite_count={favorite_count}
  /> */}
</ContentContainer>
);

export default ContentSection;