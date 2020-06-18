import React from 'react';
import styled from 'styled-components';
import './App.css';
import Newsfeed from './Newsfeed/Newsfeed';

interface AppProps {
  dark: boolean
}

const AppContainer = styled.div<AppProps>`
  background-color: ${props => props.dark ? 'rgb(22, 32, 43)' : 'white'} 
`;

function App() {
  return (
    <AppContainer dark className="App">
      <div>Tweeter</div>
      <Newsfeed />
    </AppContainer>
  );
}

export default App;
