// LoginScreen.js

import React, { useState } from 'react';
import { View } from 'react-native';
import TextoInput from '../../components/TextInput';
import BotaoClicavel from '../../components/Button';
import { useNavigation } from '@react-navigation/native'; 
import LoginEstilo from './style';

const LoginScreen = () => {
  const navigation = useNavigation(); 

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const handleLogin = () => {
    if (validateEmail(email)) {
      console.log("Email:", email);
      console.log("Senha:", senha);
      navigation.navigate('Home');
    } else {
      console.log("Email inválido");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@(gmail|hotmail)\.com\b/;
    return emailRegex.test(email);
  };

  return (
    <View style={LoginEstilo.container}>
      <TextoInput 
        placeholder="Seu email" 
        onChangeText={handleEmailChange} 
        value={email} 
        style={LoginEstilo.input}
      />
      <TextoInput 
        placeholder="Senha" 
        onChangeText={handleSenhaChange} 
        value={senha} 
        secureTextEntry={true} 
        style={LoginEstilo.input}
      />
      <BotaoClicavel
        onPress={handleLogin}
        TextoBotao="Acessar"
        style={LoginEstilo.button}
        textStyle={LoginEstilo.buttonText}
      />
      <BotaoClicavel
        onPress={handleCadastroPress}
        TextoBotao="Não tem uma conta?"
        style={LoginEstilo.button}
        textStyle={LoginEstilo.buttonText}
      />
    </View>
  );
};

export default LoginScreen;
