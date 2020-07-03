import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateTweet from './CreateTweet';
import { user } from '../dummy';

describe('CreateTweet component successfully renders elements', () => {
  
  it('should render CreateTweet component', () => {
    const { getByTestId } = render(<CreateTweet user={user}/>);
  
    const createTweetComponent = getByTestId('create-tweet');
   
    expect(createTweetComponent).toBeTruthy();
  })

  it('should render avatar elements', () => {
    const { getByTestId, getByAltText } = render(<CreateTweet user={user}/>);

    const userAvatar = getByTestId('user-avatar');
    const altText = getByAltText(`${user.handle}'s profile picture`);

    expect(userAvatar).toBeTruthy();
    expect(altText).toBeTruthy();
  })

  it('should render tweet input', () => {
    const { getByPlaceholderText } = render(<CreateTweet user={user}/>);
  
    const inputField = getByPlaceholderText(`What's happening?`);

    expect(inputField).toBeTruthy();
  })
  
  it('should render tweet interactions', () => {
    const { getByTestId } = render(<CreateTweet user={user}/>);
  
    const tweetInteractions = getByTestId(`tweet-interactions`);

    expect(tweetInteractions).toBeTruthy();
  })

  it('should render Tweet button', () => {
    const { getByText } = render(<CreateTweet user={user}/>);
  
    const tweetButton = getByText(`Tweet`);

    expect(tweetButton).toBeTruthy();
  })

})

describe('CreateTweet component interactions', () => {
  it('should activate Tweet button if text is inputted', () => {
    const { getByText, getByPlaceholderText } = render(<CreateTweet user={user}/>);

    const tweetButton = getByText(`Tweet`);
    const inputField = getByPlaceholderText(`What's happening?`);
    const input = `test`;

    expect(tweetButton).toHaveStyle('opacity: 0.5');

    fireEvent.change(inputField, {target: {value: input}});
    
    expect(tweetButton).toHaveStyle('opacity: 1');
  })

})