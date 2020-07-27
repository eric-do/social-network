import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import axios from 'axios';
import TweetInput from './TweetInput';
import TweetInteractions from './TweetInteractions';

interface ITweetForm {
  user: {
    handle: string;
    alias: string;
    avatar: string,
  };
  getTimeline: () => void
}

const TweetForm = ({ user, getTimeline }: ITweetForm) => {
  const [ tweetText, updateTweetText ] = useState('');
  
  const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const full_text = tweetText;
    const tweet_date = moment().format('YYYY-MM-DD');

    const message = {...user, full_text, tweet_date};

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