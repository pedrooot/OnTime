# Imagen de docker que se usará
A la hora de escoger la imagen de docker que voy a usar voy a tener en cuenta los siguientes criterios:
* Versión: se usará la versión más estable para que nuestro proyecto tenga el mejor soporte a pesar de perder ciertas funcionalidades que se hayan añadido en versiones nuevas (menos estables).
* Tendrán preferencia versiones oficiales. 

Las imágenes de docker que son interesantes para mi proyecto son:
* node: podría usarla por su estabilidad, versatilidad y compatibilidad con mi proyecto.
* buster-slim: contenedor basado en debian que, como su nombre lo indica es liviana. No la voy a usar porque no se ajusta a las necesidades de mi proyecto.
* grunt image: imagen que implementaré para que se ajuste lo máximo posible a mis necesidades.

La idea es intentar implementar mi propia imagen de docker y en el caso de que se produzcan incompatibilidades por mi equipo usaré la imagen de node.

*Tras intentar crear nuestro propia imagen de docker, se dan probemas de compatibilidad por la arquitectura de mi ordenador por lo que voy a usar la imagen de node*