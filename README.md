# practice_Javascript_One

Course Javascript Practice. Challenges Vanilla Javascript.

## Course Platzi

- [Platzi](https://platzi.com/home)

## Developer Tools

> MDN Mozilla Developer

- [MDN](https://developer.mozilla.org/es/)
- [FreeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)
- [Javascript_Info](https://javascript.info/)
- [30_second_of_code](https://www.30secondsofcode.org/js/p/1)
- [Platzi_Javascript_Hero](https://jshero.platzi.com/challenges)

> Questions and Answers

- [StackOverflow](https://es.stackoverflow.com/)
- [YouCode](https://you.com/code)

> Readme Md

- [editor.md](https://pandao.github.io/editor.md/en.html)

> The ReadME Project: Built for you!

- [ReadME Project](https://github.blog/2022-09-21-the-readme-project-built-for-you/)

> CDN Js

- [CDN](https://cdnjs.com/)

## TEST Javascript

> ¿Qué es una variable y para qué sirve?

- ¿Qué es una variable y para qué sirve?

  Representación de un valor gurdado e designado en memoria. Usamos paralabras reservadas en Javascript (Var, Let y Const).
  Podemos declarar e inicializar una variable (palabras reservadas), y así, le decimos al navegador e javascript que guarde un espacio para ella en memoria.
  A partir de ECMAScript 6 (ES6), nacen: Let y Const (Scope). Dependiendo del Scope, es su accesibilidad.

> ¿Cuál es la diferencia entre declarar e inicializar una variable?

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

   Al declarar una Variable, le decimos al navegador y Javascript, que guarde un espacio en memoria (variable). Al ser declarada, le otorgamos un valor, un tipo de dato o la información que va a almacenar.

> ¿Cuál es la diferencia entre sumar números y concatenar strings?

- ¿Cuál es la diferencia entre sumar números y concatenar strings?

  Concatenar "Strings", es unir elementos, sumar dos elementos o información ( cadena de texto). Sumar números, es realizar la suma entre dos elementos (operación matemática).
  Tipos de datos (Numbers).
  String (Cadena de texto).

> ¿Cuál operador me permite sumar o concatenar?

- ¿Cuál operador me permite sumar o concatenar?

  El operador es: "+". Después, en un nivel más avanzado podemos utilizar "$", para concatenar.

> (2) Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: "String"
- Apellido: "String"
- Nombre de Usuario de Platzi: "String"
- Edad: "Number"
- Correo Electrónico: "String"
- Mayor de Edad: "Number" / "boolean"
- Dinero Ahorrado: "Number"
- Deudas; "Number".

> (3) Traduce a código JavaScript las variables del ejemplo anterior.

```javascript
 const name = "Chris";
 const lastName = "Velázquez";
 let userNamePlatzi = "@ChrisVelázquez";
 let age = 25;
 let email = "test@gmail";
 let isAdult = 29;
 let saveMoney = 10000;
 let debtMoney = 10000;
```

> Images Scope and Variable
![](https://pbs.twimg.com/media/EeVw-DOXgAAMtKk.jpg);

> Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```javascript
 let nameComplete = name + " " + lastName;
 let nameComplete = `${name} ${lastName}`;
 let realMoney = saveMoney - debtMoney;
```

> Funciones Javascript

- Funciones

> ¿Qué es una función?

- ¿Qué es una función?
Un conjunto de sentencias que llevan acabo acciones.Utilizamos los valores o parámetros ejecutados en las variables.

Tenemos dos tipos de funciones: 1) Declarativa y 2) Expresión o Anónimas.

1) Declarativa:

```javascript
  function myFunction() {
    return 3;
  }
```

1) Expresión:

```javascript
const myFunction = function() {
  return a + b
}
```

return = Retorna a un valor.
return y Function => Son Palabras reservadas.

- ¿Cuándo me sirve usar una función en mi código?

Para ejecutar pasos o cálculos para  validar un resultado. También, nos sirve cuando tenemos variables u bloques de código muy parecidos
(con cambios en parámetros y argumentos).

Para ordenar y mejorar la legibilidad de nuestro código.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

Las Funciones necesitan Parámetros: Los parámetros son los valores que esperamos (variables declaradas y solicitadas en la función), para poder ejecutar algo.

Las Funciones reciben Parámetros cuando las ejecutamos.Envíamos Argumentos cuando la ejecutamos.

> Image Parameters and Arguments

![](https://preview.redd.it/bxkz9iko0u681.png?auto=webp&s=dfcf8222d495f9c71bc5b5fb17468b33e7cba0e9)

![](https://sites.google.com/site/algebraghc/_/rsrc/1444241231557/primer-parcial/importancia-de-los-signos-de-agrupacion/signos%20de%20agrupaci%C3%B3n.png?height=154&width=200)

```javascript
function myFunction(num1, num2) {
   let result =  num1 + num2;
   return result;
}
myFunction(5, 10);
```

num1 y num2 = parámetros;
resultado Final => 15;

Argumentos: Las Funciones nos piden declarar nuestras variables que son nuestros argumentos.

> Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```javascript
const completeName = name + lastName;

function person(name, lastname, nickname) {
 retun console.log(`Soy ${name} me apellido ${lastname} pero completo es ${completeName} pero, prefiero: ${nickname}`);
}

person("Juan David", "Castro Gallego", "Juandc");
console.log(person);
```

> CONDICIONALES

- Condicionales
- ¿Qué es un condicional?

  Son reglas que nos permiten ejecutar un bloque de código e validar ciertas reglas o acciones (cierto o falso / True or False).

```javascript
  if(true) {
    console.log("Hola");
  }
```

  resultado => Hola.

- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

  Tenemos:
  - if.else / Switch
  - condition ? true : false;
  ( || => O / && => Y / !-- => no es Igual / === Estrictamente Igual / >= / <= / length )

- ¿Puedo combinar funciones y condicionales?
- Sí. Puedes ejecutar condicionales dentro de una función.

> Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

## Javascript

```javascript
const suscription = "basic";

// === One ===
function studentSuscription() {

  if(suscription === "free") {
    console.log("Solo puedes tomar los cursos gratis");
  
  } else if(suscription === "basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  
  } else if (suscription === "expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  
  } else if(suscription === "expert Plus") {
     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  
  } else {
    console.log(error);
  }

};

studentSuscription();
```

```javascript
// === Two ===

function studentSuscription(suscription) {

  if(suscription === "free") {
    console.log("Solo puedes tomar los cursos gratis");
    return
  }
  if(suscription === "basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return
  }
  if (suscription === "expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    return
  }
  if(suscription === "expert Plus") {
     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
     return
  }
     console.log("Este tipo de Suscripción no existe!");
};

studentSuscription("free");
studentSuscription("basic");
// === Return ===> Para la función (No entran todas, va una por una) ===
```

```javascript
// === Three New === 
const studentSuscription = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
  expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
  expertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}
studentSuscription.free;
studentSuscription[`free`];

const exampleSuscription = "free";
studentSuscription[exampleSuscription]; //===> "free"

function studentSuscriptionType(suscription) {
  if(studentSuscription[suscription]) {
    console.log(studentSuscription [suscription])
    return
  }
    console.warn("Ese tipo de suscripción no existe");
}

```

> CICLOS / LOOP

- ¿Qué es un ciclo?

  Es un bucle que se repite hasta que se cumpla o deje de ser verdad una condición. Una tarea se puede repetir sin que tengas que hacerlo de manera manual.

- ¿Qué tipos de ciclos existen en JavaScript?

  A) Ciclo For (Pide una Variable, Una validación y un incremento o decremento)
  
  B) do While => (Primero ejecuta el código y luego realiza la validación)
  
  C) While =>  (Hace la validacón antes de ejecutar la primera vez, el bloque de código).

  - index => i

- ¿Qué es un ciclo infinito y por qué es un problema?

  Puede fallar nuestro código e relentizar nuestra computadora.
  El ciclo Infinito: Es cuando nuestra condición no se cumple, y no termina el proceso (sigue y sigue...infinito).Termina toteando (dañando).Además, el navegador ya no puede con tanta ejecución de ese bloque de código.

- ¿Puedo mezclar ciclos y condicionales?
  
  Sí. Podemos hacer un ciclo e una condicional hasta que se cumpla; Aunque, los ciclos son una especie de condicionales, nada nos impide agregar más condicionales dentro de un ciclo.

> Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```javascript
const estudiantes = ["Luisa", "Alma", "Natasha", "Natalia"];

function saludarEstudiante(estudiante) {
   console.log(`Hola, ${estudiante}`);
}

for(let i = 0; i < estudiantes.length; i++) {
  saludarEstudiante(estudiantes[i]);
}

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i = 0;

while(i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

let i = 10;

while(i >= 2) {
  i--;
  console.log(`El valor de i es: ${i}`);
}

```

> Image Ciclo

![](https://static.platzi.com/media/user_upload/do-while-dec64482-e844-46d2-a14b-ac506106d094.jpg);

> Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

```javascript
let num1 = 2;
let num2 = 2;

const results = {
  q1: `Cuánto es ${num1} + ${num2} es igual a 4 ?`
}

function result() {
  let user = prompt(results.q1);

  if(user === results) {
    console.log(`Felicidades, respondiste correctamente`);
  } else {
    console.log(`Lo siento, vuelve a resolverlo`);
  }
}

result();

```

> Otra Forma:

```javascript
while(response !== 4) {
  let question = prompt(`¿ How Many Is 2 + 2 ?`);
  response = question;
}

```

> Responde las siguientes preguntas: Array & Object

- ¿Qué es un Array?

 Es una estructura de Datos o lista de eleemntos (concepto de Javascript). Además, guarda valores adentro (objetos, datos, números, string).

```javascript
const array = ["Chris", "Natasha", "Alma", "Natalia"];
console.log(array);
console.log(array[0]);
```

- ¿Qué es un Objeto?

  Javascript, es un lenguaje que está diseñado en un paradigma de Objetos.Podemos llevar un Objeto físico a un Paradigma de Objetos (Propiedades).
  Es una lista de elementos; pero, cada elemento tiene un nombre clave.
  Clave (Key) y Valor (Value)

```javascript
  const myCar = {
    marca: "Audi",
    modelo: "Deportivo",
    annio: 2020;
  }

  myCar();
  console.log(myCar.modelo);

  const team = {
    nombre: "EquipoA",
    annio: 1900,
    estadio: "Estadio Plus A"
    nuevoJugador: function(){
      console.log(`${this.nombre} y su estadio es: ${this.estadio}`);
    }
  }

  team.nuevoJugador();

  // === This => Hace referencia al Objeto (team) ===

```

> Objects: Función constructora (parámetros y propiedades)
> Función Constructora => Class (POO: Programación Orientada a Objetos)

```javascript
 function auto(marca, modelo, annio) {
   this.marca = marca;
   this.modelo = modelo;
   this.annio = annio;
 }
// === Constructor
const nuevoAuto = new auto("Tesla", "Modelo 3", 2020);
console.log(nuevoAuto);

```

- ¿Cuándo es mejor usar objetos o arrays?

  Utilizamos Objetos en el momento que el conjunto de elementos es grande; Además, tiene distintos valores.
  "Array", cuando lo que haremos en un elemento es el mismo que todos los demás(La regla se puede incumplir).

- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

  Sí. Los "Array", puede guardar estructura de datos; además, objetos. Mientras que, los "Objects", pueden guardar los "array" entre sus propiedades.

> Method

![](https://i.ibb.co/Sdv3Qkc/image.png);

> Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```javascript
const videoGames = (games) => {
  console.log(games[0]);
}

videoGames(["Fifa", "Madden", "Crash", "Mario"]);
```

> Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```javascript
function getArray(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

getArray(["User", "UserTwo", "UserThree"]);

```

> Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

> Object.values() ==> MDN

- [object_values](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values)

```javascript
const people = {
  name: "Pammela",
  age: 30,
  lastName: "Velázquez"
}

// === 1)
function informationPeople(information) {
 for(let key in information) {
  console.log(information[key]);
 }
}

informationPeople(people);

// === 2)

function informationPeople(info) {
  const arr = Object.values(info);
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

informationPeople(people);

```

## GitHub Response Test Platzi

- [Platzi_Test](https://github.com/platzi/curso-js-practico/tree/variables);

## MIT LICENSE

MIT License

Copyright (c) 2022 Chris_Velázquez04

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
