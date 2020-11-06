module.exports = class Lista {    
    #elementos;

    constructor() {
        this.#elementos = [];
    }

    count() {
        return this.#elementos.length;
    }

    find() {
        if (this.#elementos.length == 1) {
            return this.#elementos[0].valor;
        }
        return NaN;
    }

    add(clave, valor) {
        this.#elementos.push({clave, valor});
    }

    upd(clave, valor) {
        for (const item in this.#elementos) {
            if (item.clave == clave) {
                item.valor = valor;
                return;
            }
        }
    }

    del(clave) {
        var lst = this.#elementos;
        for (i = 0; i < lst.length; i++) {
            if (lst[i].clave == clave) {
                lst.splice(i, 1);
                return;
            }
        }
    }


    getSort(clave, valor) {
        return this.#elementos.sort(compare("clave"));
    }

    compare(prop) {
        return function(a,b) {
            if (a[prop] < b[prop])
                return -1;
            if (a[prop] > b[prop])
                return 1;
            return 0;
        };
    }   

};

