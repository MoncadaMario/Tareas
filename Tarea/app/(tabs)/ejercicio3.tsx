import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    marginTop: 30,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tareamensaje: {
    color: 'green',
    fontSize: 25,
    textAlign: 'center',
  },
});

export default function ejercicio3() {
  return (
    <View style={styles.container}>
      <Text style={styles.tareamensaje}>Ejercicio #3</Text>
    </View>
  );
}