# OnTime-Pedro Martín González
## Descipción del problema a resolver
En muchas ocasiones he tenido el problema de no saber qué ruta escoger ya que, dependiendo del tráfico, podría ser más rápido tomar la ruta más larga.
 
## Propuesta de solución
La solución planteada actualmente a este problema es la creación de un servicio que permita al usuario planificar su ruta teniendo en cuenta el tráfico y diferentes factores.

## Lógica de negocio
El servicio creado recopilará la información de los usuarios del mismo así como las rutas que toma y las paradas que hace. Esta información se podrá obtener a través de la conexión del dispositivo del usuario con su propio vehículo (específicamente el coche) del que se obtendrán diferentes datos (consumo medio, distancia recorrida...) Cuando combinemos estos datos con nuestro servicio generará información útil.
Los principales clientes del servicio serán:
* Usuarios-> Podrán obtener la mejor ruta a su destino.
* Concejalía de urbanismo-> Usarán la información recopilada con el fin de mejorar y optimizar la infraestructura de las ciudades.

## Docs
* [Configuración de claves SSH y GPG](/docs/Captura%20de%20Pantalla%202022-09-15%20a%20las%2011.31.04.png)

* [Configuración de repositorio local](/docs/Captura%20de%20Pantalla%202022-09-16%20a%20las%2019.31.40.png)

* [Personas](/docs/Personas.md)

* [Milestones](/docs/Milestones.md)

* [Historias de usuario](/docs/Historias.md)

## Check format
Para comprobar el formato de los directorios ejecuta el siguiente comando:
```shell
grunt check
```