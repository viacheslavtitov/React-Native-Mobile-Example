import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuDrawerComponent from '../components/MenuDrawerComponent';
import BottomTabNavigator from './TabNavigator';
import LocationScreen from '../screens/menu/location/LocationScreen';
import SettingsScreen from '../screens/menu/settings/SettingsScreen';
import {
  mainTextSize,
  mainBackgroundColor,
  secondaryBackgroundColor,
} from '../../resources/styles/Constants';

const Drawer = createDrawerNavigator();

const MenuDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerActiveTintColor: mainBackgroundColor,
        drawerActiveBackgroundColor: secondaryBackgroundColor,
        drawerInactiveTintColor: mainBackgroundColor,
        drawerInactiveBackgroundColor: 'white',
        headerShown: false,
        drawerLabelStyle: {
          fontSize: mainTextSize,
        },
      }}
      drawerContent={props => <MenuDrawerComponent {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={{
          drawerIcon: ({focused, color, size}) => {
            if (focused)
              return <Ionicons name="home" size={size} color={color} />;
            else
              return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Location"
        component={LocationScreen}
        options={{
          drawerIcon: ({focused, color, size}) => {
            if (focused)
              return <Ionicons name="location" size={size} color={color} />;
            else
              return (
                <Ionicons name="location-outline" size={size} color={color} />
              );
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({focused, color, size}) => {
            if (focused)
              return <Ionicons name="settings" size={size} color={color} />;
            else
              return (
                <Ionicons name="settings-outline" size={size} color={color} />
              );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default MenuDrawerNavigator;
