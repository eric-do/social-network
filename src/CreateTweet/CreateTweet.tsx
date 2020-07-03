import React, { useState } from 'react';
import styled from 'styled-components';
import TweetInput from './TweetInput';

const CreateTweet = () => {
  const [ isHovered, setHover ] = useState<boolean>(false);

  return (
    <CreateTweetContainer 
      data-testid="create-tweet"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={isHovered}
    >
      <AvatarContainer> 
      </AvatarContainer>
      <ContentContainer>
        <TweetInput />
      </ContentContainer>
    </CreateTweetContainer>
  )
}

const CreateTweetContainer = styled.div<{hover: boolean}>`
  color: red;
  border: 1px solid rgb(56, 68, 77);
  display: flex;
  margin: 0 5px;
  padding: 5px 15px;
  // background: ${props => props.hover ? 'rgb(255,255,255,0.02)' : 'inherit'}
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

export default CreateTweet;