/**
 * Declaración de la clase Ruta. Entidad. Esta clase representa una ruta, que está formada por un conjunto de tramos
 * realizados por un vehiculo y un usuario.
 */
class Ruta {
    /**
     * Constructor de la clase Ruta
     * @param {String} nombre Nombre de la ruta
     * @param {Number} numeroParadas Número de paradas de la ruta 
     * @param {Array} tramos Tramos de la ruta
     * @param {Vehiculo} vehiculo Vehículo de la ruta
     * @param {Usuario} usuario Usuario de la ruta
     */
    constructor(nombre, numeroParadas, tramos, vehiculo, usuario) {
        this.nombre = nombre;
        this.numeroParadas = numeroParadas;
        this.tramos = tramos;
        this.vehiculo = vehiculo;
        this.usuario = usuario;
    }

    /**
     * Método que devuelve el nombre de la ruta
     * @returns {String} nombre Nombre de la ruta
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve el número de paradas de la ruta
     * @returns {Number} numeroParadas Número de paradas de la ruta
     */
    get numeroParadas() {
        return this.numeroParadas;
    }

    /**
     * Método que devuelve los tramos de la ruta
     * @returns {Array} tramos Tramos de la ruta
     */
    get tramos() {
        return this.tramos;
    }

    /**
     * Método que devuelve el vehículo de la ruta
     * @returns {Vehiculo} vehiculo Vehículo de la ruta
     */
    get vehiculo() {
        return this.vehiculo;
    }

    /**
     * Método que devuelve el usuario de la ruta
     * @returns {Usuario} usuario Usuario de la ruta
     */
    get usuario() {
        return this.usuario;
    }
}