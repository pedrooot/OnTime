/**
 * Clase InfoRuta. Objeto valor. En esta clase almacenaremos la información perteneciente a una ruta que ha realizado.
 */
 class InfoRuta {
    /**
     * Constructor de la clase Usuario
     * @param {String} nombre Nombre de la ruta que se ha realizado
     * @param {Number} tiempoMedio Tiempo medio de la ruta que se ha realizado
     * @param {Number} horaInicio Hora de inicio de la ruta que se ha realizado
     */
    constructor(nombre, tiempoMedio, horaInicio) {
        this.nombre = nombre;
        this.tiempoMedio = tiempoMedio;
        this.horaInicio = horaInicio;
    }

    /**
     * Método que devuelve el nombre de la ruta
     * @returns {String} nombre Nombre de la ruta que se ha realizado
     */
    get nombre() {
        return this.nombre;
    }

    /**
     * Método que devuelve el tiempo medio de la ruta
     * @returns {Number} tiempoMedio Tiempo medio de la ruta que se ha realizado
     */
    get tiempoMedio() {
        return this.tiempoMedio;
    }

    /**
     * Método que devuelve la hora de inicio de la ruta
     * @returns {Number} horaInicio Hora de inicio de la ruta que se ha realizado
     */
    get horaInicio() {
        return this.horaInicio;
    }
}