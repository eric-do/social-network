import styled from 'styled-components';
import { getSocialColor } from '../utils/icons';

export const SocialButtonContainer = styled.div<{hover: boolean; active: boolean; type: string}>`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.active || props.hover ? getSocialColor(props.type) : 'inherit'};
`;

export const SocialIconContainer = styled.div<{hover: boolean; type: string}>`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

export const OpaqueBackground = styled.div<{hover: boolean; type: string}>`
  background-color: ${props => props.hover ? getSocialColor(props.type) : 'inherit'};
  opacity: ${props => props.hover ? 0.1 : 1};
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const IconContainer = styled.div`
  opacity: 1;
  position: absolute;
`;

export const SocialCount = styled.span`
  width: 40px;
  margin-left: 1px;
  text-align: left;
`;