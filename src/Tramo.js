/**
 * Declaración de la clase Tramo. Esta clase representa un tramo de una ruta, que está compuesto por un punto de origen,
 * un destino, la distancia que hay entre esos dos puntos, el tiempo medio que se tarda en recorrer ese tramo
 * y por último la hora de inicio que influirá en la toma de decisiones debido a que el tráfico puede variar en función de la hora.
 */
class Tramo {
    /**
     * Constructor de la clase Tramo
     * @param {String} origen Origen del tramo
     * @param {String} destino Destino del tramo
     * @param {Number} distancia Distancia del tramo
     * @param {Number} tiempoMedio Tiempo medio del tramo
     * @param {Number} horaInicio Hora de inicio del tramo
     */
    constructor (origen, destino, distancia, tiempoMedio, horaInicio) {
        this.origen = origen;
        this.destino = destino;
        this.distancia = distancia;
        this.tiempoMedio = tiempoMedio;
        this.horaInicio = horaInicio;
    }

    /**
     * Método que devuelve el origen del tramo
     * @returns {String} origen Origen del tramo
     */
    get origen() {
        return this.origen;
    }

    /**
     * Método que devuelve el destino del tramo
     * @returns {String} destino Destino del tramo
     */
    get destino() {
        return this.destino;
    }

    /**
     * Método que devuelve la distancia del tramo
     * @returns {Number} distancia Distancia del tramo
     */
    get distancia() {
        return this.distancia;
    }

    /**
     * Método que devuelve el tiempo medio del tramo
     * @returns {Number} tiempoMedio Tiempo medio del tramo
     */
    get tiempoMedio() {
        return this.tiempoMedio;
    }

    /**
     * Método que devuelve la hora de inicio del tramo
     * @returns {Number} horaInicio Hora de inicio del tramo
     */
    get horaInicio() {
        return this.horaInicio;
    }
}