import React from 'react';
import { render } from '@testing-library/react';
import TweetCard from './TweetCard';
import data from '../dummy';
import moment from '../utils/moment';

test('Renders test user', () => {
  const { getByText } = render(<TweetCard key={data[0].tweet_id} tweet={data[0]}/>);
  const handle = getByText(/eric/i);
  const favoriteCount = getByText(/564/i);
  
  expect(handle).toBeInTheDocument();
  expect(favoriteCount).toBeInTheDocument();
});

test('Displays post date in shortened relative time when post less than or equal to 4 weeks old', () => {
  const tweet = {
    tweet_id: 1,
    handle: 'eric',
    alias: 'Cool guy',
    created_at: moment().subtract(5, 'days').format('YYYY-MM-DD'),
    avatar: 'https://loremflickr.com/320/320/dog',
    full_text: 'it\'s my birthday',
    social: {
      comments: {
        active: true,
        count: 6
      },
      retweets: {
        active: false,
        count: 4
      },
      favorites: {
        active: true,
        count: 2
      }
    }
  }
  const { getByText } = render(<TweetCard key={tweet.tweet_id} tweet={tweet}/>);
  const postDate = tweet.created_at;
  const relativeTime = moment(postDate).fromNow(true);
  const displayTime = getByText(relativeTime);
 
  expect(displayTime).toBeInTheDocument();
});

test('Displays post date in full date when Tweet is older than 4 weeks', () => {
  const { getByText } = render(<TweetCard key={data[1].tweet_id} tweet={data[1]}/>);
  const displayTime = getByText('June 17, 2018');
 
  expect(displayTime).toBeInTheDocument();
});