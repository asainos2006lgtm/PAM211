import { Text, StyleSheet, View, Alert, Platform, ActivityIndicator, Button} from 'react-native'
import React, {useState} from 'react';

export default function Indicador () {
  const [cargando, setCargando] = useState(false);
  const carga = () => {
    setCargando(true);
    setTimeout(() =>{
      setCargando(false);
      if(Platform.OS === 'web'){
      window.alert('Carga completa');
      }else{
        Alert.alert('Carga completa');
      }
    }, 3000);
  }
  
    return (
      <View style={styles.container}>
        <Text style = {styles.texto}>Presione para iniciar la carga</Text>
        <View style={styles.botonesContainer}>
          {cargando ? (<ActivityIndicator size='large' color='red'></ActivityIndicator>) : (<Button color='brown' title='Presione para iniciar' onPress={carga}></Button>)}
        </View>
      </View>
    )
  
}

const styles = StyleSheet.create({
        container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffff',
    },
        texto :{
        fontSize:30,
        color:'#000000df',
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        foontStyle:'italic',
  },
  botonesContainer : {
    marginTop:20,
    gap : 20,

  }
})