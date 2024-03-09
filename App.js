import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        
      </Text>    
      <TouchableOpacity style={estilos.button}>
        <Text>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilos.button}>
        <Text>
          Não tenho login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA630',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    
    
    
    
  },
  texto:{
    color: "#000",
    fontSize: 14
  },

  button:{
    backgroundColor: "#fff",
    paddingHorizontal: 42,
    paddingVertical: 16,
    borderRadius: 25,
    width: "70%",
    marginBottom: -200,
    marginTop: 220,
    
  }
});