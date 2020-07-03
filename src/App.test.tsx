import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn Title', () => {
  const { getByText } = render(<App />);
  const title = getByText(/Tweeter/i);
  expect(title).toBeInTheDocument();
});

it('should render CreateTweet component', () => {
  const { getByTestId } = render(<App />);

  const createTweetComponent = getByTestId('create-tweet');
  expect(createTweetComponent).toBeTruthy();
})