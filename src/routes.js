import React, {Component} from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {TouchableOpacity, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Main from './pages/main';
import Product from './pages/product';

import Login from './pages/login';

const drawerPages = createDrawerNavigator(
  {
    Main: Main,
    Product: Product,
  },
  {
    navigationOptions: {},
  },
);

const Drawer = createStackNavigator(
  {
    drawerPages,
  },
  {
    navigationOptions: navigator => ({
      headerStyle: {
        backgroundColor: '#4c8aed',
      },

      headerTintColor: '#FFF',
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigator.navigation.toggleDrawer();
          }}>
          <Icon name="menu" size={40} color="#000" style={{padding: 5}} />
        </TouchableOpacity>
      ),
    }),
  },
);

const StackLogin = createStackNavigator(
  {Login},
  {
    //tira cabeçalho
    headerMode: 'none',
  },
);

const StackExport = createStackNavigator(
  {StackLogin, Drawer},
  //tira cabeçalho
  {headerMode: 'none'},
);

export default StackExport;
