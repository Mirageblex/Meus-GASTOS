import { StyleSheet } from 'react-native';

const CadastroEstilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10
  },
  button: {
    marginTop: 20
  }
});

export default CadastroEstilo;
