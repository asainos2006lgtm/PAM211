import { Text, StyleSheet, View, Button, Modal } from 'react-native'
import React, { useState } from 'react'

export default function ModalScreen () {
        const [modalVisible, setModalVisible] = useState(false);

 
    return (
      <View  style={styles.container}>
        <Button title='Mostrar Modal' onPress={() => setModalVisible(true)} color= 'purple'>
            Picame
        </Button>

        <Modal 
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
        >
            <View style={styles.modlaContainer} >
                <View style={styles.modalContent}>
                    <Text style={styles.textModal}>
                        Soy un Modal
                    </Text>
                    <Button 
                        title='Ocultar Modal'
                        onPress={() => setModalVisible(false)} 
                        color='purple'>
                    </Button>
                </View>

            </View>
        </Modal>
      </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    modlaContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'            
    },
    modalContent:{
        backgroundColor: '#fff',
        padding: 25,
        borderRadius: 15,
        alignItems: 'center'
    },
    textModal:{
        color:'#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBotton: 15
    }
})