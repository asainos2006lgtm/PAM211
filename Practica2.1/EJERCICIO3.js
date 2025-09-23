
const personas = [
  { nombre: "Luis", edad: 22 },
  { nombre: "Ana", edad: 35 },
  { nombre: "Maria", edad: 28 },
  
];

//Busca una persona llamada Luis
const personaLuis = personas.find(p => p.nombre === "Luis");
console.log("Persona encontrada:", personaLuis);

//Imprime nombre y edad con forEach
personas.forEach(p => {
  console.log(p.nombre + " tiene " + p.edad + " años ");
});

//Suma todas las edades con reduce
const totalEdades = personas.reduce((suma, p) => suma + p.edad, 0);
console.log("Suma total de edades:", totalEdades);
