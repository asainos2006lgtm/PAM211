// Arreglo de productos
const productos = [
  { nombre: "Laptop", precio: 12000 },
  { nombre: "Mouse", precio: 250 },
  { nombre: "Teclado", precio: 750 },
  { nombre: "Monitor", precio: 3000 },
  
];


const caros = productos.filter(p => p.precio > 1000);


const nombres = caros.map(p => p.nombre);

console.log(nombres);
