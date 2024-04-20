import { View, Text } from "react-native";
import styles from './styles';

export default function Cadastro({ route, navigation}){
    const { pesquisa } = route.params;
    return(
        <View style={styles.container}>
            <Text>
                Estou na Cadastro
            </Text>
            <Text>
                Palavra buscada: {pesquisa}
            </Text>
        </View>
    );
}