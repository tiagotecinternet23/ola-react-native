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
          <Text style={estilos.titulo}>Topo/Cabeçalho</Text>
        </View>
        <View style={estilos.conteudo}>
          <Text style={estilos.subtitulo}>Conteúdo...</Text>
          <Text style={estilos.texto}>
            Etiam sed condimentum lorem. Integer sit amet risus dignissim diam
            tristique suscipit. Cras at erat sed diam maximus dapibus.
          </Text>
          <Text style={estilos.texto}>
            Curabitur scelerisque ipsum non tristique eleifend. Vestibulum
            tempor leo ut eros rutrum finibus. Praesent ultrices commodo eros,
            porttitor pellentesque turpis maximus fermentum. Integer a risus et
            orci vulputate mattis. Pellentesque nec sem cursus, mattis risus
            non, hendrerit ex.
          </Text>
          <Text style={estilos.texto}>
            Praesent in dapibus diam, nec consectetur nisl. Fusce hendrerit nunc
            congue, vulputate lacus nec, suscipit lectus. Vestibulum venenatis
            varius condimentum. Praesent scelerisque ex iaculis justo sodales
            rhoncus. Curabitur at efficitur ligula, pharetra commodo nibh. Sed
            eget dignissim ex, sed accumsan turpis.
          </Text>
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
