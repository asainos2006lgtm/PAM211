import { Text, StyleSheet, View } from 'react-native'
import React,{useState} from 'react';

export default function Listas () {
  
    return (
      <View style={styles.container}>
        <Text style = {styles.texto}>Proximamente......</Text>
      </View>
    )
  
}

const styles = StyleSheet.create({
          container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8e7d7d7a',
    },
        texto :{
        fontSize:60,
        color:'#000000df',
        fontFamily:'Times New Roman',
        fontWeight:'bold',
        foontStyle:'italic',
  }
})