import React from "react";
import { View, Text } from "react-native";
import { styles } from "../assets/styles/styles";

interface TentativasProps {
  tentativasRestantes: number;
  letrasUsadas: string[];
  palavra: string;
}

export default function Tentativas({
  tentativasRestantes,
  letrasUsadas,
  palavra,
}: TentativasProps) {
  return (
    <View style={styles.tentativasContainer}>
      <Text style={styles.tituloTentativas}>
        Tentativas Restantes: {tentativasRestantes}
      </Text>
      <View style={styles.listaTentativas}>
        {letrasUsadas.map((letra, index) => {
          const correta = palavra.includes(letra);
          return (
            <Text
              key={index}
              style={correta ? styles.letraCorreta : styles.letraErrada}
            >
              {letra}
            </Text>
          );
        })}
      </View>
    </View>
  );
}
