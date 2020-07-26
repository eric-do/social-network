import styled from 'styled-components';

export const CardContainer = styled.div<{hover: boolean}>`
  color: red;
  border: 1px solid rgb(56, 68, 77);
  display: flex;
  margin: 0 5px;
  padding: 5px 15px;
  background: ${props => props.hover ? 'rgb(255,255,255,0.02)' : 'inherit'}
`;

export const AvatarContainer = styled.div`
  max-width: 100px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10px;
`;

export const Avatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const TextContainer = styled.div`
  display: flex;
  justify-content: flex-start;  
  text-align: left;
`;

export const HandleContainer = styled(TextContainer)`
`;

export const TweetInfo = styled.span`
  font-size: 15px;
  margin-right: 5px;
`;

export const Alias = styled(TweetInfo)`
  font-weight: 700;
  color: #FFFFFF;
`;

export const Handle = styled(TweetInfo)`
  color: #8899A6;
`;

export const DateDivider = styled(TweetInfo)`
  color: #8899A6;
`;

export const CreatedDate = styled(TweetInfo)`
  color: #8899A6;
`;

export const TweetTextContainer = styled(TextContainer)``;

export const TweetText = styled.span`
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 400;
  line-height: 120%;
  white-space: pre-wrap;
`;
