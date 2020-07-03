import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateTweet from './CreateTweet';

it('should render CreateTweet component', () => {
  const { getByTestId } = render(<CreateTweet />);

  const createTweetComponent = getByTestId('create-tweet');
  expect(createTweetComponent).toBeTruthy();
})

it('should render text input field', () => {
  const { getByPlaceholderText } = render(<CreateTweet />);

  const inputField = getByPlaceholderText(`What's happening?`);
  expect(inputField).toBeTruthy();
})