import React, {Component} from 'react';
import {Text} from 'react-native';
import WebView from 'react-native-webview';

const Product = () => (
  <WebView source={{uri: 'https://www.mercadolivre.com.br/'}}></WebView>
);

export default Product;