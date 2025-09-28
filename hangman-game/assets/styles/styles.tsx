import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D6F39",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#F0F4F5",
  },

  palavraContainer: {
    flexDirection: "row",
    marginVertical: 20,
    color: "#F0F4F5",
  },

  letra: {
    fontSize: 32,
    marginHorizontal: 6,
    fontWeight: "bold",
    color: "#F0F4F5",

  },

  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },

  tecla: {
    backgroundColor: "#ddd",
    padding: 10,
    margin: 4,
    borderRadius: 6,
    minWidth: 40,
    alignItems: "center",
  },

  teclaUsada: {
    backgroundColor: "#bbb",
  },

  teclaTexto: {
    fontSize: 16,
    fontWeight: "bold",
  },

  tentativasContainer: {
    marginVertical: 10,
    alignItems: "center",
  },

  tituloTentativas: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#F0F4F5",

  },

  listaTentativas: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    color: "#F0F4F5",

  },

  letraCorreta: {
    fontSize: 20,
    margin: 4,
    color: "#C8FACC",
    fontWeight: "bold",
  },

  letraErrada: {
    fontSize: 20,
    margin: 4,
    color: "#FF7F7F",
    fontWeight: "bold",
  },

  resultadoContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  resultadoTexto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#F0F4F5",
    textAlign: "center",
  },

  botaoReiniciar: {
    marginTop: 16,
  paddingVertical: 12,
  paddingHorizontal: 24,
  backgroundColor: "#E28A3F", 
  borderRadius: 8,
  alignItems: "center",
  },
botaoTexto: {
   color: "#fff",
  fontSize: 16,
  fontWeight: "bold",
},
  forcaContainer: {
    width: 150,
    height: 200,
    alignItems: "center",
    marginBottom: 20,
  },
  posteVertical: {
    position: "absolute",
    left: 10,
    top: 0,
    width: 10,
    height: 200,
    backgroundColor: "#F0F4F5",
  },
  posteHorizontal: {
    position: "absolute",
    left: 10,
    top: 0,
    width: 80,
    height: 10,
    backgroundColor: "#F0F4F5",
  },
  corda: {
    position: "absolute",
    left: 90,
    top: 0,
    width: 2,
    height: 30,
    backgroundColor: "#F0F4F5",
  },
  cabeca: {
    position: "absolute",
    left: 75,
    top: 30,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#F0F4F5",
  },
  corpo: {
    position: "absolute",
    left: 89,
    top: 60,
    width: 2,
    height: 50,
    backgroundColor: "#F0F4F5",
  },
  bracoEsq: {
    position: "absolute",
    left: 89,
    top: 70,
    width: 40,
    height: 2,
    backgroundColor: "#F0F4F5",
    transform: [{ rotate: "-30deg" }],
  },
  bracoDir: {
    position: "absolute",
    left: 51,
    top: 70,
    width: 40,
    height: 2,
    backgroundColor: "#F0F4F5",
    transform: [{ rotate: "30deg" }],
  },
  pernaEsq: {
    position: "absolute",
    left: 89,
    top: 120,
    width: 40,
    height: 2,
    backgroundColor: "#F0F4F5",
    transform: [{ rotate: "30deg" }],
  },
  pernaDir: {
    position: "absolute",
    left: 51,
    top: 120,
    width: 40,
    height: 2,
    backgroundColor: "#F0F4F5",
    transform: [{ rotate: "-30deg" }],
  },
});
