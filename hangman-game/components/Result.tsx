import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles/styles';

interface ResultadoProps {
  resultado: string;
  palavra: string;
}

export default function Resultado({ resultado, palavra }: ResultadoProps) {
  if (!resultado) return null;

  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.resultadoTexto}>
        {resultado === 'Vitória' ? 'Parabéns! Você ganhou!' : `Você perdeu! Palavra: ${palavra}`}
      </Text>
    </View>
  );
}
