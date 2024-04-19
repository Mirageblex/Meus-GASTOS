import { View, Text, TouchableOpacity } from "react-native";

export default function Home({ navigation }){

    function acessarCadastro(){
        navigation.navigate('Cadastro');

    }
    return(
        <View>
            <Text>
                Estou na Home
            </Text>
            <TouchableOpacity
                onPress={acessarCadastro}
                >
                <Text>
                    Acessar Cadastro
                </Text>
            </TouchableOpacity>
        </View>
    );
}