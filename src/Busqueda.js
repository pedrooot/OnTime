/**
 * Clase que transforma los datos de los tramos y los utiliza para crear un arbol
 * Usando este árbol, se utilizará un algoritmo greedy
 */

const InfoTramo = require("./InfoTramo.js");
const Graph = require("./Graph.js");

class Busqueda 
{
    diccionario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
    constructor(origen, destino)
    {
        if(origen && origen.trim().length != 0 && this.diccionario.includes(origen))
        {
            this.origen = origen;
        }
        else
        {
            throw new Error("El origen de la ruta es imprescindible");
        }
        if(destino && destino.trim().length != 0 && this.diccionario.includes(destino))
        {
            this.destino = destino;
        }
        else
        {
            throw new Error("El destino de la ruta es imprescindible");
        }

    }

}

//Funcion que pasa la informacion de InfoTramo a un grafo
function construir_tramos()
{
    let g = new Graph();
    //Aniadimos al nodo las letras que aparecen en InfoTramo
    for(let i in InfoTramo)
    {
        //Si no se ha introducido ya 
        if(!g.has_element(InfoTramo[i].origen))
        {
            g.addNode(InfoTramo[i].origen);
        }
        //Si no se ha introducido ya
        if(!g.has_element(InfoTramo[i].destino))
        {
            g.addNode(InfoTramo[i].destino);
        }
    }

    for(let i in InfoTramo)
    {
        g.addDirectedEdge(InfoTramo[i].origen, InfoTramo[i].destino, parseInt(InfoTramo[i].distancia));
    }

    return g;
}

//Funcion que implementa la lógica de negocio
function dijkstra(origen, grafo) 
{
    let costs = {},
        parents = {},
        visited = new Set();
    for (let i in grafo.nodes) 
    {
        if (grafo.nodes[i] === origen) 
        {
            costs[origen] = 0;
        } 
        else 
        {
            costs[grafo.nodes[i]] = Infinity;
        }
        parents[grafo.nodes[i]] = null;
    }
    
    let currVertex = grafo.vertexWithMinDistance(costs, visited);

    while (currVertex !== null) {
        let distance = costs[currVertex],
            neighbors = grafo.edges[currVertex];
        for (let neighbor in neighbors) {
            let newDistance = distance + neighbors[neighbor];
            if (costs[neighbor] > newDistance) {
                costs[neighbor] = newDistance;
                parents[neighbor] = currVertex;
            }
        }
        visited.add(currVertex);
        currVertex = grafo.vertexWithMinDistance(costs, visited);
    }

    return {
        first: parents,
        second: costs,
    };
    // console.log(parents);
    // console.log(costs);
}


// prueba = new Busqueda('a','e','15:00');
// grafo = new Graph();
// grafo = construir_tramos();
// console.log(grafo);
// console.log("////Resultado de la lógica de negocio")
// dijkstra('a',grafo);


module.exports = {construir_tramos,Busqueda,dijkstra};
