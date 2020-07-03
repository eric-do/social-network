import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import TweetInput from './TweetInput';
import TweetInteractions from './TweetInteractions';
import { cardStyle } from '../styles';

interface ICreateTweetProps {
  user: {
    avatar: string
  }
}

const CreateTweet = ({ user }: ICreateTweetProps) => {
  const [ isHovered, setHover ] = useState<boolean>(false);
  const [ tweetText, updateTweetText ] = useState('');

  return (
    <CreateTweetContainer 
      data-testid="create-tweet"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={isHovered}
    >
      <AvatarContainer> 
        <Avatar src={user.avatar}/>
      </AvatarContainer>
      <ContentContainer>
        <TweetInput 
          tweetText={tweetText}
          updateTweetText={updateTweetText}
        />
        <TweetInteractions />
      </ContentContainer>
    </CreateTweetContainer>
  )
}

const CreateTweetContainer = styled.div<{hover: boolean}>`
  ${cardStyle}
  // background: ${props => props.hover ? 'rgb(255,255,255,0.02)' : 'inherit'}
`;

const AvatarContainer = styled.div`
  max-width: 100px;
`;

const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 5px;
`;

export default CreateTweet;