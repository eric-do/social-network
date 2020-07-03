import React, { useState } from 'react';
import styled from 'styled-components';
import TweetInput from './TweetInput';
import TweetInteractions from './TweetInteractions';

const TweetForm = () => {
  const [ tweetText, updateTweetText ] = useState('');
  
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    console.log('clicked')
    updateTweetText('');
  };

  return (
    <TweetSubmitForm onSubmit={handleSubmit}>
      <TweetInput 
        tweetText={tweetText}
        updateTweetText={updateTweetText}
      />
      <TweetInteractions 
        buttonIsActive={tweetText === '' ? false : true}
      />
    </TweetSubmitForm>
  )
}

const TweetSubmitForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default TweetForm;