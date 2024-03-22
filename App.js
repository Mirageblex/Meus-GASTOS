import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [login, setLogin] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!login) {
      setMessage('Preencha os campos necessários');
    } else {
      setMessage('');
    }
  }, [login]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{message}</Text>
      <TextInput
        style={styles.input}
        placeholder="Login"
        onChangeText={setLogin}
        value={login}
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Entrar')}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA630',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  texto: {
    color: '#000',
    fontSize: 14,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 42,
    paddingVertical: 16,
    borderRadius: 25,
    width: '70%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal:42,
    paddingVertical: 16,
    borderRadius: 25,
    width: '70%',
    marginBottom: 20,
  },
});
