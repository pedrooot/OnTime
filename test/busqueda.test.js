const construir_tramos = require("../src/Busqueda").construir_tramos;
const Busqueda = require("../src/Busqueda.js").Busqueda;
describe("Check valid form of tramos",()=>{
    it("Defines tramos correctly",()=>{
        expect(true).toBe(true);
    })
    it("Basic constructor use",()=>{
        const new_busqueda1= new Busqueda('a','c');
        expect(new_busqueda1.origen).toBe('a');
        expect(new_busqueda1.destino).toBe('c');
        const new_busqueda2= new Busqueda('b','d');
        expect(new_busqueda2.origen).toBe('b');
        expect(new_busqueda2.destino).toBe('d');
        const new_busqueda3= new Busqueda('c','d');
        expect(new_busqueda3.origen).toBe('c');
        expect(new_busqueda3.destino).toBe('d');
    })

});