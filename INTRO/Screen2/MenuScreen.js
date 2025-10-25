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
import RepasoScreen from './RepasoScreen'


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
    case 'repaso':
        return <RepasoScreen/>;
        case 'menu': 
                return (
                        <View style={styles.container}>
                                <Text style = {styles.texto}>MENU DE PRACTICAS</Text>
                                <View style={styles.botonescontainer}>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('contador')} title = 'Practica: Contador'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('botones')} title = 'Practica: Botones'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('text_input_alert')} title = 'Practica: TextInput & Alert'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('image_background')} title = 'Practica: Image & Background'/>
                                    </View>
                                </View>
                                <View style={styles.botonescontainer2}>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('scroll_view')} title = 'Practica: ScrollView'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('activity_indicator')} title = 'Practica: Activity Indicator'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('flatlist_sectionlist')} title = 'Practica:FlatListSectionList'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('modal')} title = 'Practica: Modal'/>
                                    </View>
                                    <View style={styles.buttonWrapper}>
                                        <Button onPress={()=> setScreen('repaso')} title = 'Practica: Repaso'/>
                                    </View>
                                </View>
                        </View>
                        );
                        default: 
                        return (
                            <View>
                                <Text>Pantalla no encontrada</Text>
                            </View>
                        )
    
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
            fontStyle:'italic',
  },
    botonescontainer:{
            marginTop:20,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
            width: '90%',
  },
    botonescontainer2:{
            marginTop:16,
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-between',
            width: '90%',
  },
        buttonWrapper:{
            width: '48%',
            marginVertical:6,
        },

})