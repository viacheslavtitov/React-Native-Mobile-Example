import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/home/HomeScreen';
import ChatScreen from '../screens/chat/ChatScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeStack"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatStack"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="ChatStack" component={ChatScreen} />
    </Stack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileStack"
      screenOptions={screenOptionStyle}>
      <Stack.Screen name="ProfileStack" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export {HomeStackNavigator, ChatStackNavigator, ProfileStackNavigator};
