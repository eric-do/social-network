import React from 'react';
import styled from 'styled-components';

interface ISocialProps {
  type: string;
  social_count: number;
};

const SocialButtonContain = styled.div`
  width: 150px;
`;

const SocialButton = ({ type, social_count }: ISocialProps) => {
  return (
    <SocialButtonContain>{ social_count }</SocialButtonContain>
  )
}

export default SocialButton;