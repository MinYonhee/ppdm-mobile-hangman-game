import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles/styles';

interface TentativasProps {
  tentativasRestantes: number;
  letrasUsadas: string[];
}

export default function Tentativas({ tentativasRestantes, letrasUsadas }: TentativasProps) {
  return (
    <View style={styles.tentativasContainer}>
      <Text>Tentativas Restantes: {tentativasRestantes}</Text>
      <Text>Letras Usadas: {letrasUsadas.join(', ')}</Text>
    </View>
  );
}
