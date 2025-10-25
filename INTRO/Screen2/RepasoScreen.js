import React, { useState, useEffect } from "react";
import {View, Text, TextInput, Switch, Button, Alert, Image, ImageBackground, StyleSheet, Platform,} from "react-native";

const BackgroundImage = require("../assets/one-piece-2-64ece20f09f40.avif");
const BackgroundImage1 = require("../assets/descarga1.png");

export default function RepasoScreen() {

  const [mostrarSplash, setMostrarSplash] = useState(true);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

 
  useEffect(() => {
    const timer = setTimeout(() => setMostrarSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);


  const validarCorreo = (email) => {
    if (!email.includes("@")) {
      showAlert("Correo inválido", "El correo debe incluir el símbolo '@'.");
      return false;
    }

    const partes = email.split("@");
    if (partes.length !== 2 || partes[0].length === 0 || partes[1].length === 0) {
      Alert.alert("Correo inválido", "El formato del correo no es correcto.");
      return false;
    }

    const dominio = partes[1];
    const dominiosValidos = ["gmail.com", "hotmail.com", "outlook.com", "upq.edu.mx"];
    const tieneDominioValido = dominiosValidos.some((d) => dominio.endsWith(d));

    if (!tieneDominioValido) {
      showAlert(
        "Dominio no válido",
        "El dominio del correo debe ser gmail.com, hotmail.com, outlook.com o upq.edu.mx."
      );
      return false;
    }
         

    return true;
  };

 
  const validarRegistro = () => {
    if (!nombre.trim() && !correo.trim()) {
      showAlert("Error", "Por favor completa todos los campos.");
      return;
    }

    if (!nombre.trim()) {
      showAlert("Falta tu nombre", "Por favor, ingresa tu nombre completo.");
      return;
    }

    if (!correo.trim()) {
      showAlert("Falta tu correo", "Por favor, escribe tu correo electrónico.");
      return;
    }


    if (!validarCorreo(correo)) return;

    if (!aceptaTerminos) {
      showAlert("Aviso", "Debes aceptar los términos y condiciones.");
      return;
    }

    showAlert(
      "Registro exitoso",
      `Nombre: ${nombre} Correo: ${correo}`,
    );
  };


  const showAlert = (title, message) => {
    if (Platform && Platform.OS === "web" && typeof window !== "undefined") {

      window.alert(title + (message ? "\n" + message : ""));
    } else {
      Alert.alert(title, message);
    }
  };

 
  if (mostrarSplash) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={BackgroundImage1}
          style={styles.splashLogo}
        />
        <Text style={styles.splashText}>Bienvenido, porfavor espera un momento....</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={BackgroundImage}
      style={styles.fondo}
    >
      <View style={styles.contenedor}>
        <Image
          source={BackgroundImage1}
          style={styles.logo}
        />

        <Text style={styles.titulo}>Registro de Usuario</Text>


        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
        />

  
        <View style={styles.switchContainer}>
          <Switch
            value={aceptaTerminos}
            onValueChange={setAceptaTerminos}
            thumbColor={aceptaTerminos ? "#004B8D" : "#ccc"}
          />
          <Text style={styles.textoSwitch}>Aceptar términos y condiciones</Text>
        </View>

        <View style={styles.boton}>
          <Button title="Registrarse" color="#004B8D" onPress={validarRegistro} />
        </View>
      </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  contenedor: {
    backgroundColor: "rgba(255,255,255,0.9)",
    margin: 20,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#004B8D",
  },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  textoSwitch: {
    marginLeft: 10,
    fontSize: 15,
  },
  boton: {
    borderRadius: 10,
    overflow: "hidden",
  },
  splashContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  splashLogo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  splashText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#004B8D",
  },
});
