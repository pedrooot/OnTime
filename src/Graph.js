
class Graph 
{
    constructor() 
    {
       this.nodes = [];
       this.edges = {};
    }
    addNode(node) 
    {
       this.nodes.push(node);
       this.edges[node] = {};
    }
    addDirectedEdge(node1, node2, cost) 
    {
       this.edges[node1][node2] = cost;
    }
    display() 
    {
       let graph = ""; this.nodes.forEach(node => 
        {
            graph += node + "->" + this.edges[node].join(", ") + " ";
        });
        console.log(graph);
    }
    has_element(node)
    {
        let value = false
        for(let i in this.nodes)
        {
            if(this.nodes[i] === node)
            {
                value = true;
            }
        }
        return value;
    }
    count_elements()
    {
        return this.nodes.length;
    }

    vertexWithMinDistance(distances, visited) 
    {
        let minDistance = Infinity,
            minVertex = null;
        for (let node in distances) 
        {
            let distance = distances[node];
            if (distance < minDistance && !visited.has(node)) 
            {
                minDistance = distance;
                minVertex = node;
            }
        }
        return minVertex;
    }

 }





 module.exports = Graph;

 