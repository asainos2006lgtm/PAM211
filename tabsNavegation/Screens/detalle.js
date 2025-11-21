import { Text, StyleSheet, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function detalle ({navigation}) {

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Detalles de Usuario </Text>
        <Text style={styles.Text}> Usando Navegacion Stack </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333'
    },
    Text: {
        fontSize: 16,
        color: 'blue',
        marginBottom: 8,
    },

});
