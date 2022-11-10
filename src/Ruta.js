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
        this.origen = origen;
        this.destino = destino;
        this.tramos = tramos;
        this.hora_salida = hora_salida;
        this.hora_llegada = hora_llegada;
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
    
}