import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

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
  boton:{
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});



export default function ejercicio2() {
  //iniciamos el contador
const [contador, setContador] = useState(0);
//se suma al contador
const incrementarContador = () => {
    setContador(contador +1 );
  }

//reiniciar el contador
const reiniciarContador = () => {
    setContador(contador - contador );
  }
//msj cada que cambia el contador
useEffect(() => {
    Alert.alert(`Su nuevo contador es: ${contador}`);

    //muestra un msj si el contador es multiplo de 5
    if (contador % 5 === 0 && contador !== 0) {
        Alert.alert("Felicidades alcanzo un multiplo de 5");
    }
  }, [contador]);
  
    return (
    <View style={styles.container}>
      <Text style={styles.tareamensaje}>Ejercicio #2</Text>
      <View style={styles.boton}><Button title="Incremente su contador" onPress={() => {incrementarContador();}}/></View>
      <View style={styles.boton}><Button title="Reiniciar Contador?" onPress={() => {reiniciarContador();}}/></View>
    </View>


  );
}