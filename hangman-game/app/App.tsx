import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity} from "react-native";
import Word from "../components/Word";
import Keyboard from "../components/Keyboard";
import Tries from "../components/Tries";
import Hangman from "../components/Hangman";
import { styles } from "../assets/styles/styles";

const palavras = [
  "SOL", "CHUVA", "ESCREVER", "CORRER", "MUSICA",
  "AMIGO", "FESTA", "ESCOLA", "TRABALHO", "CELULAR",
  "TREM", "ÔNIBUS", "PRAIA", "CIDADE", "VIAGEM",
  "CINEMA", "LIVRO", "CANETA", "BICICLETA", "JARDIM",
  "BOLSA", "CASA", "ROUPA", "JOGO", "COMIDA",
  "FAMILIA", "ANIVERSARIO", "FOTOGRAFIA", "TARDE", "NOITE"
];

export default function Index() {
  const [palavra, setPalavra] = useState("");
  const [letrasUsadas, setLetrasUsadas] = useState<string[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(6);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    iniciarJogo();
  }, []);

  function iniciarJogo() {
    const palavraAleatoria =
      palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraAleatoria);
    setLetrasUsadas([]);
    setTentativasRestantes(6);
    setMensagem("");
  }

  function verificarLetra(letra: string) {
    if (letrasUsadas.includes(letra) || mensagem) return;

    setLetrasUsadas((prev) => [...prev, letra]);

    if (!palavra.includes(letra)) {
      setTentativasRestantes((prev) => prev - 1);
    }
  }

  useEffect(() => {
    if (!palavra) return;

    const ganhou = palavra.split("").every((l) => letrasUsadas.includes(l));
    if (ganhou) {
      setMensagem("Parabéns, você venceu!");
    } else if (tentativasRestantes === 0) {
      setMensagem(`VOCÊ PERDEU!\nA palavra era: ${palavra}`);
    }
  }, [letrasUsadas, tentativasRestantes]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Jogo da Forca</Text>

      <Hangman erros={6 - tentativasRestantes} />

      <Word palavra={palavra} letrasUsadas={letrasUsadas} />

      <Tries
        tentativasRestantes={tentativasRestantes}
        letrasUsadas={letrasUsadas}
        palavra={palavra}
      />

      {mensagem ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultadoTexto}>{mensagem}</Text>
        </View>
      ) : (
        <Keyboard onPress={verificarLetra} letrasUsadas={letrasUsadas} />
      )}

      <TouchableOpacity style={styles.botaoReiniciar} onPress={iniciarJogo}>
        <Text style={styles.botaoTexto}>REINICIAR</Text>
      </TouchableOpacity>

    </View>
  );
}
