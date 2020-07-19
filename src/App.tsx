import React from 'react';
import styled from 'styled-components';
import './App.css';
import Newsfeed from './Newsfeed/Newsfeed';
import CreateTweet from './CreateTweet/CreateTweet';
import { user } from './dummy';

interface AppProps {
  dark: boolean
}

function App() {
  return (
    <AppContainer dark className="App">
      <div>Tweeter</div>
      <CenterColumn>
        <CreateTweet user={user}/>
        <Newsfeed handle={user.handle}/>
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
