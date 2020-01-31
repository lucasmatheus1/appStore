import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import Login from './pages/login';

import lojasNacionais from './pages/lojasNacionais';
import lojasinternacionais from './pages/product';

import Product from './pages/product';

const drawerPages = createDrawerNavigator(
  {
    lojasNacionais: lojasNacionais,
    lojasinternacionais: lojasinternacionais,
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
  // não esquece de colocar as paginas que serão usadas aqui em routes, em sequencia
  {StackLogin, Drawer, Product},
  //tira cabeçalho
  {headerMode: 'none'},
);

export default StackExport;
