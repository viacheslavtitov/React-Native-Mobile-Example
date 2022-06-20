import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from './TabNavigator';
import LocationScreen from '../screens/menu/location/LocationScreen';
import SettingsScreen from '../screens/menu/settings/SettingsScreen';

const Drawer = createDrawerNavigator();

const MenuDrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Location" component={LocationScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default MenuDrawerNavigator;
