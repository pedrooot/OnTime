/**
 * Declaración de la clase Tramo
 */
class Tramo {
    /**
     * Constructor de la clase Tramo
     * @param {Number} id Identificador del tramo
     * @param {String} origen Origen del tramo
     * @param {String} destino Destino del tramo
     * @param {Number} distancia Distancia del tramo
     * @param {Number} consumoMedio Consumo medio del tramo
     * @param {Number} tiempoMedio Tiempo medio del tramo
     * @param {Number} horaInicio Hora de inicio del tramo
     * @param {String} matriculaVehiculo Matrícula del vehículo
     */
    constructor (id, origen, destino, distancia, consumoMedio, tiempoMedio, horaInicio, matriculaVehiculo) {
        this.id = id
        this.origen = origen
        this.destino = destino
        this.distancia = distancia
        this.consumoMedio = consumoMedio;
        this.tiempoMedio = tiempoMedio;
        this.horaInicio = horaInicio;
        this.matriculaVehiculo = matriculaVehiculo;
    }

    /**
     * Método que devuelve el id del tramo
     * @returns {Number} id Identificador del tramo
     */
    get id() {
        return this.id;
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
     * Método que devuelve el consumo medio del tramo
     * @returns {Number} consumoMedio Consumo medio del tramo
     */
    get consumoMedio() {
        return this.consumoMedio;
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

    /**
     * Método que devuelve la matrícula del vehículo
     * @returns {String} matriculaVehiculo Matrícula del vehículo
     */
    get matriculaVehiculo() {
        return this.matriculaVehiculo;
    }
}