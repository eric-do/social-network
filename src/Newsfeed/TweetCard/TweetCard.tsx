import React, { useState } from 'react';
import { getDisplayDate} from '../utils/moment';
import { ITweet } from '../types/tweets';
import SocialSection from './SocialSection';
import * as Styled from './TweetCard.style';

export interface tweetProps {
  key: number;
  tweet: ITweet
}

const TweetCard = ({ tweet }: tweetProps) => {
  const displayDate = getDisplayDate(tweet.created_at);

  const [ isHovered, setHovered ] = useState(false);

  return (
    <Styled.CardContainer
      data-testid="tweet-card"
      hover={isHovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Styled.AvatarContainer>
        <Styled.Avatar src={tweet.avatar} />
      </Styled.AvatarContainer>
      <Styled.ContentContainer>
        <Styled.HandleContainer>
          <Styled.Alias>{tweet.alias}</Styled.Alias>
          <Styled.Handle>@{tweet.handle}</Styled.Handle>
          <Styled.DateDivider> · </Styled.DateDivider>
          <Styled.CreatedDate>{displayDate}</Styled.CreatedDate>
        </Styled.HandleContainer>
        <Styled.TweetTextContainer>
          <Styled.TweetText>
            {tweet.full_text}
          </Styled.TweetText>
        </Styled.TweetTextContainer>
        <SocialSection 
          handle={tweet.handle}
          tweet_id={tweet.tweet_id} 
        />
      </Styled.ContentContainer>
    </Styled.CardContainer>
  )
};

export default TweetCard;