// ej 1
// haz un bucle que logee los numeros del 4 al 9 inclusive
// Utilizad el bucle for

for (var i = 4; i < 10; i ++){
 console.log(i);
 
}

// ej 2
// haz un bucle que logee los impares del 3 al 17 inclusive
// Utilizad el bucle for


for(var i = 3; i < 18; i++){
  if ( i % 2 === 1){
    console.log(i);
    
  }
}

// ej 3
// Logeea la tabla del 7;
// Utilizad el bucle for

for(var i = 0; i < 11; i++){
  var multiplicación = 7 * i;
  console.log(multiplicación);
}


let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]

// ej 4
// crea un array con la gente mayor de 25 años.
// y muestralo por consola.
// Sin utilizar el metodo filter de los arrays
// Utilizad el bucle for of

let mayor = [];

for (let i of gente){
  if (i.edad > 25){
    mayor.push(i);
  }
}
console.log(mayor);
// ej 5
// crea un array con la gente que empieza por J
// Sin utilizar el metodo filter de los arrays
// Utilizad el bucle for of
// y muestralo por consola.

let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]

let letra = [];

for(let i of gente){
  if(i.nombre[0] == "J"){
    letra.push(i); 
  }
}
console.log(letra);
// ej 6
// crea un array con la gente que su nombre tiene 4 letras
// utilizando el metodo filter de los arrays
// y muestralo por consola.


let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]

var i = gente.filter(function (n) {
	return n.nombre.length == 4;
});
console.log(i);

// ej 7
// crea un array con la gente que su nombre empieza por J o L
// utilizando el metodo filter de los arrays
// y muestralo por consola.

let gente = [
  {nombre:'Jamiro', edad:45},
  {nombre: 'Juan', edad: 35},
  {nombre: 'Paco', edad:34},
  {nombre: 'Pepe', edad:14},
  {nombre: 'Pilar', edad:24},
  {nombre: 'Laura', edad:24},
  {nombre: 'Jenny', edad:10},
]

var i = gente.filter(function (n) {
	return (n.nombre.charAt(0) == 'J') ||  (n.nombre.charAt(0) == 'L');
});
console.log(i);

// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS



// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];
let matriz = [
  [],
  [],
  []
];

for(var i = 0; i<3; i++) {
  for(var j=0; j<3; j++) {
      matriz[i][j] = i + '' + j
  }
}
console.log(matriz);