import { Text, StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';

const BackgroundImage = require("../assets/one-piece-2-64ece20f09f40.avif");

export default function Barra() {
  return (
    <ImageBackground
      source={BackgroundImage}
      style={{ flex: 1, width: '100%', height: '100%' }}
      resizeMode="contain"
    >
      <View style={styles.container}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.title}>El espacio y sus misterios</Text>

          <Text style={styles.item}>Barra de desplazamiento vertical</Text>

          <Text style={styles.textRed}>
            El espacio exterior es un entorno inmenso que comienza donde termina la atmósfera terrestre. Es un vacío casi perfecto, sin aire ni oxígeno, donde la materia está distribuida en forma de gas, polvo cósmico, radiación y cuerpos celestes. A pesar de lo inexplorado que aún es, el ser humano ha logrado grandes avances para comprenderlo, desde los primeros telescopios hasta los viajes espaciales y los satélites que hoy orbitan la Tierra.
            
            Explorar el espacio no solo alimenta la curiosidad científica, sino que también ayuda a desarrollar tecnologías útiles en la Tierra, como los sistemas GPS, las telecomunicaciones y los avances médicos derivados de la investigación espacial.
          </Text>

          <Text style={styles.subtitleRed}>Las galaxias</Text>
          <Text style={styles.text}>
            Las galaxias son enormes agrupaciones de estrellas, gas, polvo y materia oscura unidas por la gravedad. Cada galaxia puede contener miles de millones de estrellas y sistemas planetarios. La Vía Láctea, donde vivimos, es solo una entre los trillones que existen en el universo observable.
            Las galaxias se clasifican en tres tipos principales:

            Espirales: como la Vía Láctea, con brazos que giran alrededor de un núcleo central.

            Elípticas: tienen forma ovalada y suelen contener estrellas más viejas.

            Irregulares: no tienen una forma definida y a menudo se forman por colisiones entre otras galaxias.
            
            El estudio de las galaxias permite a los astrónomos entender cómo evoluciona el universo con el paso del tiempo.
          </Text>

          <Text style={styles.subtitleRed}>Los agujeros negros</Text>
          <Text style={styles.text}>
            Los agujeros negros son objetos tan densos que ni siquiera la luz puede escapar de su atracción gravitacional. Se forman cuando una estrella masiva colapsa bajo su propio peso al final de su vida.
            Existen tres tipos principales:
            Agujeros negros estelares, formados por el colapso de una estrella.{'\n'}
            
            Agujeros negros supermasivos, que se encuentran en el centro de muchas galaxias.

            Agujeros negros primordiales, que podrían haberse formado en los primeros instantes del universo.

            Su estudio es clave para comprender los límites de la física y la estructura del espacio-tiempo.
          </Text>

          <Text style={styles.subtitleRed}>Las estrellas</Text>
          <Text style={styles.text}>
            Las estrellas son enormes esferas de gas caliente, principalmente hidrógeno y helio, que emiten luz y calor debido a las reacciones nucleares en su núcleo. Su vida puede durar miles de millones de años, y al morir, algunas se convierten en supernovas, enanas blancas, neutrones o agujeros negros.
            El Sol es una estrella de tipo mediano, pero resulta esencial para la vida en la Tierra. Su energía regula el clima, las estaciones y permite la existencia de la fotosíntesis, base de toda la cadena alimenticia.
          </Text>

          <Text style={styles.subtitleRed}>Los planetas</Text>
          <Text style={styles.text}>
            Los planetas son cuerpos que orbitan alrededor de una estrella. En nuestro sistema solar existen ocho planetas: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno. Cada uno tiene características únicas, desde las altas temperaturas de Venus hasta los anillos majestuosos de Saturno.
            
            La búsqueda de planetas fuera del sistema solar, llamados exoplanetas, ha permitido descubrir miles de mundos que podrían tener condiciones similares a la Tierra, lo que abre la posibilidad de vida en otros lugares del cosmos.
          </Text>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent', // ✅ para no tapar el fondo
  },
  scrollArea: {
    flex: 1,
    backgroundColor: 'transparent', // ✅ para mantener la imagen visible
  },
  item: {
    backgroundColor: '#FF0000',
    color: '#FFF',
    padding: 12,
    marginVertical: 8,
    borderRadius: 10,
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000ff',
    textAlign: 'center',
  },
  subtitleRed: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: '95%', // ✅ corregí "witdh"
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 24,
    textAlign: 'justify',
    padding: 10,
    marginBottom: 15,
  },
  textRed: {
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#FF0000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
});
