/**
 * Clase usuario. Objeto valor. En esta clase almacenaremos la información perteneciente a un usuario con respecto a las rutas que ha realizado.
 */
class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {Array[InfoRuta]} infoRutas Informacion de las Rutas realizadas por el usuario
     */
    constructor(infoRutas) {
        this.infoRutas = infoRutas;
    }

    /**
     * Método que devuelve la informacion de las rutas del usuario
     * @param {Array[Map]} infoRutas Informacion de las Rutas realizadas por el usuario
     */
    get infoRutas() {
        return this.infoRutas;
    }
}