// Objeto persona
const persona = {
  nombre: "Iván Isay",
  edad: 37,
  direccion: {
    ciudad: "Qro",
    pais: "México"
  }
  
};
// Desestructuración
const { nombre, edad, direccion: {ciudad, pais}} = persona;

// Mensaje
console.log("Me llamo " + nombre + ", tengo " + edad + " años y vivo en " + ciudad + ", " + pais);
