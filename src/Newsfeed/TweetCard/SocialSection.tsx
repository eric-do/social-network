import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SocialButton from './SocialButton';
import { ISocialInfo } from '../types/social';
import { fetchTweetSocial } from '../api';

interface SocialProps {
  handle: string;
  tweet_id: number;
}

const defaultSocial = {
  comments: {
    active: false,
    count: 0
  },
  retweets: {
    active: false,
    count: 0
  },
  favorites: {
    active: false,
    count: 0
  }
}

const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  color: #8899A6;
  font-size: 13px;
  height: 35px;
`;

const SocialSection = ({ tweet_id, handle }: SocialProps) => {

  const [social, setSocial] = useState<ISocialInfo>(defaultSocial)
  const { comments, retweets, favorites } = social;

  useEffect(() => {
    async function fetchSocial() {
      try {
        const social = await fetchTweetSocial(tweet_id, handle);
        setSocial(social);
      } catch (e) {
        setSocial(defaultSocial);
      }
    }

    fetchSocial();
  }, [tweet_id, handle]);

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

export default SocialSection;