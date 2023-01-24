# Imagen de docker que se usará
A la hora de escoger la imagen de docker que voy a usar voy a tener en cuenta los siguientes criterios:
* Versión: se usará la versión más estable para que nuestro proyecto tenga el mejor soporte a pesar de perder ciertas funcionalidades que se hayan añadido en versiones nuevas (posiblemente sean menos estables).
* Tamaño: cuanto menor sea el tamaño de nuestra imagen mejor

Las imágenes de docker que son interesantes para mi proyecto son:
* [node](https://hub.docker.com/_/node): versión oficial de node, totalmente descartado su uso por gran tamaño.
* [buster-slim](https://hub.docker.com/r/linuxcontainers/buster-slim): contenedor basado en debian que, como su nombre indica es liviana (64.03MB). Hay que tener en cuenta que una de las razones por las que pesa tan poco es porque le faltan muchos elementos que usaré (entre ellos node)
* [vmware/node](https://hub.docker.com/r/vmware/node): contenedor basado en Photon Os, una distribución minimalista de Linux que está optimizada para su funcionamiento en contenedores. Su tamaño aproximado es de 160MB. Se trata de una imagen estable con tamaño reducido.  

Otra opción que he encontrado y me parece interesante es:
* [huli/grunt](https://hub.docker.com/r/huli/grunt/#!): Esta imagen se ha creado con el objetivo de ejecutar tareas de grunt en alpine, su tamaño es de 350MB (aproximadamente) Un punto a tener en cuenta es que usa la última versión estable de nodejs sin embargo lleva sin mantenimiento más de un año. Es la principal razón por la que se ha descartado.
* [clearlinux/node](https://hub.docker.com/r/clearlinux/node): Imagen creada por Intel, se vende como una imagen optimizada para la seguridad y desempeño en la nube. Su tamaño es de 630MB por lo que va a ser directamente descartada.


## Decisión Final
Se va a usar la imagen de node de vmware. La razón por la que se ha tomado esta decisión es por su tamaño y estabilidad.

