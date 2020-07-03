import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TweetInteractions from './TweetInteractions';

it('should render tweet interactions', () => {
  const { getByTestId } = render(<TweetInteractions />);

  const tweetInteractions = getByTestId(`tweet-interactions`);
  expect(tweetInteractions).toBeTruthy();
})