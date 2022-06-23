import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {mainTextSize} from '../../resources/styles/Constants';

const MenuDrawerComponent = props => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={require('../../resources/images/ic_flag_ukraine.png')}
        style={{width: '100%', height: '20%'}}
      />
      <View style={{borderBottomWidth: 1, borderTopColor: 'gray'}}>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(
              'mailto:viacheslavtitov90@gmail.com?subject=Thank%20you',
            );
          }}>
          <View style={styles.rowContainer}>
            <Ionicons name="mail-outline" size={22} />
            <Text style={styles.textInRow}>viacheslavtitov90@gmail.com</Text>
          </View>
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: 'white'}}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{borderTopWidth: 1, borderTopColor: 'gray'}}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.rowContainer}>
            <Ionicons name="log-out-outline" size={22} />
            <Text style={styles.textInRow}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuDrawerComponent;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 20,
  },
  textInRow: {
    fontSize: mainTextSize,
    marginLeft: 5,
  },
});
