import { StyleSheet } from 'react-native';

const PagamentosEstilo = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        alignSelf: 'flex-start',
    },
    perfil: {
        alignSelf: 'flex-end',
        backgroundColor: '#f5a623',
        padding: 8,
        alignItems: 'center',
        borderRadius: 5,
    },
    perfilText: {
        fontSize: 12,
    },
    backText: {
        fontSize: 24,
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
    },
    photoText: {
        marginVertical: 10,
    },
    photoButton: {
        backgroundColor: '#f5a623',
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 20,
    },
    photoButtonText: {
        fontSize: 24,
    },
    finalizeButton: {
        backgroundColor: '#f5a623',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
    },
    finalizeButtonText: {
        fontSize: 18,
        color: '#fff',
    },
    });

  export default PagamentosEstilo;