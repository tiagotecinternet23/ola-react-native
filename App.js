import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Button,
  Alert,
  StyleSheet,
} from "react-native";

export default function App() {
  const vai = () => {
    Alert.alert("Titulo da janela", "Fala parça!");
    console.log("Teste!");
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Topo/Cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text>Conteúdo...</Text>
        </View>
        <View style={estilos.rodape}>
          <Text>Rodapé...</Text>
          <Button title="Toca aqui!!!" onPress={vai} />
        </View>
      </SafeAreaView>
    </>
  );
}

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
});
