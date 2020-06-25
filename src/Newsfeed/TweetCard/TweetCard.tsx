import React from 'react';
import styled from 'styled-components';
import { getDisplayDate} from '../utils/moment';
import { ITweet } from '../types';
import SocialSection from './SocialSection';

const CardContainer = styled.div`
  color: red;
  border: 1px solid red;
  display: flex;
  margin: 5px 5px;
  padding: 5px 15px;
`;

const AvatarContainer = styled.div`
  max-width: 100px;
  border: 1px solid red;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
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

const DateDivider = styled(TweetInfo)`
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
  white-space: pre-wrap;
`;

export interface tweetProps {
  key: number;
  tweet: ITweet
}

const TweetCard = ({ tweet }: tweetProps) => {

  const displayDate = getDisplayDate(tweet.created_at);

  return (
    <CardContainer>
      <AvatarContainer>
        <Avatar src={tweet.avatar} />
      </AvatarContainer>
      <ContentContainer>
        <HandleContainer>
          <Alias>{tweet.alias}</Alias>
          <Handle>@{tweet.handle}</Handle>
          <DateDivider> · </DateDivider>
          <CreatedDate>{displayDate}</CreatedDate>
        </HandleContainer>
        <TweetTextContainer>
          <TweetText>
            {tweet.full_text}
          </TweetText>
        </TweetTextContainer>
        <SocialSection 
          tweet_id={tweet.tweet_id} 
          reply_count={tweet.reply_count} 
          retweet_count={tweet.retweet_count}
          favorite_count={tweet.favorite_count}
        />
      </ContentContainer>
    </CardContainer>
  )
};

export default TweetCard;