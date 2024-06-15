import React from "react";
import { TouchableOpacity, Text } from 'react-native';

const BotaoClicavel = ({ onPress, TextoBotao }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <Text>{TextoBotao}</Text>
        </TouchableOpacity>
    );
}

export default BotaoClicavel;
