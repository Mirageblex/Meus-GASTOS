// CadastroScreen.js

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CadastroEstilo from './style';
import TextoInput from '../../components/TextInput';
import BotaoClicavel from '../../components/Button';

const CadastroScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirmacao, setSenhaConfirmacao] = useState('');
  const [coincidem, setCoincidem] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
    validateFields(text, senhaConfirmacao);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
    validateFields(email, text);
  };

  const handleSenhaConfirmacaoChange = (text) => {
    setSenhaConfirmacao(text);
    validateFields(email, text);
  };

  const handleCadastro = () => {
    if (coincidem && validateEmail(email)) {
      navigation.navigate('Home');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    } else {
      console.log("As senhas não coincidem ou o email é inválido");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@(gmail|hotmail)\.[A-Z|a-z]{2,}\b/;
    return emailRegex.test(email);
  };

  const validateFields = (email, password) => {
    const passwordsMatch = senha === senhaConfirmacao;
    const validEmail = validateEmail(email);

    if (passwordsMatch && validEmail) {
      setCoincidem(true);
    } else {
      setCoincidem(false);
    }
  };

  return (
    <View style={CadastroEstilo.container}>
      <Text style={CadastroEstilo.title}>Meus GASTOS</Text>
      <Text style={CadastroEstilo.subtitle}>Bem-vindo de volta!</Text>
      <TextoInput
        placeholder="E-mail"
        onChangeText={handleEmailChange}
        value={email}
        style={CadastroEstilo.input}
      />
      <TextoInput
        placeholder="Senha"
        onChangeText={handleSenhaChange}
        value={senha}
        secureTextEntry={true}
        style={CadastroEstilo.input}
      />
      <TextoInput
        placeholder="Confirmar senha"
        onChangeText={handleSenhaConfirmacaoChange}
        value={senhaConfirmacao}
        secureTextEntry={true}
        style={CadastroEstilo.input}
      />
      {coincidem && (
        <BotaoClicavel
          onPress={handleCadastro}
          TextoBotao="Cadastrar"
          style={CadastroEstilo.button}
          textStyle={CadastroEstilo.buttonText}
        />
      )}
    </View>
  );
};

export default CadastroScreen;
