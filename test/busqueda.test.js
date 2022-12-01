const Busqueda = require("../src/Busqueda.js").Busqueda;
const dijkstra = require("../src/Busqueda.js").dijkstra;
const InfoTramo = require("../src/InfoTramo.js");

describe("Check valid form of tramos",()=>{
    it("Defines tramos correctly",()=>{
        expect(true).toBe(true);
    })
    it("Basic constructor use",()=>{
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
    it("Combinaciones disponibles",()=>{
        const grafo = construir_tramos();
        //Comprueba que el primer nodo sea el mismo que el primer elemento de InfoTramo
        expect(grafo.nodes[0]).toBe(InfoTramo[0].origen);
    })
    it("Aplicacion de la logica de negocio",()=>{
        const grafo = construir_tramos();
        const salida = dijkstra('a','b',grafo);
        expect(salida.third).toBe(10);
    })



});

// Graph {
//     nodes: [ 'a', 'b', 'c', 'd', 'e' ],
//     edges: {
//       a: { b: 300 },
//       b: { d: 214, c: 301 },
//       c: { d: 20, e: 600 },
//       d: { e: 15 },
//       e: {}
//     }
//   }
//   ////Resultado de la lógica de negocio
//   { a: null, b: 'a', c: 'b', d: 'b', e: 'd' }
//   { a: 0, b: 300, c: 601, d: 514, e: 529 }