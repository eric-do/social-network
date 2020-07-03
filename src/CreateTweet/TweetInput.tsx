import React, { useState } from 'react';
import styled from 'styled-components';

interface IInputProps {
  updateTweetText: (input: string) => void;
  tweetText: string;
}

const TweetInput = ({ updateTweetText, tweetText }: IInputProps) => {
  const [ isFocused, setFocus ] = useState(false);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    updateTweetText(value);
  }

  return (
    <InputField
      placeholder="What's happening?"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      value={tweetText}
      focus={isFocused}
      onChange={handleInput}
    />
  )
}

const InputField = styled.input<{ focus: boolean }>`
  background-color: inherit;
  color: rgb(255, 255, 255, 1);
  outline: none;
  border: 0;
  font-size: 19px;

  ::placeholder {
    color: ${props => props.focus ? 'rgb(255, 255, 255, 0.8)' : 'rgb(255, 255, 255, 0.5)' }
  }
`;

export default TweetInput;