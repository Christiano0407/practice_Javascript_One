# practice_Javascript_One

Course Javascript Practice. Challenges Vanilla Javascript.

## Course Platzi

- [Platzi](https://platzi.com/home)

## Developer Tools

> MDN Mozilla Developer

- [MDN](https://developer.mozilla.org/es/)

## TEST Javascript

> ¿Qué es una variable y para qué sirve?

- ¿Qué es una variable y para qué sirve?

  Representación de un valor gurdado e designado en memoria. Usamos paralabras reservadas en Javascript (Var, Let y Const).
  Podemos declarar e inicializar una variable (palabras reservadas), y así, le decimos al navegador e javascript que guarde un espacio para ella en memoria.
  A partir de ECMAScript 6 (ES6), nacen: Let y Const (Scope). Dependiendo del Scope, es su accesibilidad.

> ¿Cuál es la diferencia entre declarar e inicializar una variable?

- ¿Cuál es la diferencia entre declarar e inicializar una variable?

   Al declarar una Variable, le decimos al navegador, y Javascript, que guarde un espacio en memoria (variable). Al ser declarada, le otorgamos un valor, un tipo de dato o la información que va a almacenar.

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
- Mayor de Edad: "Number"
- Dinero Ahorrado: "Number"
- Deudas; "Number".

> (3) Traduce a código JavaScript las variables del ejemplo anterior.

```javascript
 const name = "Chris";
 const lastName = "Velázquez";
 let userNamePlatzi = "Chris Velázquez";
 let age = 25;
 let email = "placebo@gmail";
 let Adult = 35;
 let saveMoney = 10000;
 let debtMoney = 10000;
```

> Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

```javascript
- let nameComplete = name + lastName;
- let realMoney = saveMoney - debtMoney;
```

> Funciones Javascript

- Funciones

> ¿Qué es una función?

- ¿Qué es una función?
Un conjunto de sentencias que llevan acabo acciones.Utilizamos los valores o parámetros ejecutados en las variables.

Tenemos dos tipos de funciones: 1) Declarativa y 2) Expresión o Anónimas.

1) Declarativa:
  function myFunction() {
    return 3;
  }

2) Expresión:
const myFunction = function() {
  return a + b
}
return = Retorna a un valor.
return y Function => Son Palabras reservadas.

- ¿Cuándo me sirve usar una función en mi código?
Para ejecutar pasos o cálculos para poder validar un resultado.

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?
Las Funciones necesitan Parámetros: Los parámetros son los valores que esperamos (variables declaradas y solicitadas en la función), para poder ejecutar algo.

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
```

> CONDICIONALES

- Condicionales
- ¿Qué es un condicional?

  Son reglas que nos permiten ejecutar e validar ciertas reglas o acciones (cierto o falso / True or False).
  if(true) {
    console.log("Hola");
  }
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

function studentSuscription() {

  if(suscription === "free") {
    console.log("Solo puedes tomar los cursos gratis");
  
  } else if(suscription === "basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
  
  } else if (suscription === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
  
  } else if(suscription === "Expert Plus") {
     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
  
  } else {
    console.log(error);
  }

};

studentSuscription();
```

> CICLOS / LOOP

- ¿Qué es un ciclo?
  Es un bucle que se repite hasta que se cumpla una condición.

- ¿Qué tipos de ciclos existen en JavaScript?
  A) Ciclo FOR B) Do While C) While

- ¿Qué es un ciclo infinito y por qué es un problema?
  Puede fallar nuestro código e relentizar nuestra computadora.
  El ciclo Infinito: Es cuando nuestra condición no se cumple, y no termina el proceso (sigue y sigue...infinito).

- ¿Puedo mezclar ciclos y condicionales?
 Sí. Podemos hacer un ciclo e una condicional hasta que se cumpla.

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
