/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
*/

/*  1. Añadimos los caracteres de la palabra a un  array con split()
    2. convertimos el array de caracteres a string con un espacio en blanco entre cada caracter con join()
    3. Pasamos a mayusculas todos los caracteres con toLocaleUpperCase()*/

/*  He elegido este nombre porque dice explicitamente lo que hace la función*/
const separarCaracteresYAMayusculas = (palabra) => {
    return palabra.split("").join(" ").toLocaleUpperCase();
}

console.log(separarCaracteresYAMayusculas("Ana"));

/* Ejercicio 2 Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3. */

/*  1. Añadimos los caracteres de la palabra a un array con split()
    2. Contamos la cantidad de elementos tiene el array*/

/* He elegido este nombre porque cuenta la cantidad de palabras tiene el string pasado como parametro*/
const numeroPalabras = (nombre) => {
    return nombre.split(" ").length;
}

console.log(numeroPalabras("Antonio Alberto Jesús"));