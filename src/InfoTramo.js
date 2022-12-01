//Creacion de la clase InfoTramo en la que se almacena información sobre los "pesos" de cada tramo
//este preso es un valor que se calcula a partir de la distancia del tramo y la congestión.

const tramos = {
    start: {A: 50, B: 20},
    A: {C: 45, D: 27},
    B: {A: 83, D: 79},
    C: {D: 61, finish: 33},
    D: {finish: 15},
    finish: {}
  };

module.exports = tramos;
