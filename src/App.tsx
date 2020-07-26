import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Newsfeed from './Newsfeed/Newsfeed';
import CreateTweet from './CreateTweet/CreateTweet';
import { ITweet } from './_types';
import { fetchTimeline } from './_api';
import { user } from './dummy';

interface AppProps {
  dark: boolean
}

function App() {
  const [tweets, setTweets] = useState<ITweet[]>([])

  const getTimeline = () => {
    fetchTimeline('eric')
      .then(setTweets)
      .catch(console.log);
  };

  useEffect(() => {
    getTimeline();
  }, [])

  return (
    <AppContainer dark className="App">
      <div>Tweeter</div>
      <CenterColumn>
        <CreateTweet user={user}/>
        <Newsfeed tweets={tweets}/>
      </CenterColumn>
    </AppContainer>
  );
}

const AppContainer = styled.div<AppProps>`
  background-color: ${props => props.dark ? 'rgb(22, 32, 43)' : 'white'} 
`;

const CenterColumn = styled.div`
  max-width: 600px;
`;
export default App;
