import React from 'react';
import { render } from '@testing-library/react';
import Newsfeed from './Newsfeed';
import data from './dummy';

test('Renders section title', () => {
  const { getByText } = render(<Newsfeed />);
  const linkElement = getByText(/Newsfeed/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders multiple cards', () => {
  const { getByText } = render(<Newsfeed />);
  const firstCard = getByText(/Eric/i);
  const secondCard = getByText(/Tina/i);
  expect(firstCard).toBeInTheDocument();
  expect(secondCard).toBeInTheDocument();
});