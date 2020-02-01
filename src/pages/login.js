import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>
        <TextInput style={styles.textPlaceHolder} placeholder="E-mail" />
        <Text style={styles.text}>Senha</Text>
        <TextInput
          secureTextEntry={true}
          style={styles.textPlaceHolder}
          placeholder="Senha"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('lojasNacionais');
          }}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4c8aed',
  },
  text: {
    fontSize: 22,
    color: 'white',
    fontFamily: 'monospace',
    marginTop: 10,
  },
  textPlaceHolder: {
    fontFamily: 'monospace',
    marginTop: 15,
    fontSize: 17,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    width: 250,
    textAlignVertical: 'center',
  },
  button: {
    marginTop: 20,
    width: 100,
    height: 42,
    borderColor: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: 'monospace',
    fontSize: 18,
  },
});

export default Login;
