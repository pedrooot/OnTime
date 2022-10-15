/**
 * Declaración de la clase Vehiculo
 */
class Vehiculo {
    /**
     * 
     * @param {String} matricula Matrícula del vehículo
     * @param {Number} distanciaRecorrida Distancia recorrida por el vehículo
     * @param {Number} consumoMedio Consumo medio del vehículo
     */
    constructor(matricula, distanciaRecorrida, consumoMedio) {
        this.matricula = matricula;
        this.distanciaRecorrida = distanciaRecorrida;
        this.consumoMedio = consumoMedio;
    }

    /**
     * Método que devuelve la matrícula del vehículo
     * @returns {String} matricula Matrícula del vehículo
     */
    get matricula() {
        return this.matricula;
    }

    /**
     * Método que devuelve la distancia recorrida por el vehículo
     * @returns {Number} distanciaRecorrida Distancia recorrida por el vehículo
     */
    get distanciaRecorrida() {
        return this.distanciaRecorrida;
    }

    /**
     * Método que devuelve el consumo medio del vehículo
     * @returns {Number} consumoMedio Consumo medio del vehículo
     */
    get consumoMedio() {
        return this.consumoMedio;
    }
}