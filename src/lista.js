module.exports = class Lista {    
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {       
        return this.#elementos.length;
    }

    find(clave) {
        var index = this.#elementos.findIndex((o => o.clave == clave));        
        if (index < 0) return NaN; 
        return this.#elementos[index];       
    }

    getValue(clave) {
        var item = this.find(clave);  
        if (item === NaN) return NaN;  
        return item.valor;
    }

    getIndex(clave) {
        return this.#elementos.findIndex((o => o.clave == clave));         
    }

    add(clave, valor) { 
        if (this.upd(clave, valor)) return false;        
        this.#elementos.push({'clave': clave,'valor': valor});        
        return true;
    }
   

    upd(clave, valor) {
        var index = this.getIndex(clave);
        if (index < 0) return false;  
        this.#elementos[index] = {'clave': clave,'valor': valor};               
        return true;
    }

    del(clave) {
        var index = this.getIndex(clave);
        if (index < 0) return false;  
        this.#elementos.splice(index, 1);
        return true;
    }   
    
    getKeys() {
        var keys=[];
        for(var item of this.#elementos){
            keys.push(item.clave); 
        }       
        return keys;  
    }

};

