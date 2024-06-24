import { StyleSheet } from 'react-native';

const LoginEstilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff', // Adicionando o fundo branco
  },
  input: {
    height: 50,
    width: '100%',
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ddd',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    width: '100%',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#3498db',
    textDecorationLine: 'underline',
    marginTop: 10, // Adicionando margem ao texto do link
  },
});

export default LoginEstilo;
