/**
 * Declaración de la clase Ruta. Esta clase representa una ruta que está compuesta por una serie de tramos
 * que recorre un vehículo concreto.
 */
class Ruta {
    /**
     * Constructor de la clase Ruta
     * @param {String} nombre Nombre de la ruta
     * @param {Array} tramos Tramos de la ruta
     * @param {String} matriculaVehiculo Matrícula del vehículo
     */
    constructor(nombre, tramos, matriculaVehiculo) {
        this.nombre = nombre;
        this.tramos = tramos;
        this.matriculaVehiculo = matriculaVehiculo;
    }

    /**
     * Método que devuelve el nombre de la ruta
     * @returns {String} nombre Nombre de la ruta
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve los tramos de la ruta
     * @returns {Array} tramos Tramos de la ruta
     */
    get tramos() {
        return this.tramos;
    }

    /**
     * Método que devuelve la matrícula del vehículo
     * @returns {String} matriculaVehiculo Matrícula del vehículo
     */
    get matriculaVehiculo() {
        return this.matriculaVehiculo;
    }
}