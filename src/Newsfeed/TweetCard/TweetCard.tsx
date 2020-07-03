import React, { useState, useEffect }   from 'react';
import styled from 'styled-components';
import { getDisplayDate} from '../utils/moment';
import { ITweet } from '../types/tweets';
import SocialSection from './SocialSection';
import { fetchTweet } from '../api';

export interface tweetProps {
  key: number;
  tweet: ITweet
}

const TweetCard = ({ tweet }: tweetProps) => {
  const displayDate = getDisplayDate(tweet.created_at);

  const [ updatedTweet, setTweet ] = useState(tweet)
  const [ isHovered, setHovered ] = useState(false);

  const getTweet = async (tweet_id: number) => {
    try {
      const tweet= await fetchTweet(tweet_id);

      setTweet(tweet);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <CardContainer
      data-testid="tweet-card"
      hover={isHovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AvatarContainer>
        <Avatar src={updatedTweet.avatar} />
      </AvatarContainer>
      <ContentContainer>
        <HandleContainer>
          <Alias>{updatedTweet.alias}</Alias>
          <Handle>@{updatedTweet.handle}</Handle>
          <DateDivider> · </DateDivider>
          <CreatedDate>{displayDate}</CreatedDate>
        </HandleContainer>
        <TweetTextContainer>
          <TweetText>
            {updatedTweet.full_text}
          </TweetText>
        </TweetTextContainer>
        <SocialSection 
          tweet_id={tweet.tweet_id} 
          social={tweet.social}
        />
      </ContentContainer>
    </CardContainer>
  )
};

const CardContainer = styled.div<{hover: boolean}>`
  color: red;
  border: 1px solid rgb(56, 68, 77);
  display: flex;
  margin: 0 5px;
  padding: 5px 15px;
  background: ${props => props.hover ? 'rgb(255,255,255,0.02)' : 'inherit'}
`;

const AvatarContainer = styled.div`
  max-width: 100px;
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

export default TweetCard;