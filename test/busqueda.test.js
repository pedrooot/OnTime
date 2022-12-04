const Busqueda = require("../src/Busqueda.js").Busqueda;
const dijkstra = require("../src/Busqueda.js").dijkstra;
const contar_elementos = require("../src/Busqueda.js").contar_elementos;
const InfoTramo = require("../src/InfoTramo.js");

describe("Check valid form of tramos",() => {
        it("Basic constructor operations",() => {
        const new_busqueda1 = new Busqueda('a','c');
        expect(new_busqueda1.origen).toBe('a');
        expect(new_busqueda1.destino).toBe('c');
        const new_busqueda2 = new Busqueda('b','d');
        expect(new_busqueda2.origen).toBe('b');
        expect(new_busqueda2.destino).toBe('d');
        const new_busqueda3 = new Busqueda('c','d');
        expect(new_busqueda3.origen).toBe('c');
        expect(new_busqueda3.destino).toBe('d');
    })
    it("Dijkstra algorithm use",() => {
        const salida = dijkstra(InfoTramo);
        expect(contar_elementos(salida.path)).toBeLessThanOrEqual(contar_elementos(InfoTramo));
        expect(salida.distance).toBeGreaterThan(0);
        expect(salida.path[0]).toBe('start');
        expect(salida.path[contar_elementos(salida.path)-1]).toBe('finish');

    })



});
