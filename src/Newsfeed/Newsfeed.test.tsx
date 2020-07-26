import React from 'react';
import { render } from '@testing-library/react';
import Newsfeed from './Newsfeed';
import data from './dummy';

test('Renders section title', () => {
  const { getByText } = render(<Newsfeed tweets={data}/>);
  const linkElement = getByText(/Newsfeed/i);
  expect(linkElement).toBeInTheDocument();
});

xtest('Renders multiple cards', async () => {

});