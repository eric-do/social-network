import React from 'react';
import { render } from '@testing-library/react';
import TweetCard from './TweetCard';
import data from '../dummy';

test('Renders test user', () => {
  const { getByText } = render(<TweetCard key={data[0].tweet_id} tweet={data[0]}/>);
  const handle = getByText(/eric/i);
  const favoriteCount = getByText(/564/i);
  
  expect(handle).toBeInTheDocument();
  expect(favoriteCount).toBeInTheDocument();
});