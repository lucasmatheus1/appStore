import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View>
        <Text>Opa</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Main');
          }}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
