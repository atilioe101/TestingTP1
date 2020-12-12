/**
 * En una lista vacía hay cero elementos. [x]
 * Cuando se agrega un elemento a una lista vacía hay un elemento. [x]
 * En una lista vacía no se encuentra ninguna clave. [x]
 * Cuando se agrega un elemento a una lista vacía se puede recuperar el valor a partir de la clave. [x]
 * Cuando se agrega una clave que ya está en la lista se actualiza el valor correspondiente. [x]
 * Cuando se agregan un elemento a una lista vacía la lista de claves esta ordenada. [x]
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada. [x]
 * Cuando se agrega un elemento al final la lista de claves esta ordenada. [x]
 * En una lista que no está vacia se debe poder borrar una pareja a partir de la clave. [x]
 */

const chai = require("chai");
chai.use(require("chai-sorted"));
const assert = chai.assert;
expect = chai.expect; 
const Lista = require("../src/lista.js");

describe("en una lista vacia" , function() {
    var lista = new Lista();

    it("hay cero elementos", function() {
        assert.equal(lista.count(), 0);
    })

    it("no se encuentra ninguna clave", function() {
        assert.isNaN(lista.find("clave"));
    })
})

describe("en una lista que no está vacía" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");     
    
    it("se borra una pareja a partir de la clave", function() { 
        lista.del("clave");      
        assert.isNaN(lista.find("clave"));
    })    

})

describe("cuado se agrega un elemento a una lista vacía" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");    

    it("hay un elemento", function() {
        assert.equal(lista.count(), 1);
    })  

    it("se puede recuperar el valor a partir de la clave", function() {        
        assert.equal(lista.getValue("clave"), "valor");
    })  

    it("la lista de claves está ordenada", function() {  
        var keys = lista.getKeys();        
        expect(keys.sort()).to.be.sorted();       
    })
})

describe("cuado se agrega un elemento a una lista que no está vacía" , function() {
    var lista = new Lista();
    lista.add("clave", "valor");    

    it("si la clave existe se actualiza el valor correspondiente", function() {
        lista.add("clave", "nuevo_valor");
        assert.equal(lista.getValue("clave"), "nuevo_valor");
    })  

    it("la lista de claves está ordenada", function() {
        lista.add("nueva_clave", "nuevo_valor");
        var keys = lista.getKeys();        
        expect(keys.sort()).to.be.sorted();        
    })   
    
})






