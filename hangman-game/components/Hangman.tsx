import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../assets/styles/styles';

interface ForcaDisplayProps {
  palavra: string;
  letrasDescobertas: string[];
}

export default function ForcaDisplay({ palavra, letrasDescobertas }: ForcaDisplayProps) {
  return (
    <View style={styles.forcaContainer}>
      {palavra.split('').map((letra, index) => (
        <Text key={index} style={styles.letra}>
          {letrasDescobertas.includes(letra) ? letra : '_'}
        </Text>
      ))}
    </View>
  );
}
