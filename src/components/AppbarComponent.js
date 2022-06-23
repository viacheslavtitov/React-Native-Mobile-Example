import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {
  mainBackgroundColor,
  secondaryBackgroundColor,
} from '../../resources/styles/Constants';

const AppbarComponent = ({screen, navigator}) => (
  <Appbar.Header>
    <Appbar.Content title="Hello title" />
  </Appbar.Header>
);

export default AppbarComponent;

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: mainBackgroundColor,
  },
});
