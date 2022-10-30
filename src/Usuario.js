/**
 * Clase usuario. En esta clase se almacena la información de las Rutas que ha realizado un Usuario.
 */
class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {String} email Email del usuario
     * @param {Array} rutas Rutas realizadas por el usuario
     */
    constructor(email, rutas) {
        this.email = email;
        this.rutas = rutas;
    }

    /**
     * Método que devuelve el email del usuario
     * @returns {String} email Email del usuario
     */
    get email() {
        return this.email;
    }   

    /**
     * Método que devuelve las rutas del usuario
     * @returns {Array} rutas Rutas del usuario
     */
    get rutas() {
        return this.rutas;
    }
}