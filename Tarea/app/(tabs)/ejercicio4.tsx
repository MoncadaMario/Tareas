import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

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

export default function ejercicio4() {
//aqui se define el estado del cargando empezando en true
  const [cargando, setCargando] = useState(true);

  //aqui ponemos el time out que creo son 3 segundos
  useEffect(() => {
    if(cargando){
      setTimeout(()=>{
        setCargando(false);
      },3000)
    }
  },[cargando])

//guardamos el msj que se presenta en pantalla
  const msj = () => {
    if(cargando){
      return "Cargando..."
    }else{
      return "Bienvenido a la aplicacion"
    }
  }
    return (
    <View style={styles.container}>
      <Text style={styles.tareamensaje}>Ejercicio #4</Text>
      <Text>{msj()}</Text>
    </View>
  );
}