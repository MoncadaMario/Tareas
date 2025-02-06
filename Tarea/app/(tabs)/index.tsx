import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tareamensaje: {
    color: 'green',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.tareamensaje}>Bienvenidos a la tarea de semana #2</Text>
    </View>
  );
}