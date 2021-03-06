import React, { useState } from 'react';
import styled from 'styled-components';
import { cardStyle } from '../styles';
import UserAvatar from './UserAvatar';
import TweetForm from './TweetForm'

interface ICreateTweetProps {
  user: {
    avatar: string;
    handle: string;
    alias: string;
  };
  getTimeline: () => void
}

const CreateTweet = ({ user, getTimeline }: ICreateTweetProps) => {
  const [ isHovered, setHover ] = useState<boolean>(false);

  return (
    <CreateTweetContainer 
      data-testid="create-tweet"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      hover={isHovered}
    >
      <UserAvatar user={user} />
      <ContentContainer>
        <TweetForm user={user} getTimeline={getTimeline} />
      </ContentContainer>
    </CreateTweetContainer>
  )
}

const CreateTweetContainer = styled.div<{hover: boolean}>`
  ${cardStyle}
  // background: ${props => props.hover ? 'rgb(255,255,255,0.02)' : 'inherit'}
`;

const ContentContainer = styled.div`
  width: 100%;
  padding-left: 10px;
`;

export default CreateTweet;