import { Text, StyleSheet, View, Image, ImageBackground, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'


const BackgroundImage = require('./assets/images.png');

export default function App({navegation}) {
      const [showSplash, setShowSplash] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);
    if(showSplash){
  return (
    <ImageBackground
    source={BackgroundImage}
    styles={styles.background}
    resizeMode='cover'    
    >
      <View style= {styles.overlay}>
          <Text style={styles.title}>Bienvenido</Text>
          <Text style={styles.title}>Cargando.....</Text>
        </View>
    </ImageBackground>


    )
  }

  return (
    <ImageBackground
    source={BackgroundImage}
    style={styles.background}
    resizeMode='cover'
    >
      <View
       style={styles.mainScreen}
      >
        <Text style={styles.maintexto}>Pantalla Principal</Text>
      </View>
    </ImageBackground>
  );
}

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  background: {
    width: width,
    height: height,
  },
  overlay:{
    flex : 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainScreen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    bakcgroudnColor:'#f2f2f2',
  },
  maintexto:{
    fontSize:30,
    color:'#333',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBotton: 10,
    textAlign: 'center'

  }
});
