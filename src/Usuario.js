/**
 * Clase usuario. En esta clase se almacena la información de las Rutas que ha realizado un Usuario.
 */
class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {String} email Email del usuario
     * @param {Array[Map]} infoRutas Informacion de las Rutas realizadas por el usuario
     */
    constructor(email, infoRutas) {
        this.email = email;
        this.infoRutas = infoRutas;
    }

    /**
     * Método que devuelve el email del usuario
     * @returns {String} email Email del usuario
     */
    get email() {
        return this.email;
    }   

    /**
     * Método que devuelve la informacion de las rutas del usuario
     * @param {Array[Map]} infoRutas Informacion de las Rutas realizadas por el usuario
     */
    get infoRutas() {
        return this.infoRutas;
    }
}