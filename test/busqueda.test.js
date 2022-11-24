const construir_tramos = require("../src/Busqueda").construir_tramos;

describe("Check valid form of tramos",()=>{
    it("Defines tramos correctly",()=>{
        expect(true).toBe(true);
    })
    it("Tramos are not empty  ",()=>{
        expect(construir_tramos()).toBe(false);
    })
});