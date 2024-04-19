import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const estilos = {
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#FFA630',
    },
    texto: {
      fontSize: 20,
      marginBottom: 20,
    },
    image: {
      width: 500,
      height: 300,
      marginBottom: 20,
    },
    formContainer: {
      width: '80%',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: 'white',
    },
    buttonContainer: {
      width: '80%',
    },
    button: {
      backgroundColor: 'blue',
      paddingVertical: 15,
      marginBottom: 20,
      borderRadius: 25,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    centered: {
      alignItems: 'center',
    },
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}></Text>
      <Image source={require('./assets/MEUS_GASTOS.png')} style={estilos.image} />
      <View style={estilos.formContainer}>
        <TextInput
          style={estilos.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={estilos.input}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity style={[estilos.button, estilos.centered]}>
          <Text style={estilos.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[estilos.button, estilos.centered]}>
          <Text style={estilos.buttonText}>Esqueci a senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
