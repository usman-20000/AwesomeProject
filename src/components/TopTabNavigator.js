// TopTabNavigator.js
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ScreenA" component={ScreenA} />
      <Tab.Screen name="ScreenB" component={ScreenB} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
