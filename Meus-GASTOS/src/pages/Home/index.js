import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Home({ navigation }){

    const [busca, setBusca] = useState('');
    function acessarCadastro(){
        navigation.navigate(
            'Cadastro',
            { pesquisa: busca }
        );

    }
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
    