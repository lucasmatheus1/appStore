import React, {Component} from 'react';
import WebView from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.product.url}}></WebView>
);

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.name,
});

export default Product;
