import React, { useState } from 'react';
import styled from 'styled-components';

interface IInteractions {
  buttonIsActive: boolean
}

const TweetInteractions = ({ buttonIsActive }: IInteractions) => {

  return (
    <InteractionsContainer
      data-testid="tweet-interactions"
    >
      <TweetButton 
        type="submit"
        value="Tweet"
        active={buttonIsActive}
        disabled={!buttonIsActive}
      />
    </InteractionsContainer>
  )
}

const InteractionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TweetButton = styled.input<{ active: boolean }>`
  height: 40px;
  background-color: #1DA1F2;
  border-radius: 70px;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 900;
  color: #FFFFFF;
  padding: 0 20px;
  margin-left: 10px;
  opacity: ${props => props.active ? 1 : 0.5}
`

export default TweetInteractions;