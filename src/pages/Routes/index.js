import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Home';
import CadastroScreen from '../Cadastro';
import LoginScreen from '../Login';
import PagamentosScreen from '../Pagamentos';
import HistoricoScreen from '../Historico';

const Stack = createStackNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen} options={{headerShown: false}}
        />

        <Stack.Screen
          name="Cadastro"
          component={CadastroScreen} options={{headerShown: false}}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen} options={{headerShown: false}}
        />

        <Stack.Screen
          name="Pagamentos"
          component={PagamentosScreen} options={{headerShown: false}}
        />

        <Stack.Screen
          name="Historico"
          component={HistoricoScreen} options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
