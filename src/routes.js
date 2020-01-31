
import {createStackNavigator} from 'react-navigation';


import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator(
  {
    Main, Product
  },
  {
    navigationOptions: navigator => ({
      headerStyle: {
        backgroundColor: '#4c8aed',
      },
      headerTintColor: '#FFF',
      
    }),
  },
);