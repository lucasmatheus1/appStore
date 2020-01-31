import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import api from '../services/api';

export default class Main extends Component {
  state = {
    docs: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    const docs = response.data;

    this.setState({docs});
  };

  renderItem = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.nomeProduto}>{item.name}</Text>

      <TouchableOpacity
        style={styles.botaoProduto}
        onPress={() => {
          this.props.navigation.navigate('Product');
        }}>
        <Text style={styles.botaoProdutoText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.docs}
          // uma chave
          key={item => item._id}
          renderItem={this.renderItem}></FlatList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  list: {
    padding: 20,
  },
  titulo: {
    marginTop: 10,
    fontSize: 25,
    marginBottom: 20,
  },
  nomeProduto: {
    fontFamily: 'monospace',
    padding: 10,
    fontSize: 20,
  },
  botaoProduto: {
    height: 40,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#4c8aed',
    marginBottom: 10,
  },
  botaoProdutoText: {
    color: '#4c8aed',
  },
});



