import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TweetInteractions from './TweetInteractions';

it('should render tweet interactions', () => {
  const { getByTestId } = render(<TweetInteractions buttonIsActive={true} />);

  const tweetInteractions = getByTestId(`tweet-interactions`);


  expect(tweetInteractions).toBeTruthy();
})

it('Tweet button should have active appearance if toggled active', () => {
  const { getByText } = render(<TweetInteractions buttonIsActive={true} />);

  const tweetButton = getByText('Tweet');

  expect(tweetButton).toHaveStyle('opacity: 1');
})

it('Tweet button should have disabled appearance if toggled inactive', () => {
  const { getByText } = render(<TweetInteractions buttonIsActive={false} />);

  const tweetButton = getByText('Tweet');

  expect(tweetButton).toHaveStyle('opacity: 0.5');
})