import React from 'react';
import styled from 'styled-components';

interface ISocialProps {
  type: string;
  social_count: number;
};

const SocialButton = ({ type, social_count }: ISocialProps) => {
  return (
    <div>{ social_count }</div>
  )
}

export default SocialButton;