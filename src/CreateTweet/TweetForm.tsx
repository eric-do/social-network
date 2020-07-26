import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import TweetInput from './TweetInput';
import TweetInteractions from './TweetInteractions';

const message = {
  handle: 'eric',
  alias: 'cool guy',
  tweet_date: moment().format('YYYY-DD-MM'),
  avatar: 'https://i.imgur.com/QHXuy5L.gif',
  full_text: ''
}

interface ITweetForm {
  getTimeline: () => void
}

const TweetForm = ({ getTimeline }: ITweetForm) => {
  const [ tweetText, updateTweetText ] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();

    message.full_text =  tweetText;
    
    axios.post('/tweets', message)
      .then(() => {
        getTimeline();
        updateTweetText('');
      }, e => (
        console.log(e)
      ));
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