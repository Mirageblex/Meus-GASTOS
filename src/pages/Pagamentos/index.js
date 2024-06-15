import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import PagamentosEstilo from './style';

const PagamentosScreen = () => {
  const navigation = useNavigation(); 

  const VoltaHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={PagamentosEstilo.container}>
      <TouchableOpacity style={PagamentosEstilo.backButton} onPress={VoltaHome}>
        <Text style={PagamentosEstilo.backText}>{'<'}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={PagamentosEstilo.perfil} onPress={VoltaHome}>
        <Text style={PagamentosEstilo.PerfilText}>{'Acessar Pefil'}</Text>
      </TouchableOpacity>
      <Image source={{}} style={PagamentosEstilo.logo} />
      <Text style={PagamentosEstilo.title}>Meus GASTOS</Text>
      <TextInput style={PagamentosEstilo.input} placeholder="Descrição" />
      <TextInput style={PagamentosEstilo.input} placeholder="Local" />
      <TextInput style={PagamentosEstilo.input} placeholder="Categoria" />
      <TextInput style={PagamentosEstilo.input} placeholder="Preço" keyboardType="numeric" />
      <Text style={PagamentosEstilo.photoText}>Adicionar foto?</Text>
      <TouchableOpacity style={PagamentosEstilo.photoButton}>
        <Text style={PagamentosEstilo.photoButtonText}>📷</Text>
      </TouchableOpacity>
      <TouchableOpacity style={PagamentosEstilo.finalizeButton} 
        onPress={() => navigation.navigate('Home')}>
        <Text style={PagamentosEstilo.finalizeButtonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PagamentosScreen;
