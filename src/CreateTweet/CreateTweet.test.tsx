import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateTweet from './CreateTweet';
import { user } from '../dummy';

it('should render CreateTweet component', () => {
  const { getByTestId } = render(<CreateTweet user={user}/>);

  const createTweetComponent = getByTestId('create-tweet');
  expect(createTweetComponent).toBeTruthy();
})

it('should render text input field', () => {
  const { getByPlaceholderText } = render(<CreateTweet user={user}/>);

  const inputField = getByPlaceholderText(`What's happening?`);
  expect(inputField).toBeTruthy();
})

it('should render tweet interactions', () => {
  const { getByTestId } = render(<CreateTweet user={user}/>);

  const tweetInteractions = getByTestId(`tweet-interactions`);
  expect(tweetInteractions).toBeTruthy();
})