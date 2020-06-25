import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import { fetchTweet } from '../api';
import SocialButton from './SocialButton';

interface SocialProps {
  tweet_id: number;
  reply_count: number;
  retweet_count: number;
  favorite_count: number;
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
  
  const { tweet_id, reply_count, 
          retweet_count, favorite_count} = props;

  const [ socialCounts, setSocial ] = useState({
    reply_count, 
    retweet_count, 
    favorite_count
  });

  const getTweet = async (tweet_id: number) => {
    try {
      const { reply_count, 
              retweet_count, 
              favorite_count } = await fetchTweet(tweet_id);
              
      setSocial({ reply_count, retweet_count, favorite_count });
    } catch (e) {
      console.log(e);
    }
  }

  // useEffect(() => {
  //   getTweet(tweet_id);
  // })

  return (
    <SocialContainer>
      <SocialButton
        type="reply" 
        social_count={socialCounts.reply_count} 
      />
      <SocialButton 
        type="retweet"
        social_count={socialCounts.retweet_count} 
      />
      <SocialButton 
        type="favorite"
        social_count={socialCounts.favorite_count}
      />
    </SocialContainer>
  );
}

export default SocialButtons;