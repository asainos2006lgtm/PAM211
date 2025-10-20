import { Text, StyleSheet, View, Button} from 'react-native'
import React, { useState } from 'react'
import BotonesScreen from './BotonesScreen'
import ContadorScreen2 from './ContadorScreen2'
import Texto from './Texto'
import Indicador from './Indicador'
import Listas from './Listas'
import ModalScreen from './ModalScreen'
import Barra from './Barra'
import Expo3 from './Expo3'




export default function MenuScreen () {
  const [screen, setScreen] = useState('menu');
  switch(screen) {
    case 'contador': 
        return <ContadorScreen2/>;
    case 'botones': 
        return <BotonesScreen/>;
    case 'text_input_alert':
        return <Texto/>;
    case 'image_background':
        return <Expo3/>;
    case 'scroll_view':
        return <Barra/>;
    case 'activity_indicator':
        return <Indicador/>;
    case 'flatlist_sectionlist':
        return <Listas/>;
    case 'modal':
        return <ModalScreen/>;
    case 'menu': 
        return (
            <View style={styles.container}>
                <Text style = {styles.texto}>MENU DE PRACTICAS</Text>
                <View style={styles.botonescontainer}>
                <Button onPress={()=> setScreen('contador')} title = 'Practica: Contador'/>
                <Button onPress={()=> setScreen('botones')} title = 'Practica: Botones'/>
                <Button onPress={()=> setScreen('text_input_alert')} title = 'Practica: TextInput & Alert'/>
                <Button onPress={()=> setScreen('image_background')} title = 'Practica: Image & Background'/>
               
                <Button onPress={()=> setScreen('scroll_view')} title = 'Practica: ScrollView'/>
                <Button onPress={()=> setScreen('activity_indicator')} title = 'Practica: Activity Indicator'/>
                <Button onPress={()=> setScreen('flatlist_sectionlist')} title = 'Practica:FlatListSectionList'/>
                <Button onPress={()=> setScreen('modal')} title = 'Practica: Modal'/>
                </View>
            </View>
            );
            default: 
            <View>
              <Text>Pantalla no encontrada</Text>
          </View>
    
  }

  
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e7d7d7a',
    },
    texto :{
    fontSize:30,
    color:'#000000df',
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    foontStyle:'italic',
  },
    botonescontainer:{
    marginTop:20,
    flexDirection:'column',
    gap:10,
  },
    botonescontainer2:{
    marginTop:20,
    flexDirection:'column',
    gap:10 ,
  },

})