import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialIconClass } from '../lib/social';

interface ISocialProps {
  type: string;
  social_count: number;
};

const SocialButton = ({ type, social_count }: ISocialProps) => {
  return (
    <SocialButtonContain>
      <FontAwesomeIcon icon={getSocialIconClass(type)} />
      <SocialCount>{social_count}</SocialCount>
    </SocialButtonContain>
  )
}

const SocialButtonContain = styled.div`
  width: 33%;
`;

const SocialCount = styled.span`
  margin: 0 5px;
`;

export default SocialButton;