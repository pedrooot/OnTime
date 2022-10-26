import tipoVehiculo from './TipoVehiculo';

/**
 * Declaración de la clase Vehiculo
 */
class Vehiculo {
    /**
     * Constructor de la clase Vehiculo
     * @param {String} matricula Matrícula del vehículo
     * @param {tipoVehiculo} tipoVehiculo Tipo de vehículo
     * @param {Number} antiguedad Distancia recorrida por el vehículo
     * @param {Number} consumoMedio Consumo medio del vehículo
     */
    constructor(matricula, tipoVehiculo, antiguedad, consumoMedio) {
        this.matricula = matricula;
        this.tipoVehiculo = tipoVehiculo;
        this.antiguedad = antiguedad;
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
     * Método que devuelve el tipo de vehículo
     * @returns {tipoVehiculo} tipoVehiculo Tipo de vehículo
     */
    get tipoVehiculo() {
        return this.tipoVehiculo;
    }

    /**
     * Método que devuelve la antigüedad del vehículo
     * @returns {Number} antiguedad Antigüedad del vehículo
     */
    get antiguedad() {
        return this.antiguedad;
    }

    /**
     * Método que devuelve el consumo medio del vehículo
     * @returns {Number} consumoMedio Consumo medio del vehículo
     */
    get consumoMedio() {
        return this.consumoMedio;
    }
}