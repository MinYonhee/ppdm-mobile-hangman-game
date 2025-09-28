import React from "react";
import { View } from "react-native";
import { styles } from "../assets/styles/styles";

interface ForcaProps {
  erros: number;
}

export default function Forca({ erros }: ForcaProps) {
  return (
    <View style={styles.forcaContainer}>
      <View style={styles.posteVertical} />
      <View style={styles.posteHorizontal} />
      <View style={styles.corda} />

      {erros > 0 && <View style={styles.cabeca} />}
      {erros > 1 && <View style={styles.corpo} />}
      {erros > 2 && <View style={styles.bracoEsq} />}
      {erros > 3 && <View style={styles.bracoDir} />}
      {erros > 4 && <View style={styles.pernaEsq} />}
      {erros > 5 && <View style={styles.pernaDir} />}
    </View>
  );
}
