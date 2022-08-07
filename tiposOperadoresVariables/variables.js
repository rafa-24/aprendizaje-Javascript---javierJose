// variables javascript

// cuales son las variables que existen es javascript -> var, let, const

var dineroSemanal = 1000;

// declarar variable -> inicializar una variable

console.log(dineroSemanal);

dineroSemanal = 1000 - 200;

console.log(dineroSemanal)

var miNombre = "Rafael";

console.log(miNombre);

miNombre = "Javier Jose";

console.log(miNombre);

// realiza un programa que salude a un usuario -> Miguel

/*
1. declarar una variable que alamcene el nombre del usuario
2. declarar una variable que salude
3. utilizar el console.log() y concatenar el saludo con el usuario
*/

var usuario = " miguel";
var hola = "hola";
console.log(hola + usuario);

var usuario = " Rafael";
var Hola = " Hola ";
console.log(Hola + usuario);

// realiza un programa que alamacena la edad de un usuario y diga si el usuario es mayor o menor de edad


/*
Pseudocodigo
1. declara una variable que almacene la edad del usuario
2. almacenar en una variable utilizar una comprobacion que retorne true o false si el usuario es mayor a 18
3. mostrar en pantalla con el console.log()
*/

var edadUsuario = 20;
var esMayorEdad = (edadUsuario > 18); // true, False
console.log('Este usuario es mayor de edad? ' + esMayorEdad);

// Ejercicio: realiza un programa que calcule la potencia de cualquier numero elevado a la dos