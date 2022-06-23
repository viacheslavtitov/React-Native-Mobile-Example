import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {mainBackgroundColor} from '../../resources/styles/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const getIconName = navigation => {
  return navigation.canGoBack() ? 'chevron-back' : 'menu';
};

const MenuDrawerHeaderComponent = ({title, navigationDrawer}) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={getIconName(navigationDrawer)}
        size={32}
        color={'white'}
        onPress={() => {
          navigationDrawer.canGoBack()
            ? navigationDrawer.goBack()
            : navigationDrawer.toggleDrawer();
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default MenuDrawerHeaderComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    height: 64,
    padding: 10,
    backgroundColor: mainBackgroundColor,
  },
  title: {
    flex: 4,
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
});
