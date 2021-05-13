// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz = [];
  for(var x in objeto){
    var y = [];
    y.push(x, objeto[x]);
    matriz.push(y);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objeto = {};
  for (let i = 0; i < string.length; i++) {
    let caracter = string[i];
    let cont = 0;
    for (let a = 0; a < string.length; a++) {
      if (caracter === string[a]) {
        cont++;
      }
    }
    objeto[string[i]] = cont;
    cont = 0;
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let cadena = Array.from(s);
  let upper = "";
  let lower = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === cadena[i].toUpperCase()) {
      upper += cadena[i];
    } else {
      lower += cadena[i];
    }
  }
  return upper += lower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  let palabras = str.split(" ");
  let frase = "";
  for (let i = 0; i < palabras.length; i++) {
    frase += palabras[i].split('').reverse().join('') + " ";
  }
  return frase.trim();
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let capicua = "";
  let palabra = numero.toString();
  capicua = palabra.split('').reverse().join('');
  if (palabra === capicua) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let eliminaA = cadena.replace('a', '');
  let eliminaB = eliminaA.replace('b', '');
  let nuevaCadena = eliminaB.replace('c', '');
  return nuevaCadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let arregloLen = [];
  let arreglo = [];
  for (let i = 0; i < arr.length; i++) {
    len = arr[i].length;
    arregloLen.push(len);
  }
  arregloLen.sort();
  while (arregloLen.length > 0) {
    let longitud = arregloLen[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === longitud && arreglo.indexOf(arr[i] === -1)) {
        arreglo.push(arr[i]);
        arregloLen.shift();
      }

    }
  }
  return arreglo;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let setA = new Set(arreglo1);
  let setB = new Set(arreglo2);
  let intersection = new Set([...setA].filter(x => setB.has(x)));
  return Array.from(intersection);
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

