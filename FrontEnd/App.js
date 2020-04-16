import React from 'react';
import {
  StatusBar,
} from 'react-native';

import Routes from './src/routes';

import { Header } from 'react-native-elements';

const App = () => {
  return (
    <>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'ChatBot', style: { color: '#fff', fontSize: 20 } }}
      />
      <StatusBar hidden />
      <Routes />
    </>
  );
};

export default App;
