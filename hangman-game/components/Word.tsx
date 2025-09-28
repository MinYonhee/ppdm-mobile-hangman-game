import React from "react";
import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";

interface PalavraProps {
  palavra: string;
  letrasUsadas: string[];
}

export default function Palavra({ palavra, letrasUsadas }: PalavraProps) {
  return (
    <View style={styles.palavraContainer}>
      {palavra.split("").map((letra, index) => (
        <Text key={index} style={styles.letra}>
          {letrasUsadas.includes(letra) ? letra : "_"}
        </Text>
      ))}
    </View>
  );
}
