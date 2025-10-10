// 1. Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';


//2. Main: Zona de componentes 
export default function ContadorScreen2() {

      const [contador, setContador] = useState(0);

  return (

    <View style={styles.container}>
      <Text style = {styles.texto}>Contador:</Text>
        <Text style = {styles.texto2}>{contador}</Text>


    <View style={styles.botonescontainer}>
      <Button color = 'green' title='Agregar' onPress={()=>setContador(contador + 1)}/>
      <Button color = 'blue' title='Quitar' onPress={()=>setContador(contador - 1)}/>
      <Button color = 'gold' title='Reiniciar' onPress={()=>setContador(0)}/>
      <StatusBar style="auto" />
      </View>
      
    </View>
  );
}
 
// Estilos: Zona estetica prara componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#574f4f7a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto :{
    fontSize:30,
    color:'#1c35d7df',
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    foontStyle:'italic',
    textDecorationLine: 'line-through',

  },
  texto2 :{
    color: '#1c35d7df',
    fontSize: 40,
    fontFamily: 'courier',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  botonescontainer:{
    marginTop:20,
    flexDirection:'row',
    gap:20,
  }
});
