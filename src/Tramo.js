/**
 * Declaración de la clase Tramo. Objeto valor. Esta clase almacena los datos referentes a un tramo. Estos datos
 * son punto de origen, punto de destino. Dos Tramos que tiene un mismo punto de origen y destino o 
 * ,si el punto de origen es igual al punto de destino de otro y viceversa, son el mismo Tramo.
 */
class Tramo {
    /**
     * Constructor de la clase Tramo
     * @param {String} origen Origen del tramo
     * @param {String} destino Destino del tramo
     */
    constructor (origen, destino) {
        this.origen = origen;
        this.destino = destino;
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
}