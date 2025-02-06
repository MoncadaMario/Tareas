import { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  container1: {
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
  error: {
    color: 'red',
    fontSize: 12,
    margin: 10,
},

container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
},

label: {
    fontSize: 16,
    marginBottom: 5,
},

input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
}
});

export default function ejercicio1() {
//creamos el estado para el usuario
    const[usuario, setUsuario] = useState({nombre:'', edad:''});

//manejamos los cambios?
const manejarCambio = (campo: string, valor: string) => {
    setUsuario((prevUsuario)=>({
        ...prevUsuario,
        [campo]: valor,
    }));
};

// mostrar el msj y verificacion con el isNaN para que edad solo sea numeros
const mostrarMensaje = () => {
    const { nombre, edad } = usuario;
//nunca pude quitar el error pero funciona igual
    if (!edad || isNaN(edad)) {
      Alert.alert('Error', 'Por favor, ingresa una edad solo en numeros.');
      return;
    }

    Alert.alert('Mensaje', `Hola, ${nombre}. Tienes ${edad} años.`);
  };

  return (
    <View style={styles.container1}>
      <Text style={styles.tareamensaje}>Ejercicio #1</Text>

            <Text style={styles.label}>Nombre: {usuario.nombre}</Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su nombre"
            value={usuario.nombre}
            onChangeText={(texto) =>{manejarCambio('nombre', texto)}}
            />

            <Text style={styles.label}>Edad: </Text>
            <TextInput
            style={styles.input}
            placeholder="Ingrese su edad"
            keyboardType="numeric"
            value={usuario.edad}
            onChangeText={(texto) =>{manejarCambio('edad', texto)}}
            />
            <Button title="Mostrar Mensaje" onPress={mostrarMensaje} />
    </View>
  );
}