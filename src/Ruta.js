/**
 * Declaración de la clase Ruta
 */
class Ruta {
    /**
     * Constructor de la clase Ruta
     * @param {Number} id Identificador de la ruta
     * @param {String} nombre Nombre de la ruta
     * @param {Array} tramos Tramos de la ruta
     * @param {Number} idUsuario Identificador del usuario
     */
    constructor(id, nombre, tramos, idUsuario) {
        this.id = id;
        this.nombre = nombre;
        this.tramos = tramos;
        this.idUsuario = idUsuario;
    }

    /**
     * Método que devuelve el id de la ruta
     * @returns {Number} id Identificador de la ruta
     */
    get id() {
        return this.id;
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
     * Método que devuelve el id del usuario
     * @returns {Number} idUsuario Identificador del usuario
     */
    get idUsuario() {
        return this.idUsuario;
    }
}