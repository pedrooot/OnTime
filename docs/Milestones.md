
# Milestones  
- [ ] [[M1] Estructura de datos para almacenar la información de la ciudad](https://github.com/pedromarting3/OnTime/milestone/1)  
    _Según lo que hemos hablado con nuestros clientes, necesitaremos una estructura de datos que les permita obtener el recorrido por la ciudad de la formas más eficiente posible. Esta estructura nos permitirá crear un modelo de la ciudad completa._

    _Este milestone se considerará superado cuando podamos representar una ciudad en forma de árbol. Cada nodo tendrá 3 componentes:_
    
    - _Componente X -> contiene las coordenadas de la ubicación que representa el nodo._  
    - _Componente Y -> contiene un valor que determina el nivel de congestión del nodo._  
    - _Componente Z -> contiene un valor que nos dice si el nodo es transitable o no (no se considerará transitable si está en obras, hay un árbol en la carretera...)_  

- [ ] [[M2] Método que genera la ruta dado un origen y el destino](https://github.com/pedromarting3/OnTime/milestone/2)  
    _Nuestra cliente (Yolanda) necesita introducir el origen y el destino para obtener la ruta más rápida._

    _Este milestone se superará cuando nuestro servicio genere la ruta mas corta (en términos temporales) a partir de los dos datos suministrados. La ruta debe ser totalmente transitable y se calculará usando el modelo de la ciudad completo._

- [ ] [[M3] Formato en el que nuestro servicio genera la ruta obtenida](https://github.com/pedromarting3/OnTime/milestone/3)  
    _Yolanda necesita que la ruta obtenida sea fácil de interpretar._
    
    _Este milestone se considerará superado cuando nuestro servicio genere un archivo con un formato determinado. El formato de este archivo será de texto plano (.txt) y contendrá información completa sobre la ruta en forma de dígitos y metacaracteres._
