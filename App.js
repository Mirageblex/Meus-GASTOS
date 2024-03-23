import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.texto}>
        Email
      </Text>
      <Image source={require('./assets/MEUS_GASTOS.png')} style={estilos.image} />
   <View style={estilos.formContainer}>  
        <TextInput    // campo de preenchimento
          style={estilos.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        
        <TextInput  // campo de preenchimento
          style={estilos.input}
          placeholder="Senha"
          secureTextEntry
        />
      </View>
      <View style={estilos.buttonContainer}>
        <TouchableOpacity style={[estilos.button, styles.centered]}>   
          <Text style={estilos.buttonText}>Entrar</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={[estilos.button, styles.centered]}>
          <Text style={estilos.buttonText}>Esqueci a senha</Text>
        </TouchableOpacity>    
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFA630',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '65%',
    resizeMode: 'cover',
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 40,
    marginBottom: 30,
    marginTop: 150,
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '65%',
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 42,
    paddingVertical: 12,
    borderRadius: 25,
    width:'80%',
    marginBottom: -40,
    marginTop: 50,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
});

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
  },
});