import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'
import React,{useState} from 'react';

export default function Listas () {
  //FlatList
  const ejercicios= [
    {id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para las piernas y glúteos'},
    {id: '2', nombre: 'Flexiones', descripcion: 'Ejercicio para el pecho y brazos'},
    {id: '3', nombre: 'Abdominales', descripcion: 'Ejercicio para el abdomen'},
    {id: '4', nombre: 'Burpees', descripcion: 'Ejercicio de cuerpo completo'},
    {id: '5', nombre: 'Zancadas', descripcion: 'Ejercicio para las piernas y glúteos'},
    {id: '6', nombre: 'Plancha', descripcion: 'Ejercicio para el core'},
    {id: '7', nombre: 'Saltos de tijera', descripcion: 'Ejercicio cardiovascular'},
    {id: '8', nombre: 'Mountain climbers', descripcion: 'Ejercicio para el core y cardio'},
    {id: '9', nombre: 'Superman', descripcion: 'Ejercicio para la espalda baja'},
    {id: '10', nombre: 'Puente de glúteos', descripcion: 'Ejercicio para glúteos y espalda baja'},
  ]
  //SectionList
  const contactos = [
    {titulo: 'A', data: ['Alejandra', 'Ana la de las torillas', 'Adele']},
    {titulo: 'B', data: ['Brenda', 'Beto', 'Bárbara']},
    {titulo: 'C', data: ['Carlos', 'Cecilia', 'Camilo']},
    {titulo: 'D', data: ['Daniel', 'Diana', 'Dario']},
  ]
  
    return (
      <View style={styles.container}>
       
        <View style={styles.listContainer}>
          <Text style={styles.title}>Lista de Ejercicios</Text>
          <FlatList 
          data={ejercicios}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text style={styles.descripcion}>{item.descripcion}</Text>
            </View>
          )}
          />
        </View>
     
        <View style={styles.listContainer}>
          <Text style={styles.title}>Contactos</Text>
          <SectionList
          sections={contactos} 
          renderItem={({item}) => (
            <Text style={styles.item}>{item}</Text>
          )}     
          renderSectionHeader={({section}) => {
            <Text style={styles.header}>{section.titulo}</Text>
          }}    
          />
        </View>
      </View>

      
    )
  
}

const styles = StyleSheet.create({
          container : {
        flex: 1,
        padding: 10,
    },
        listContainer : {
      flex: 1,
      marginBottom: 20
    },
    title :{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    item : {
      padding: 10,
      backgroundColor : '#c3c3c3ff',
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 5,
    },
    nombre : {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    descripcion:{
      fontSize: 14,
      color: '#666',
    },
    header : {
      fontSize: 18,
      backgroundColor: '#white',
      padding: 10,
      marginTop: 10,
    },
})