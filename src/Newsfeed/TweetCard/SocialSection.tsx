import React from 'react';
import styled from 'styled-components';
import { fetchTweet } from '../api';
import SocialButton from './SocialButton';
import { ISocialInfo } from '../types/social';

interface SocialProps {
  tweet_id: number;
  social: ISocialInfo;
}

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  border: 1px solid yellow;
  color: #8899A6;
  font-size: 13px;
`;

const SocialButtons = (props: SocialProps) => {
  
  const { tweet_id } = props;
  const { comments, retweets, favorites} = props.social;

  // useEffect(() => {
  //   getTweet(tweet_id);
  // })

  return (
    <SocialContainer>
      <SocialButton
        type="comment" 
        active={comments.active}
        count={comments.count} 
      />
      <SocialButton 
        type="retweet"
        active={retweets.active}
        count={retweets.count} 
      />
      <SocialButton 
        type="favorite"
        active={favorites.active}
        count={favorites.count}
      />
    </SocialContainer>
  );
}

export default SocialButtons;