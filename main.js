/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
*/

/*  1. Añadimos los caracteres de la palabra a un  array con split()
    2. convertimos el array de caracteres a string con un espacio en blanco entre cada caracter con join()
    3. Pasamos a mayusculas todos los caracteres con toLocaleUpperCase()*/

/*  He elegido este nombre porque separa los caracteres de la palabra y los pone en mayusculas*/
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

/* Ejercicio 3: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase. */

/*  1. Leer tanto la frase como la letra a buscar
    2. En un bucle donde recorre toda la frase compruebas si es la letra introducida por el usuario y sumas uno si concuerdan. Nada si son diferentes
    3. Muestra la cantidad de veces que aparece la letra en pantalla*/

/*
Inicio
    Leer frase
    Leer letra
    cont = 0;
    i = 0
    Mientras i <= frase.length-1 Entonces
        si i == letra Entonces
            cont suma 1
        Fin si
    Escribir "la letra ${letra} aparece ${cont} veces]"
Fin
*/

