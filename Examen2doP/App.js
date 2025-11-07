import React, { useState, useEffect } from 'react';
import {Text,StyleSheet,View, Dimensions,ScrollView,Alert, Button, Platform,} from 'react-native';

const BackgroundImage = require('./assets/images.png');

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Helper para mostrar alertas en web y nativo
  const showAlert = (title, message) => {
    if (Platform && Platform.OS === 'web' && typeof window !== 'undefined') {
      window.alert(`${title}\n\n${message}`);
    } else {
      Alert.alert(title, message);
    }
  };

  const menu = [
    {
      id: 'entradas',
      title: 'Entradas',
      items: [
        { id: 'e1', name: 'Bruschetta', desc: 'Pan tostado con tomate y albahaca', price: 85 },
        { id: 'e2', name: 'Sopa del día', desc: 'Sopa casera con vegetales de temporada', price: 70 },
      ],
    },
    {
      id: 'principales',
      title: 'Platos Principales',
      items: [
        { id: 'p1', name: 'Pollo a la parrilla', desc: 'Pechuga marinada, acompañada de papas', price: 145 },
        { id: 'p2', name: 'Pasta al pesto', desc: 'Penne con salsa pesto casera', price: 130 },
      ],
    },
    {
      id: 'postres',
      title: 'Postres',
      items: [
        { id: 'd1', name: 'Tiramisú', desc: 'Clásico italiano con café', price: 75 },
        { id: 'd2', name: 'Helado artesanal', desc: 'Surtido de sabores', price: 55 },
      ],
    },
  ];
    if (showSplash) {
      return (
        <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
          <View style={styles.splashOverlay}>
            <Text style={styles.splashTitle}>Restaurante El Buen Sabor</Text>
            <Text style={styles.splashSub}>Cargando menú...</Text>
          </View>
        </ImageBackground>
      );
    }

    return (
      <ImageBackground source={BackgroundImage} style={styles.background} resizeMode="cover">
        <SafeAreaView style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.restaurantName}>Restaurante El Buen Sabor</Text>
            <Text style={styles.subtitle}>Sabores caseros y recetas tradicionales</Text>
          </View>

          <ScrollView contentContainerStyle={styles.scrollContent}>
            {menu.map((category) => (
              <View key={category.id} style={styles.category}>
                <Text style={styles.categoryTitle}>{category.title}</Text>
                {category.items.map((dish) => (
                  <View key={dish.id} style={styles.dish}>
                    <View style={styles.dishText}>
                      <Text style={styles.dishName}>{dish.name}</Text>
                      <Text style={styles.dishDesc}>{dish.desc}</Text>
                    </View>
                    <View style={styles.dishRight}>
                      <Text style={styles.dishPrice}>${dish.price}</Text>
                      <View style={styles.orderBtn}>
                        <Button
                          title="Ordenar"
                          color="#004B8D"
                          onPress={() => showAlert('Confirmar orden', `${dish.name} — $${dish.price}`)}
                        />
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({

  background: {
    width: width,
    height: height,
  },
    splashOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.45)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    splashTitle: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    splashSub: {
      color: '#fff',
    },
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(255,255,255,0.85)',
    },
    header: {
      padding: 16,
      borderBottomWidth: 1,
      borderColor: '#eee',
      backgroundColor: 'transparent',
    },
    restaurantName: {
      fontSize: 22,
      fontWeight: '700',
      color: '#004B8D',
    },
    subtitle: {
      fontSize: 14,
      color: '#555',
      marginTop: 6,
    },
    scrollContent: {
      padding: 16,
      paddingBottom: 40,
    },
    category: {
      marginBottom: 18,
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#222',
      marginBottom: 8,
    },
    dish: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 12,
      marginBottom: 8,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2,
    },
    dishText: {
      flex: 1,
    },
    dishName: {
      fontSize: 16,
      fontWeight: '600',
      color: '#111',
    },
    dishDesc: {
      fontSize: 13,
      color: '#666',
      marginTop: 4,
    },
    dishRight: {
      alignItems: 'flex-end',
      marginLeft: 12,
    },
    dishPrice: {
      fontSize: 15,
      fontWeight: '700',
      color: '#222',
      marginBottom: 6,
    },
    orderBtn: {
      width: 100,
    },
});
