/**
 * Declaración de la clase Ruta
 */
class Ruta {
    /**
     * Constructor de la clase Ruta
     * @param {String} nombre Nombre de la ruta
     * @param {Array} tramos Tramos de la ruta
     */
    constructor(nombre, tramos) {
        this.nombre = nombre;
        this.tramos = tramos;
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
}