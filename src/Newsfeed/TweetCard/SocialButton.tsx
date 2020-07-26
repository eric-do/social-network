import React, { useState } from 'react';
import { getSocialIconClass, Icon } from '../utils/icons';
import * as Styled from './SocialButton.style';

interface ISocialProps {
  type: string;
  active: boolean;
  count: number;
};

const SocialButton = ({ type, active, count }: ISocialProps) => {
  const [isHovered, setHover] = useState(false);

  return (
    <Styled.SocialButtonContainer 
      data-testid="social-button-container"
      active={active} 
      type={type} 
      hover={isHovered} 
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={ () => setHover(false)} >
      <Styled.SocialIconContainer hover={isHovered} type={type}>
        <Styled.OpaqueBackground 
          data-testid="social-icon-background" 
          hover={isHovered} 
          type={type}/>
        <Styled.IconContainer>
          <Icon icon={getSocialIconClass(type)} />
        </Styled.IconContainer>
      </Styled.SocialIconContainer>
      <Styled.SocialCount>{count}</Styled.SocialCount>
    </Styled.SocialButtonContainer>
  )
}

export default SocialButton;