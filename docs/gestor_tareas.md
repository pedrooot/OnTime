# Elección del gestor de tareas que se usará
A la hora de escoger el gestor de tareas podremos escoger entre muchas posibilidades, aquí algunas:  
* bun -> como se ha citado en [#13](https://github.com/pedromarting3/OnTime/issues/13) permite gestionar tareas.
* make -> herramienta extremadamente útil que nos permite automatizar flujos de trabajo con facilidad. Se ejecuta con la SHELL por lo que podremos usar comandos propios de la misma, a su vez, podrían surgir problemas de incompatibilidad.
* mask -> usa tareas desde un fichero markdown y las realiza a la vez que las documenta.
* gulp -> es simple, rápido porque usa flujos de node para pasar datos a través de una serie de complementos canalizados. Los archivos sólose sobreescriben cuando se finaliza cada tarea. También es simple de utilizar porque usa un dódifo de configuración de javascript fácil de leer y flexible.
* npm -> podría haberlo usado ya que lo usaré también como gestor de dependencias pero he decidido usar grunt porque tiene mayor rendimiento.
* grunt -> muy completo, rápido y fácil de usar. Es el que se va a usar debido a que he encontrado gran soporte en la web y tiene muy buen rendimiento, además estoy familiarizado con el archivo Gruntfile.js por lo que es un factor a tener en cuenta.

> No os copiéis de aquí, porque JJ se va a enterar de todas formas y de lo que se trata es de que hagáis vuestra propia búsqueda y toméis vuestras propias decisiones.
