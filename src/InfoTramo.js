//Creacion de la clase InfoTramo en la que se almacena información sobre las horas 
//congestionadas en cada tramo

const tramos = {
    start: {A: 5, B: 2},
    A: {C: 4, D: 2},
    B: {A: 8, D: 7},
    C: {D: 6, finish: 3},
    D: {finish: 1},
    finish: {}
  };

module.exports = tramos;
