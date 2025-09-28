import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles/styles";

interface TecladoProps {
  onPress: (letra: string) => void;
  letrasUsadas: string[];
}

const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function Teclado({ onPress, letrasUsadas }: TecladoProps) {
  return (
    <View style={styles.teclado}>
      {alfabeto.map((letra) => {
        const usada = letrasUsadas.includes(letra);
        return (
          <TouchableOpacity
            key={letra}
            style={[styles.tecla, usada && styles.teclaUsada]}
            onPress={() => onPress(letra)}
            disabled={usada}
          >
            <Text style={styles.teclaTexto}>{letra}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
