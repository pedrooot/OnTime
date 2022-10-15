/**
 * Declaración de la clase Usuario
 */
class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {Number} id Identificador del usuario
     * @param {String} nombre Nombre del usuario
     * @param {String} email Email del usuario
     * @param {String} password Contraseña del usuario
     */
    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    /**
     * Método que devuelve el id del usuario
     * @returns {Number} id Identificador del usuario
     */
    get id() {
        return this.id;
    }

    /**
     * Método que devuelve el nombre del usuario
     * @returns {String} nombre Nombre del usuario
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve el email del usuario
     * @returns {String} email Email del usuario
     */
    get email() {
        return this.email;
    }

    /**
     * Método que devuelve el password del usuario
     * @returns {String} password Contraseña del usuario
     */
    get password() {
        return this.password;
    }
}