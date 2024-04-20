import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#FFA630',
      },
      texto: {
        fontSize: 20,
        marginBottom: 20,
      },
      image: {
        width: 500,
        height: 300,
        marginBottom: 20,
      },
      formContainer: {
        width: '80%',
        marginBottom: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
      },
      buttonContainer: {
        width: '80%',
      },
      button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
        marginBottom: 20,
        borderRadius: 25,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
      centered: {
        alignItems: 'center',

    }
});