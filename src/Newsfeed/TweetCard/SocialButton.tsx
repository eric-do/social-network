import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getSocialIconClass, getSocialColor } from '../utils/icons';

interface ISocialProps {
  type: string;
  active: boolean;
  count: number;
};

const SocialButton = ({ type, active, count }: ISocialProps) => {
  return (
    <SocialButtonContain active={active} type={type}>
      <FontAwesomeIcon icon={getSocialIconClass(type)} />
      <SocialCount >{count}</SocialCount>
    </SocialButtonContain>
  )
}

const SocialButtonContain = styled.div<{active: boolean; type: string}>`
  width: 33%;
  color: ${props => props.active ? getSocialColor(props.type) : 'inherit'};

  &:hover {
    color: ${props => getSocialColor(props.type)};
  }
`;

const SocialCount = styled.span`
  margin: 0 5px;
`;

export default SocialButton;