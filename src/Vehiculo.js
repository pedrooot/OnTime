/**
 * Clase vehiculo. Objeto valor. En esta clase almacenaremos la información referente a un vehiculo como es la antiguedad del mismo.
 */
 class Vehiculo {
    /**
     * Constructor de la clase Vehiculo
     * @param {Number} antiguedad Antigüedad del vehículo
     */
    constructor(antiguedad) {
        this.antiguedad = antiguedad;
    }

    /**
     * Método que devuelve la antiguedad del vehiculo
     * @returns {Number} antiguedad Antigüedad del vehículo
     */
    get antiguedad() {
        return this.antiguedad;
    }
}