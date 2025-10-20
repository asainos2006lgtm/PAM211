import React, { use, useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet, useColorScheme } from 'react-native';

const BotonesScreen = () => {
  // Estado principal: controla si está prendido o apagado
  const [prendido, setPrendido] = useState(false);
  

  // Cambiar color de fondo y texto según el estado
  const backgroundColor = prendido ? '#F5F5F5' : '#121212'; // claro u oscuro
  const textColor = prendido ? '#000' : '#FFF'; // texto negro o blanco

  return (
    <View style={[styles.container, { backgroundColor }]}>
      {/* Texto que muestra el estado actual */}
      <Text style={[styles.texto, { color: textColor }]}>
        Estado: {prendido ? 'Prendido' : 'Apagado'}
      </Text>

      {/* Botón para encender */}
      <TouchableOpacity
        style={styles.botonEncender}
        onPress={() => setPrendido(true)}>
        <Text style={styles.textoBoton}>Prender</Text>
      </TouchableOpacity>

      {/* Botón para apagar */}
      <TouchableOpacity
        style={styles.botonApagar}
        onPress={() => setPrendido(false)}>
        <Text style={styles.textoBoton}>Apagar</Text>
      </TouchableOpacity>

      {/* Switch controlado */}
      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: textColor }]}>Control con Switch:</Text>
        <Switch value={prendido} onValueChange={setPrendido} />
      </View>

      <View style={styles.switchContainer}>
        <Text style={[styles.switchLabel, { color: textColor }]}>Switch desabilitado:</Text>
        <Switch> value={true} disabled={true} </Switch>
      </View>
    </View>
    
    
  );
};

export default BotonesScreen;

// 🎨 Estilos base
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  botonEncender: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
  },
  botonApagar: {
    backgroundColor: '#F44336',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 20,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10,
  },
});
