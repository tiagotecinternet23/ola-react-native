import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "lightblue",
    flex: 1,
    // justifyContent: "center",
    // flexDirection: "row", // padrão é column
  },
  cabecalho: {
    backgroundColor: "lightgreen",
    flex: 0.6,
    justifyContent: "center",
  },
  conteudo: {
    backgroundColor: "yellow",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 10,
  },
  rodape: {
    backgroundColor: "orange",
    flex: 0.7,
  },
  titulo: {
    fontSize: 32,
    textAlign: "center",
    color: "green",
    fontWeight: "bold",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 24,
  },
  texto: {
    marginTop: 16,
  },
});

export default estilos;
