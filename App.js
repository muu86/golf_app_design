import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import TabNav from './tabBar/TabNav';

const App = () => {
  return (
    <>
      <StatusBar 
        backgroundColor='#06254f'
        style="light"
      />
      <NavigationContainer>
        <TabNav />
      </NavigationContainer>
    </>
  );
};

export default App;
