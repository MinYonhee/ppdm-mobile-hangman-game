import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Hangman from '../components/Hangman';
import Keyboard from '../components/Keyboard';
import Tries from '../components/Tries';
import Result from '../components/Result';
import { styles } from '../assets/styles/styles';

const palavras: string[] = [
  'REACT', 'JAVASCRIPT', 'EXPO', 'MOBILE', 'NODE', 
  'COMPONENTE', 'ESTADO', 'PROPS', 'HOOKS', 'FUNCAO',
  'ANDROID', 'IOS', 'NAVEGACAO', 'ESTILO', 'INPUT',
  'BOTAO', 'TEXTO', 'TELA', 'APLICATIVO', 'VARIAVEL',
  'CONSTANTE', 'ARRAY', 'OBJETO', 'STRING', 'NUMBER',
  'BOOLEAN', 'FUNCAO', 'PARAMETRO', 'RETURN', 'IMPORT'
];

export default function App() {
  const [palavra, setPalavra] = useState<string>(palavras[Math.floor(Math.random() * palavras.length)]);
  const [letrasDescobertas, setLetrasDescobertas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState<number>(6);
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [resultado, setResultado] = useState<string>('');

  const reiniciarJogo = () => {
    const novaPalavra = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(novaPalavra);
    setLetrasDescobertas([]);
    setTentativasRestantes(6);
    setLetrasUsadas([]);
    setResultado('');
  };

  const letraClicada = (letra: string) => {
    if (letrasUsadas.includes(letra)) return;

    setLetrasUsadas([...letrasUsadas, letra]);

    if (palavra.includes(letra)) {
      const novasDescobertas = [...letrasDescobertas, letra];
      setLetrasDescobertas(novasDescobertas);

      const todasLetras = palavra.split('').every(l => novasDescobertas.includes(l));
      if (todasLetras) setResultado('Vitória');
    } else {
      const novasTentativas = tentativasRestantes - 1;
      setTentativasRestantes(novasTentativas);
      if (novasTentativas === 0) setResultado('Derrota');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jogo da Forca</Text>
      <Hangman palavra={palavra} letrasDescobertas={letrasDescobertas} />
      <Tries tentativasRestantes={tentativasRestantes} letrasUsadas={letrasUsadas} />
      <Keyboard letraClicada={letraClicada} />
      <Result resultado={resultado} palavra={palavra} />
      <Button title="Reiniciar Jogo" onPress={reiniciarJogo} />
    </View>
  );
}
