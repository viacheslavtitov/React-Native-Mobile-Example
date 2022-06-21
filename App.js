import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MenuDrawerNavigator from './src/navigation/MenuDrawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MenuDrawerNavigator />
    </NavigationContainer>
  );
}
