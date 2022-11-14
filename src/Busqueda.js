/**
 * Clase que transforma los datos de los tramos y los utiliza para crear un arbol
 * Usando este árbol, se utilizará un algoritmo greedy
 */

class Busqueda {
    
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

    


}