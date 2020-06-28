import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import SocialButton from './SocialButton';
import { getSocialColor } from '../utils/icons';

test('Social count is displayed in button', () => {
  const type = "comment";
  const { getByText } = render(<SocialButton type={type} active={false} count={20}/>);
  const countContainer = getByText('20');

  expect(countContainer).toBeInTheDocument();
});

test('Color and background are updated on hover and unhover', () => {
  const type = "comment";
  const { getByTestId } = render(<SocialButton type={type} active={false} count={20}/>);

  const socialButtonContainer = getByTestId(`social-button-container`);
  const socialIconBackground = getByTestId(`social-icon-background`);
  
  expect(socialButtonContainer).toHaveStyle(`color: 'inherit'`);
  expect(socialIconBackground).toHaveStyle(`color: 'inherit'`);

  fireEvent.mouseOver(socialButtonContainer);
  expect(socialButtonContainer).toHaveStyle(`color: ${getSocialColor(type)}`);
  expect(socialIconBackground).toHaveStyle(`background-color: ${getSocialColor(type)}`);

  fireEvent.mouseOut(socialButtonContainer);
  expect(socialButtonContainer).toHaveStyle(`color: 'inherit'`);
  expect(socialIconBackground).toHaveStyle(`color: 'inherit'`);
});
