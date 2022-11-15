/**
 * Clase que transforma los datos de los tramos y los utiliza para crear un arbol
 * Usando este árbol, se utilizará un algoritmo greedy
 */
 

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
        }
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
        if(diccionario.includes(valor))
        {
            //Tomamos el indice del elemento que le hemos introducido
            pos = diccionario.indexOf(valor);
            //Seleccionamos lo que tenemos a la izquierda del ultimo valor
            izq = str.slice(0,str.length-1);
            //Unimos la izquierda junto al nuevo valor
            incremento = izq + diccionario[pos+1];
            return incremento;
        }
        else
        {
            throw new Error('El valor no es valido y no esta en el diccionario');
        }
    }  

    //Funcion que determina si dos elementos son consecutivos 
    son_consecutivos(str1, str2)
    {
        return (this.suma_string(str1) === str2);
    }

    construir_arbol()
    {
        
    }

    insertar(nodo, actual)
    {
        if(this.son_consecutivos(nodo.origen,actual.destino))
        {
            //Comprobamos si la distancia es menor(el valor debe de ir a la izquierda)
            if(nodo.distancia < actual.distancia)
            {
                if(actual.left === null)
                {
                    actual.left = nodo;
                }
                else
                {
                    this.insertar(nodo,actual.left);
                }
            }//La distancia es mayor por lo que va a la izquierda
            else
            {
                if(actual.right === null)
                {
                    actual.right = nodo;
                }
                else
                {
                    this.insertar(nodo, actual.right);
                }
            }
        }
    }

    add_nodo(origen,destino,distancia,hora)
    {
        var nodo = {
            origen: origen,
            destino: destino,
            distancia: distancia,
            hora: hora,
            left: null,
            right: null
          }

          if (this._root === null) 
          {
            this._root = node;
          } 
          else 
          {      
            this.insertar(nodo, this._root);
          }
    }






}