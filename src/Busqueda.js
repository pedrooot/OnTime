/**
 * Clase que transforma los datos de los tramos y los utiliza para crear un arbol
 * Usando este árbol, se utilizará un algoritmo greedy
 */

const Tramo = require("./Tramo.js");
const InfoTramo = require("./InfoTramo.js");
const Graph = require("./Graph.js");

class Busqueda 
{
    diccionario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
    constructor(origen, destino, hora_salida)
    {
        if(origen && origen.trim().length != 0)
        {
            this.origen = origen;
        }
        else
        {
            throw new Error("El origen de la ruta es imprescindible");
        }
        if(destino && destino.trim().length != 0)
        {
            this.destino = destino;
        }
        else
        {
            throw new Error("El destino de la ruta es imprescindible");
        }
        if(hora_salida && hora_salida.trim().length != 0)
        {
            this.hora_salida = hora_salida;
        }
        else
        {
            throw new Error("La hora de salida de la ruta es imprescindible");
        }

    }

    //Funcion que recibe un string y lo incrementa, necesario para ir recorriendo el arbol
    suma_string(str)
    {
        //Tomamos el último elemento del string
        valor = str.slice(str.length-1);
        if(this.diccionario.includes(valor))
        {
            //Tomamos el indice del elemento que le hemos introducido
            pos = this.diccionario.indexOf(valor);
            //Seleccionamos lo que tenemos a la izquierda del ultimo valor
            izq = str.slice(0,str.length-1);
            //Unimos la izquierda junto al nuevo valor
            incremento = izq + this.diccionario[pos+1];
            return incremento;
        }
        else
        {
            throw new Error('El valor no es valido y no esta en el diccionario');
        }
    }  

    //Funcion que determina si un tramo debe de ir antes o despues
    //Suponemos que un string es mayor que otro si debe de ir antes en la ruta 
    //(Si el string es menor, debe de ir antes en la ruta por lo que es mayor)
    mayor(str1, str2)
    {
        //Si el 
        if(str1.length < str2.length)
        {
            return true;
        }
        else if(str1.length > str2.length)
        {
            return false;
        }
        else
        {
            //Tomamos el último elemento de ambos strings
            valor1 = str1.slice(str1.length-1);
            valor2 = str2.slice(str2.length-1);
            //Comparamos
            if(this.diccionario.indexOf(valor1) < this.diccionario.indexOf(valor2))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }

    //Funcion que determina si dos elementos son consecutivos 
    son_consecutivos(str1, str2)
    {
        return ((this.suma_string(str2) === str1) || (this.suma_string(str1) === str2));
    }


    //Funcion que crea todas las combinaciones de tramos posibles de un origen a un destino
    //La forma de hacer este algoritmo es ir tomando los elementos y para cada uno de ellos evaluar si se puede crear rutas hacia el destino desde el mismo
    crear_combinaciones(vector,partida,final)
    {
        var salida = [];
        //Tomamos un iterador con el que vamos a manejar los elementos del vector
        for (let i in vector)
        {
            //Si el elemento actual contiene el origen
            if(vector[i].origen === partida)
            {
                let j = i;
                for (j in vector)
                {
                    //Si el elemento actual tiene continuación del origen
                    if(vector[i].destino === vector[j].origen)
                    {
                        salida.push(vector[i]);
                    }
                    else
                    {
                        this.crear_combinaciones(vector.slice(i,vector.lenght),vector[j].destino,final)
                    }
                }
            }
        }
        return salida;
    }   

}

//Funcion que pasa la info de los tramos a elementos de la clase tramo pasados a un grafo
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

    console.log(parents);
    console.log(costs);
}


prueba = new Busqueda('a','e','15:00');
grafo = new Graph();
grafo = construir_tramos();
console.log(grafo);
console.log("////Resultado de la lógica de negocio")
dijkstra('a',grafo);


module.exports = {construir_tramos};