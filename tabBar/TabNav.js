import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackNav from '../stackBar/HomeStackNav';
import SettingsStackNav from '../stackBar/SettingsStackNav';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            return (
              <Ionicons name={iconName} size={size} color={color} />
            )
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNav}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Settings" component={SettingsStackNav} />
      </Tab.Navigator>
  )
}

export default TabNav;


