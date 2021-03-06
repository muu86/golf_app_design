import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../tabBar/HomeScreen';
import DetailsScreen from './DetailsScreen';

const HomeStack = createStackNavigator();

const HomeStackNav = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#06254f',
          borderBottomRightRadius: 30,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
        headerTintColor: '#fff',
        animationEnabled: false,
      }}
    >
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackNav;