# Imagen de docker que se usará
A la hora de escoger la imagen de docker que voy a usar voy a tener en cuenta los siguientes criterios:
* Versión: se usará la versión más estable para que nuestro proyecto tenga el mejor soporte a pesar de perder ciertas funcionalidades que se hayan añadido en versiones nuevas (menos estables).
* Tendrán preferencia versiones oficiales.
* Tamaño (menor tamaño = mejor)

Las imágenes de docker que son interesantes para mi proyecto son:
* node: podría usarla por su estabilidad, versatilidad y compatibilidad con mi proyecto.
* buster-slim: contenedor basado en debian que, como su nombre lo indica es liviana. No la voy a usar porque no se ajusta a las necesidades de mi proyecto.
* grunt image: se plantea la posibilidad de crear mi propia imagen de docker.  

Otra opción que he encontrado y me parece interesante es:
* [/huli/grunt](https://hub.docker.com/r/huli/grunt/#!): Esta imagen se ha creado con el objetivo de ejecutar tareas de grunt en alpine. Un punto a tener en cuenta es que usa la última versión estable de nodejs.


La idea que tenía en mente al inicio era crear una imagen de docker propia pero tras dedicarle mucho tiempo a la implementación de la misma se ha descartado la posibilidad por la complejidad, el tiempo que requiere y problemas de incompatbilidad.  
## Decisión Final
Finalmente he decidido hacer uso de la imagen oficial de node en su última versión. Al tratarse de un proyecto en los que los diferentes elementos que lo componen se están usando en la actualidad y se actualizan constantemente no habrá problemas como incompatilidad de versiones.

