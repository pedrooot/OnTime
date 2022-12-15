const {Busqueda, dijkstra, contar_elementos} = require('../src/busquedas');

const tramos = {
    start: {A: 50, B: 20},
    A: {C: 45, D: 27},
    B: {A: 83, D: 79},
    C: {D: 61, finish: 33},
    D: {finish: 15},
    finish: {}
  };

describe("Check valid form of tramos",() => {
    const new_busqueda1 = new Busqueda('a','c');
    const new_busqueda2 = new Busqueda('b','d');
    const new_busqueda3 = new Busqueda('c','d');
    const salida = dijkstra(tramos);

        it("Basic constructor operations",() => {
        expect(new_busqueda1.origen).toBe('a');
        expect(new_busqueda1.destino).toBe('c');
        expect(new_busqueda2.origen).toBe('b');
        expect(new_busqueda2.destino).toBe('d');
        expect(new_busqueda3.origen).toBe('c');
        expect(new_busqueda3.destino).toBe('d');
    })
    it("Dijkstra algorithm use",() => {
        expect(contar_elementos(salida.path)).toBeLessThanOrEqual(contar_elementos(tramos));
        expect(salida.distance).toBeGreaterThan(0);
        expect(salida.path[0]).toBe('start');
        expect(salida.path[contar_elementos(salida.path)-1]).toBe('finish');

    })
});
