import React, { useState, useEffect } from 'react';
import TweetCard from './TweetCard/TweetCard';
import styled from 'styled-components';
// import tweets from './dummy';
import { fetchTimeline } from './api';
import { ITweet } from './types/tweets';

const Newsfeed = ({ handle }: { handle: string }) => {
  const [ tweets, setTweets ] = React.useState<ITweet[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const tweets = await fetchTimeline(handle);
        console.log('getting')
        setTweets(tweets);  
      } catch (e) {
        console.log(e)  
      }
    }
    fetchData();
  }, [handle])

  return (
    <FeedContainer>
      <title>Newsfeed</title>
      {
        tweets.map(tweet => <TweetCard key={tweet.tweet_id} tweet={tweet} />)
      }
    </FeedContainer>
  )
};

const FeedContainer = styled.div``;

export default Newsfeed;