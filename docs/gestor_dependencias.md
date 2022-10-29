# Gestor de dependencias que se usará
A la hora de escoger el gestor de dependencias, he barajado diferentes posibilidades:  
* npm-> (Node Package Management) es un gestor de dependencias  desarrollado sobre Node.js en el que cada proyecto puede utilizar el archivo de instalación package.json a través de NMP y gestionarlo con GULP. Las dependencias se pueden optimizar y actualizar desde la terminal. Se pueden desarrollar nuevos proyectos desde archivos de dependencias y números de versión insertados automáticamente desde package.json (Es el "padre" del resto de gestores de dependencias que voy a tratar).
* bun -> se basa en la velocidad, rendimiento y polifacético (empaquetador, administrador de paquetes...). El objetivo de BUN es ejecutar la mayor parte de JavaScript fuera de los navegadores para mejorar el rendimiento y complejidad a su infraestructura futura. He decidido descartar la opción de usar bun porque hay poca documentación sobre este gestor por lo que creo que la integración del mismo en mi proyecto sería inviable.
* pnpm -> muchos desarrolladores lo describen como el reemplazo directo de npm. Su funcionamiento está basado en el almacenamiento centralizado del código de las bibliotecas para compartirlo con otros proyectos. Si un proyecto comparte cierta versión de x software lo instala una vez y luego hace referencia a esa instalación en todos sus proyectos. Este gestor ha sido descartado debido a que no necesitaba su principal función (la centralización de las bibliotecas).
* yarn -> es una pequeña mejora de npm. Su funcionamiento es parecido pnpm pero tiene más problemas: 
    * Los módulos pueden acceder a los paquetes de los que no dependen.
    * Algunos de los paquetes deben copiarse dentro de la carpeta node_modules de cada proyecto.


Finalmente, he decidido usar npm por la cantidad de documentación que hay sobre el mismo, el buen rendimiento que tiene y la flexibilidad.