import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // para los íconos

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* HEADER ROJO */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require("../assets/LogoCardenal.png")} // tu logo aquí
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>CardenalTrak</Text>
        </View>
        <Text style={styles.dashboardTitle}>Dashboard Principal</Text>
      </View>

      {/* CONTENIDO PRINCIPAL */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Tarjeta 1 */}
        <View style={styles.card}>
          <Ionicons name="alert-circle-outline" size={30} color="#B71C1C" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Reportar incidencia</Text>
            <Text style={styles.cardSubtitle}>
              Registra nuevos problemas de seguridad
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#B71C1C" />
        </View>

        {/* Tarjeta 2 */}
        <View style={styles.card}>
          <Ionicons name="document-text-outline" size={30} color="#B71C1C" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Mis reportes</Text>
            <Text style={styles.cardSubtitle}>
              Consulta el estado de tus reportes
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#B71C1C" />
        </View>

        {/* Tarjeta 3 */}
        <View style={styles.card}>
          <Ionicons name="search-outline" size={30} color="#B71C1C" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Seguimiento</Text>
            <Text style={styles.cardSubtitle}>
              Monitorea incidentes en tu zona
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#B71C1C" />
        </View>

        {/* Tarjeta 4 */}
        <View style={styles.card}>
          <Ionicons name="notifications-outline" size={30} color="#B71C1C" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Notificaciones</Text>
            <Text style={styles.cardSubtitle}>
              Actualizaciones y alertas importantes
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#B71C1C" />
        </View>

        {/* Tarjeta 5 */}
        <View style={styles.card}>
          <Ionicons name="person-outline" size={30} color="#B71C1C" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardTitle}>Perfil</Text>
            <Text style={styles.cardSubtitle}>
              Gestiona tu información personal
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color="#B71C1C" />
        </View>

        {/* Gráfica simulada */}
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Estadísticas recientes</Text>
          <View style={styles.chart}>
            <View style={[styles.bar, { height: 60 }]} />
            <View style={[styles.bar, { height: 40 }]} />
            <View style={[styles.bar, { height: 80 }]} />
            <View style={[styles.bar, { height: 30 }]} />
            <View style={[styles.bar, { height: 90 }]} />
          </View>
        </View>
      </ScrollView>

      {/* BARRA INFERIOR */}
      <View style={styles.bottomNav}>
        <Ionicons name="home" size={24} color="#B71C1C" />
        <Ionicons name="document-text-outline" size={24} color="#616161" />
        <Ionicons name="search-outline" size={24} color="#616161" />
        <Ionicons name="notifications-outline" size={24} color="#616161" />
        <Ionicons name="person-outline" size={24} color="#616161" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5" },

  header: {
    backgroundColor: "#B71C1C",
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  headerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  dashboardTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },

  content: {
    padding: 15,
    paddingBottom: 80,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginBottom: 12,
    elevation: 2,
  },
  cardTextContainer: { flex: 1, marginLeft: 10 },
  cardTitle: { fontWeight: "bold", fontSize: 15 },
  cardSubtitle: { fontSize: 12, color: "#666" },

  chartContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  chartTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 15,
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  bar: {
    width: 20,
    backgroundColor: "#B71C1C",
    borderRadius: 5,
  },

  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
});
