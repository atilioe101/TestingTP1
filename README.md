# Ejemplo de TDD en NodeJS

Este repositorio presenta la implementación de una lista de pares clave:valor implementada en Javacript como ejemplo de la aplicación de la metogología de Test Drivement Development.

## Requisitos

1. Almacenar pares clave:valor.
2. Las claves deben ser únicas.
3. Las claves son cadenas de texto.
4. Se debe poder recuperar un valor a partir de una clave.
5. Se debe poder actualizar el valor asociado a una clave.
6. Se debe poder recuperar la cantidad de elementos almacenados en la lista.
7. Se debe poder recuperar una lista ordenada con las claves almacenadas en la lista.


## Test para verificar que se cumpla con los requisitos

 * En una lista vacía hay cero elementos. [x]
 * Cuando se agrega un elemento a una lista vacía hay un elemento. [x]
 * En una lista vacía no se encuentra ninguna clave. [x]
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave. [x]
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente. [x]
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada. [x]
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada. [x]
 * Cuando se agrega un elemento al final la lista de claves esta ordenada. [x]
 * En una lista que no está vacia se debe poder borrar una pareja a partir de la clave. [x]


