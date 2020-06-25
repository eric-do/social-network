import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ISocialProps {
  type: string;
  social_count: number;
};

interface ISocialMap {
  [key: string]: IconDefinition
}

const SocialButtonContain = styled.div`
  width: 150px;
`;

const socialIconMap: ISocialMap = {
  comment: faComment,
  favorite: faHeart,
  retweet: faRetweet
};

const SocialButton = ({ type, social_count }: ISocialProps) => {
  return (
    <SocialButtonContain>
      <FontAwesomeIcon icon={socialIconMap[type]} />
      {social_count}
    </SocialButtonContain>
  )
}

export default SocialButton;