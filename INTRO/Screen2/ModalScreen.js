import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, ImageBackground, Image, Dimensions, ActivityIndicator, ScrollView,
    Button, Alert, Platform, TextInput
} from 'react-native';

// --- Assets (imágenes de tus archivos) ---
const SplashBackgroundImage = require("../assets/fondo.png");
const LogoImage = require("../assets/icon.png");

// --- Datos para el ScrollView ---
const lugares = [
    { id: '1', titulo: 'Fortaleza', descripcion: 'Esta es una imagen de una fortaleza antigua.', source: require('../assets/Galaxia.png') },
    { id: '2', titulo: 'Paisaje de Noche', descripcion: 'Un paisaje nocturno hermoso.', source: require('../assets/Galaxia.png') },
    { id: '3', titulo: 'Logo de Montañas', descripcion: 'El logo principal de la app.', source: require('../assets/Galaxia.png') },
    { id: '4', titulo: 'Fortaleza (Repetida)', descripcion: 'Otra vista de la fortaleza.', source: require('../assets/Galaxia.png') },
];

export default function SplashConScroll() {

    // Estado de pantalla: splash → login → main
    const [screen, setScreen] = useState('splash');

    // Estados para login
    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');

    // --- Lógica del Splash Screen ---
    useEffect(() => {
        if (screen === 'splash') {
            const timer = setTimeout(() => {
                setScreen('login'); // luego del splash, pasa al login
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    // --- Función para login ---
    const handleLogin = () => {
        if (usuario === 'admin' && contrasena === '1234') {
            setScreen('main'); // pasa a la pantalla principal
        } else {
            Alert.alert('Error', 'Usuario o contraseña incorrectos');
        }
    };

    // --- Lógica del Alert para las tarjetas ---
    const handleDetalles = (item) => {
        const { titulo, descripcion } = item;
        if (Platform.OS === 'web') {
            window.alert(`${titulo}\n\n${descripcion}`);
        } else {
            Alert.alert(titulo, descripcion);
        }
    };

    // --- Pantalla SPLASH ---
    const renderSplash = () => (
        <ImageBackground source={SplashBackgroundImage} style={styles.background} resizeMode='cover'>
            <View style={styles.overlay}>
                <Image source={LogoImage} style={styles.splashLogo} />
                <Text style={styles.title}>Cargando Galería...</Text>
                <ActivityIndicator size="large" color="#fff" />
            </View>
        </ImageBackground>
    );

    // --- Pantalla LOGIN ---
    const renderLogin = () => (
        <View style={styles.loginContainer}>
            <Image source={LogoImage} style={styles.loginLogo} />
            <Text style={styles.loginTitle}>Iniciar Sesión</Text>

            <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                value={contrasena}
                onChangeText={setContrasena}
            />

            <Button title="Entrar" onPress={handleLogin} color="#7a42f4" />
        </View>
    );

    // --- Pantalla PRINCIPAL ---
    const renderMain = () => (
        <View style={styles.mainContainer}>
            <Text style={styles.mainTitle}>Galería de Imágenes</Text>
            <ScrollView style={styles.scrollArea} contentContainerStyle={styles.scrollContent}>
                {lugares.map((item) => (
                    <View key={item.id} style={styles.card}>
                        <Image source={item.source} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.titulo}</Text>
                        <Button title="Más detalles" onPress={() => handleDetalles(item)} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );

    // --- Render principal ---
    switch (screen) {
        case 'splash':
            return renderSplash();
        case 'login':
            return renderLogin();
        case 'main':
            return renderMain();
        default:
            return renderSplash();
    }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // --- Splash ---
    background: { width, height, flex: 1 },
    overlay: {
        flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center', alignItems: 'center', padding: 20,
    },
    splashLogo: { width: 150, height: 150, resizeMode: 'contain', marginBottom: 20 },
    title: { color: '#fff', fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },

    // --- Login ---
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f3e8ff',
        padding: 20,
    },
    loginLogo: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    loginTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#4b0082',
        marginBottom: 30,
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
    },

    // --- Main (Galería) ---
    mainContainer: { flex: 1, paddingTop: 50, backgroundColor: '#f5f5f5' },
    mainTitle: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
    scrollArea: { flex: 1 },
    scrollContent: { alignItems: 'center', paddingBottom: 20 },
    card: {
        width: width * 0.9,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginBottom: 20,
        padding: 15,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        resizeMode: 'cover',
        marginBottom: 10,
    },
    cardTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
});
