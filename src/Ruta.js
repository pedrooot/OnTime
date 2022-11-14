//Creación de la clase ruta
/**
 * Atributos
 * Origen
 * Destino
 * Tramos 
 * Hora_salida
 * Hora_llegada
 */

 class Ruta {
    /**
     * Constructor de la clase Tramo
     * @param {String} origen Origen del tramo
     * @param {String} destino Destino del tramo
     * @param {Array[Tramo]} tramos
     * @param {Date} hora_salida
     * @param {Date} hora_llegada
     */
    constructor (origen, destino, tramos, hora_salida, hora_llegada) {
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
        this.tramos = tramos || [];
        if(hora_salida && hora_salida.trim().length != 0)
        {
            this.hora_salida = hora_salida;
        }
        else
        {
            throw new Error("La hora de salida de la ruta es imprescindible");
        }
        if(hora_llegada && hora_llegada.trim().length != 0)
        {
            this.hora_llegada = hora_llegada;
        }
        else
        {
            throw new Error("La hora de llegada de la ruta es imprescindible");
        }
    }

    /**
     * Método que devuelve el origen del tramo
     * @returns {String} origen Origen del tramo
     */
    get origen() {
        return this.origen;
    }

    /**
     * Método que devuelve el destino del tramo
     * @returns {String} destino Destino del tramo
     */
    get destino() {
        return this.destino;
    }

    /**
     * Método que devuelve los tramos que componen la ruta
     * @returns {Array[tramo]} tramo tramos de la ruta
     */
    get tramos() {
        return this.tramos;
    }

    /**
     * Método que devuelve la hora de salida
     * @returns {Date} hora_salida hora de salida 
     */
    get hora_salida() { 
        return this.hora_salida;
    }

    /**
     * Método que devuelve la hora de llegada
     * @returns {Date} hora_llegada hora de llegada
     */
    get hora_llegada() { 
        return this.hora_llegada;
    }
    /**
     * @param {Tramo} tramo 
     * Funcion que se usa para añadir un tramo a una ruta
     * Estamos suponiendo que la introducción de los tramos se hace de forma ordenada
     */
    add_tramo(tramo)
    {
        //Si no está ya en la ruta y no tiene distancia 0/negativa
        if(!this.tramos.some(x => x.origen.includes(tramo.origen)) && !this.tramos.some(x => x.origen.includes(tramo.origen)) && tramo.distancia > 0)
        {
            this.tramos.push(tramo);
        }
        else
        {
            throw new Error("Datos del tramo invalidos");
        }
    }

}

