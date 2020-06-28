import React, { useState } from 'react';
import styled from 'styled-components';
import { getSocialIconClass, getSocialColor, Icon } from '../utils/icons';

interface ISocialProps {
  type: string;
  active: boolean;
  count: number;
};

const SocialButton = ({ type, active, count }: ISocialProps) => {
  const [isHovered, setHover] = useState(false);

  return (
    <SocialButtonContainer 
      data-testid="social-button-container"
      active={active} 
      type={type} 
      hover={isHovered} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={ () => setHover(false)} >
      <SocialIconContainer hover={isHovered} type={type}>
        <OpaqueBackground 
          data-testid="social-icon-background" 
          hover={isHovered} 
          type={type}/>
        <IconContainer>
          <Icon icon={getSocialIconClass(type)} />
        </IconContainer>
      </SocialIconContainer>
      <SocialCount>{count}</SocialCount>
    </SocialButtonContainer>
  )
}

const SocialButtonContainer = styled.div<{hover: boolean; active: boolean; type: string}>`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.active || props.hover ? getSocialColor(props.type) : 'inherit'};
`;

const SocialIconContainer = styled.div<{hover: boolean; type: string}>`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

const OpaqueBackground = styled.div<{hover: boolean; type: string}>`
  background-color: ${props => props.hover ? getSocialColor(props.type) : 'inherit'};
  opacity: ${props => props.hover ? 0.1 : 1};
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

const IconContainer = styled.div`
  opacity: 1;
  position: absolute;
`;

const SocialCount = styled.span`
  width: 40px;
  margin-left: 1px;
  text-align: left;
`;

export default SocialButton;