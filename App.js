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
        <View>
          <Text>Conteúdo...</Text>
        </View>
        <View>
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
  },
  cabecalho: {
    backgroundColor: "lightgreen",
  },
  conteudo: {
    backgroundColor: "yellow",
  },
  rodape: {
    backgroundColor: "orange",
  },
});
