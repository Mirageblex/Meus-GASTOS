// TextoInput.js

import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import TextoInputEstilo from './style';

const TextoInput = ({ placeholder, onChangeText, texto }) => {
  const handleChangeText = (text) => {
    onChangeText(text);
  };

  return (
    <View style={TextoInputEstilo.container}>
      <TextInput 
        style={TextoInputEstilo.input}
        value={texto}
        onChangeText={handleChangeText}
        placeholder={placeholder} // Ajuste aqui
      />
    </View>
  );
};

export default TextoInput;
