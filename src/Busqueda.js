/**
 * Clase que transforma los datos de los tramos y los utiliza para crear un arbol
 * Usando este árbol, se utilizará un algoritmo greedy
 */

const Tramo = require("Tramo.js");
const InfoTramo = require("InfoTramo");
 

class Busqueda 
{
    diccionario = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
    constructor(origen, destino, hora_salida)
    {
        if(origen && origen.trim().length != 0)
        {
            this.origen = origen;
        }
        else
        {
            throw new Error("El origen de la ruta es imprescindible");
        }
        if(destino && destino.trim().length != 0)
        {
            this.destino = destino;
        }
        else
        {
            throw new Error("El destino de la ruta es imprescindible");
        }d
        if(hora_salida && hora_salida.trim().length != 0)
        {
            this.hora_salida = hora_salida;
        }
        else
        {
            throw new Error("La hora de salida de la ruta es imprescindible");
        }

    }

    //Funcion que recibe un string y lo incrementa, necesario para ir recorriendo el arbol
    suma_string(str)
    {
        //Tomamos el último elemento del string
        valor = str.slice(str.length-1);
        if(this.diccionario.includes(valor))
        {
            //Tomamos el indice del elemento que le hemos introducido
            pos = this.diccionario.indexOf(valor);
            //Seleccionamos lo que tenemos a la izquierda del ultimo valor
            izq = str.slice(0,str.length-1);
            //Unimos la izquierda junto al nuevo valor
            incremento = izq + this.diccionario[pos+1];
            return incremento;
        }
        else
        {
            throw new Error('El valor no es valido y no esta en el diccionario');
        }
    }  

    //Funcion que determina si un tramo debe de ir antes o despues
    //Suponemos que un string es mayor que otro si debe de ir antes en la ruta 
    //(Si el string es menor, debe de ir antes en la ruta por lo que es mayor)
    mayor(str1, str2)
    {
        //Si el 
        if(str1.length < str2.length)
        {
            return true;
        }
        else if(str1.length > str2.length)
        {
            return false;
        }
        else
        {
            //Tomamos el último elemento de ambos strings
            valor1 = str1.slice(str1.length-1);
            valor2 = str2.slice(str2.length-1);
            //Comparamos
            if(this.diccionario.indexOf(valor1) < this.diccionario.indexOf(valor2))
            {
                return true;
            }
            else
            {
                return false;
            }

        }
    }

    //Funcion que determina si dos elementos son consecutivos 
    son_consecutivos(str1, str2)
    {
        return ((this.suma_string(str2) === str1) || (this.suma_string(str1) === str2));
    }


    //Funcion que pasa la info de los tramos a elementos de la clase tramo pasados a un vector
    construir_tramos(InfoTramos)
    {
        //Contador de los tramos introducidos
        let actual = 0;
        //Vector de tramos 
        var vector = [];
        //Mientras que InfoTramos no esté vacío
        while(InfoTramo.length > actual)
        {
            //Asignamos un iterador con el que vamos a interactual
            let iterator = new Tramo(Infotramo[actual].origen, InfoTramo[actual].destino, InfoTramo[actual].distancia);
            vector.push(iterator);
            actual++;
        }
        return vector;
    }

    //Funcion que crea todas las combinaciones de tramos posibles de un origen a un destino
    //La forma de hacer este algoritmo es ir tomando los elementos y para cada uno de ellos evaluar si se puede crear rutas hacia el destino desde el mismo
    crear_combinaciones(vector, origen, destino)
    {
        let actual = 0;
        var salida = [];
        //Tomamos un iterador con el que vamos a manejar los elementos del vector
        for (let i = 0; i < vector.lenght; i++)
        {
            //Si el elemento actual contiene el origen
            if(iterador1.origen === origen)
            {
                for (let j = i; j < vector.lenght; j++)
                {
                    //Si el elemento actual tiene continuación del origen
                    
                }
            }
        }
    }   

    // insertar(nodo, actual)
    // {
    //     if(this.son_consecutivos(nodo.origen,actual.destino))
    //     {
    //         //Comprobamos si la distancia es menor(el valor debe de ir a la izquierda)
    //         if(nodo.distancia < actual.distancia)
    //         {
    //             if(actual.left === null)
    //             {
    //                 actual.left = nodo;
    //             }
    //             else
    //             {
    //                 this.insertar(nodo,actual.left);
    //             }
    //         }//La distancia es mayor por lo que va a la izquierda
    //         else
    //         {
    //             if(actual.right === null)
    //             {
    //                 actual.right = nodo;
    //             }
    //             else
    //             {
    //                 this.insertar(nodo, actual.right);
    //             }
    //         }
    //     }
    // }

    // add_nodo(origen,destino,distancia,hora)
    // {
    //     var nodo = {
    //         origen: origen,
    //         destino: destino,
    //         distancia: distancia,
    //         hora: hora,
    //         left: null,
    //         right: null
    //       }

    //       if (this._root === null) 
    //       {
    //         this._root = node;
    //       } 
    //       else 
    //       {      
    //         this.insertar(nodo, this._root);
    //       }
    // }






}