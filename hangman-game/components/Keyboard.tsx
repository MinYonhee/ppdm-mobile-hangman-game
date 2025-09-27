import React from 'react';
import { View, Button } from 'react-native';
import { styles } from '../assets/styles/styles';

interface KeyboardProps {
  letraClicada: (letra: string) => void;
}

const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export default function Keyboard({ letraClicada }: KeyboardProps) {
  return (
    <View style={styles.keyboardContainer}>
      {letras.map((letra) => (
        <Button key={letra} title={letra} onPress={() => letraClicada(letra)} />
      ))}
    </View>
  );
}
