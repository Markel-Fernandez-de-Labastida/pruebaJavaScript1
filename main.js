/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
*/

/*  1. Añadimos los caracteres de la palabra a un array con split()
    2. convertimos el array de caracteres a string con un espacio en blanco entre cada caracter con join()
    3. Pasamos a mayusculas todos los caracteres con toLocaleUpperCase()*/

/*  He elegido este nombre porque dice explicitamente lo que hace la función*/
const separarCaracteresYAMayusculas = (palabra) => {
    return palabra.split("").join(" ").toLocaleUpperCase();
}

console.log(separarCaracteresYMayusculas("Ana"));