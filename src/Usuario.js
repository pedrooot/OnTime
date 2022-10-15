/**
 * Declaración de la clase Usuario
 */
class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {Number} id 
     * @param {String} nombre 
     * @param {String} email 
     * @param {String} password 
     */
    constructor(id, nombre, email, password) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.password = password;
    }

    /**
     * Método que devuelve el id del usuario
     * @returns {Number} id
     */
    get id() {
        return this.id;
    }

    /**
     * Método que devuelve el nombre del usuario
     * @returns {String} nombre
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve el email del usuario
     * @returns {String} email
     */
    get email() {
        return this.email;
    }

    /**
     * Método que devuelve el password del usuario
     * @returns {String} password
     */
    get password() {
        return this.password;
    }
}