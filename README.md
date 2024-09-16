# SISCOx256

En este repositorio se registran los proyectos y experiencias de aprendizaje realizadas para el curso de Sistemas Colaborativos (`SISCOx256`) en la [Universidad Tecnológica de Panamá (UTP)](https://utp.ac.pa), Facultad de Ingeniería de Sistemas Computacionales ([FISC](https://fisc.utp.ac.pa)). Su versión de GitHub (esta) es una guía abierta para que cualquiera pueda aprender a crear sus propios proyectos con las mejores prácticas para equipos de alto rendimiento.

## Sobre Git y Linux

¿Por qué Linux? ¿Qué es eso de Git?

El uso de la terminal de comandos (con Linux) puede resultar extraño al principio para usuarios casuales de Windows. Linux es un sistema operativo libre y de código abierto que es ampliamente utilizado para servidores e incluso sistemas operativos móviles como Android. Al tener esa imponente presencia en la industria, no es de extrañar que la mayoría de herramientas de software se utilicen en Linux y estén optimizadas para funcionar en él (y otros sistemas operativos también basados en Unix como macOS). Windows por su parte tiene una arquitectura fundamentalmente diferente y desarrollar software en su entorno tiende a ser más inconveniente.

Si usas ya sea MacOS o Linux como tu sistema operativo de escritorio, no debes preocuparte pues ya tienen el entorno ideal para programar por defecto. Por otro lado, con Windows se necesita configuración adicional usando WSL (Windows Subsystem for Linux) para poder usar Linux como entorno de ejecución de programas. Ya que Git se usa principalmente desde la terminal de comandos, es muy conveniente ejectuarlo en Linux o MacOS.

En los videos a continuación se muestra cómo configurar WSL en Windows:

(en español, por [Platzi](https://platzi.com))

[![Tutorial en español de WSL en Windows](https://img.youtube.com/vi/Qy44XLpiChc/0.jpg)](https://www.youtube.com/watch?v=Qy44XLpiChc)

(en inglés por [NetworkChuck](https://networkchuck.com); con algunos tips y trucos adicionales)

[![Tutorial en inglés de WSL en Windows](https://img.youtube.com/vi/vxTW22y8zV8/0.jpg)](https://www.youtube.com/watch?v=vxTW22y8zV8)

¿Aún no te convences de usar Linux? Mira este video por [Freddy Vega](https://freddyvega.com) de [Platzi](https://platzi.com):

[![Por qué usar Linux](https://img.youtube.com/vi/rieFzuJfRN0/0.jpg)](https://www.youtube.com/watch?v=rieFzuJfRN0)

Ahora que tienes Linux, ya puedes aprovechar Git al máximo. Git es un sistema de control de versiones distribuido que permite trabajar en equipos de manera eficiente en todo proyecto de software.

Lo siguiente es revisar el curso de Brais Moure ([MoureDev](https://mouredev.com)) que mencionamos en la siguiente sección sore GitHub. Míralo con cuidado hasta que estés en la capacidad de hacer [**"fork"**](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) a este repositorio en tu cuenta personal de GitHub. Desde ahí podrás trabajar en los **laboratorios asignados** por tu cuenta y al terminarlos hacer un [**"pull request"**](https://docs.github.com/en/pull-requests) al repositorio original (este) para que sea evaluado y compartido con el resto de los estudiantes.

Siempre puedes apoyarte con los videos proveidos, la [documentación oficial](https://docs.github.com/en) y los foros de discusión en el GitHub Discussions de este repositorio.

> _"Si tienen dudas, no duden en preguntar"_.

## Herramientas de GitHub a usar

GitHub es una plataforma que facilita el uso de Git y la colaboración de equipos globalmente de forma remota. Las características con las que cuenta son bastantes y puede resultar abrumador en un principio. Sin embargo, esta es una herramienta fundamental para cualquier profesional de tecnología y con total seguridad se encontrará en el entorno laboral. Incentivamos a que lo aprendas a tu ritmo pero constantemente practicarlo con cada proyecto de software que realices.

A continuación te presentamos un video de Brais Moure ([MoureDev](https://mouredev.com)) que explica a profundidad el uso de Git y GitHub para proyectos de software.

[![Curso de Git y GitHub](https://img.youtube.com/vi/3GymExBkKjE/0.jpg)](https://www.youtube.com/watch?v=3GymExBkKjE)

Adicionalmente, otro aspecto importante del desarrollo de software además del control de versiones es la documentación. Debido a que git funciona mejor con texto plano, **markdown** es el formato preferido para la documentación. De hecho, este documento README.md que estás leyendo está escrito en markdown. Por este motivo se evita el uso de archivos binarios como PDF, Word, etc. Markdown será necesario para que cada grupo (_tribu_) describa sus proyectos y propuestas de valor para el semestral. Aquí pueden ver un video de YouTube creado por _Fazt Code_ que explica cómo usar el lenguaje de marcado markdown.

_Markdown, Curso Práctico para principiantes y desarrolladores_

[![Markdown, Curso Práctico para principiantes y desarrolladores](https://img.youtube.com/vi/oxaH9CFpeEE/0.jpg)](https://www.youtube.com/watch?v=oxaH9CFpeEE)

### GitHub [Discussions](https://docs.github.com/en/discussions)

Esta es la primera feature que usaremos en **este curso.** Se trata de un espacio donde se pueden publicar temas de discusión, generar conversaciones y conseguir respuestas a las dudas que se tengan.

En el menú superior de la página de GitHub en cada repositorio que lo tenga habilitado (como este) se encuentra un botón que se llama "`Discussions`". Al hacer clic en él se abre una ventana donde se puede crear un nuevo tema de discusión, tal como en foros de Internet, al estilo de [StackOverflow](https://stackoverflow.com) o [Reddit](https://reddit.com).

Dicho esto, les incentivamos a que usen esta feature de GitHub como la principal herramienta de aprendizaje para este curso. Cualquier duda o sugerencia que tengan sobre cualquier tema es razón para crear un tema de discusión en este espacio.

Hemos creado una serie de secciones y categorías de discusión para distintos propósitos, tal como las siguientes:

![Categorías de discusión](https://github.com/user-attachments/assets/2d26b7d2-35a1-4213-aad3-3ead3ad22606)

En cada una de ellas pueden encontrar una descripción de lo que se trata y una lista de temas de discusión que se han creado para ella. ¡Les invitamos a que participen y creen todas las que necesiten! Mediante esa herramienta podemos resolver todas sus dudas y acelerar su aprendizaje.

### GitHub [Issues](https://docs.github.com/en/issues)

### GitHub [Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects)

### GitHub [Wikis](https://docs.github.com/en/communities/documenting-your-project-with-wikis)

### GitHub [Pull Requests](https://docs.github.com/en/pull-requests)

### GitHub [CLI](https://docs.github.com/en/github-cli)

## Programación

Aquí te mostramos un video breve de [Brais Moure](https://mouredev.com) como introducción al arte de programar y todos los consejos y conceptos básicos que conviene conocer para empezar:

[![Introducción a la  Programación](https://img.youtube.com/vi/mIVbUb7shE8/0.jpg)](https://www.youtube.com/watch?v=mIVbUb7shE8)

Sin importar el lenguaje con el que programes, esta información te será de utilidad. La serie de videos que compartimos aquí se trata de un curso de "Lógica de Programación" con la mayoría de ejercicios ejemplificados con Python pero que están diseñados para adaptarlo a tu lenguaje de programación de preferencia.

El curso consta de 3 videos de múltiples horas, lo imparte Brais Moure ([MoureDev](https://mouredev.com)) y te dará fundamentos sólidos para cualquiera de tus proyectos de software.

**Parte I:**

[![Curso de Lógica de Programación Parte I](https://img.youtube.com/vi/TdITcVD64zI/0.jpg)](httpshttps://www.youtube.com/watch?v=TdITcVD64zI)

**Parte II:**

[![Curso de Lógica de Programación Parte II](https://img.youtube.com/vi/b-kk1WQo-YA/0.jpg)](https://www.youtube.com/watch?v=b-kk1WQo-YA)

**Parte III:**

[![Curso de Lógica de Programación Parte III](https://img.youtube.com/vi/ASBC5drF-QU/0.jpg)](https://www.youtube.com/watch?v=ASBC5drF-QU)

Recuerda que cada proyecto de programación es una oportunidad para practicar Git y GitHub. ¿Por qué no construir tu portafolio en GitHub mientras avanzas en el curso? ¡Así guardas tu progreso y demuestras al mundo tus habilidades!

## GitHub para Ciencias de la Computación en Acción: `CS50`

Con los recursos proveídos anteriormente se pueden establecer buenas bases tanto de los sistemas de control de versiones y gestión de proyectos de software como la lógica necesaria para programar eficientemente. Sin embargo, aunque importante, es solo el principio. Son herramientas que le ayudan a cualquiera independientemente del rol que desempeñen a futuro, pero aún así a menudo es confuso encontrar una ruta estructurada para seguir aprendiendo.

Cursos tanto gratuitos como de pago existen muchos para escoger dependiendo de las preferencias de cada quién. Mucho más que el recurso de aprendizaje en sí lo de mayor importancia es ser consistente con la ruta escogida y siempre practicar, todos los días.

Teniendo eso en consideración, recomendamos fuertemente los cursos que provee Harvard gratuitamente (solo se paga por la certificación) en edX: [CS50](https://edx.org/cs50). Consiste de una serie de cursos abiertos y con el más alto nivel académico, incluyendo todo el material y las experiencias que se les imparten a los estudiantes de Harvard. Ahí se muestra la ruta a seguir para aprender a programar en muchas áreas que se pueden elegir, tales como web, ciberseguridad, inteligencia artificial, etc.

Para completar satisfactoriamente los laboratorios de CS50, es necesario manejar una cuenta de GitHub y así poder usar los [GitHub Codespacces](https://docs.github.com/en/codespaces) que se proveen.

Este video realiza una introducción y reseña al material de CS50.

_Harvard's Free coding courses are excellent. You need to take them._

[![Harvard's Free coding courses are excellent. You need to take them.](https://img.youtube.com/vi/WwEcPcfRlD0/0.jpg)](https://www.youtube.com/watch?v=WwEcPcfRlD0)

Todas las clases (_"lectures"_) están disponibles tanto en edX como en YouTube. Aquí se puede ver la primera clase que se enfoca en Scratch: **lógica y algoritmos** para programar. Algo destacable de los cursos de CS50 es que se trata de un curso de programación orientado a la lógica, no a la sintaxis de lenguajes de programación. Por eso en el curso introductorio (CS50x) se enseñan varios lenguajes de programación comunes así como los diferentes paradigmas que poseen. El objetivo no es dominar una tecnología específica sino aprender a **resolver problemas**.

_CS50x 2024 - Lecture 0 - Scratch_

[![CS50x 2024 - Lecture 0 - Scratch](https://img.youtube.com/vi/3LPJfIKxwWc/0.jpg)](https://www.youtube.com/watch?v=3LPJfIKxwWc)

Para acceder a todo el catálogo de los cursos de CS50 se puede visitar [este enlace](https://www.edx.org/cs50).

## Marcos de trabajo ágiles y Scrum implementado en GitHub

🚧🚧 Próximamente.

## Roles en Tecnología

🚧🚧 Próximamente.

## Herramientas de los profesionales altamente efectivos: _optimizar tu LinkedIn, GitHub, CV, elevator pitch y red de contactos_

### Perfil de LinkedIn: _tu presencia digital_

¡Revisando LinkedIn de la comunidad! ¡Dando consejos y cosas a mejorar!

[![¡Revisando LinkedIn de la comunidad! ¡Dando consejos y cosas a mejorar!](https://img.youtube.com/vi/5sxcXdj6tjs/0.jpg)](https://www.youtube.com/watch?v=5sxcXdj6tjs)

### Perfil de GitHub: _tu portafolio_

¿Qué hace que un GitHub sea "bueno"?

[![¿Qué hace que un GitHub sea "bueno"?](https://img.youtube.com/vi/FKuwHUzAkQ4/0.jpg)](https://www.youtube.com/watch?v=FKuwHUzAkQ4)

¿Cómo crear el PROYECTO PERFECTO para tu PORTAFOLIO como programador?

[![¿Cómo crear el PROYECTO PERFECTO para tu PORTAFOLIO como programador?](https://img.youtube.com/vi/5W4NgYsoNM4/0.jpg)](https://www.youtube.com/watch?v=5W4NgYsoNM4)

¿Cómo crear el PORTAFOLIO PERFECTO para PROGRAMADORES?

[![¿Cómo crear el PORTAFOLIO PERFECTO para PROGRAMADORES?](https://img.youtube.com/vi/zFbTXe1yFGA/0.jpg)](https://www.youtube.com/watch?v=zFbTXe1yFGA)

### Curriculum Vitae (CV): _tu experiencia profesional_

TRUCOS para mejorar tu CV para ser contratado por Leonardo Poza [miduConf]

[![TRUCOS para mejorar tu CV para ser contratado por Leonardo Poza [miduConf]](https://img.youtube.com/vi/ybQ9x37FXlA/0.jpg)](https://www.youtube.com/watch?v=ybQ9x37FXlA)

### Elevator pitch: _¿Quién eres?_

The Best Way To Answer “So What Do You Do?” | Clay Hebert | TEDxReno

[![The Best Way To Answer “So What Do You Do?” | Clay Hebert | TEDxReno](https://img.youtube.com/vi/Ow9qahWkFeQ/0.jpg)](https://www.youtube.com/watch?v=Ow9qahWkFeQ)

Sell Your Ideas the Steve Jobs Way

[![Sell Your Ideas the Steve Jobs Way](https://img.youtube.com/vi/0q-wvAIeUgk/0.jpg)](https://www.youtube.com/watch?v=0q-wvAIeUgk)

### Habilidades blandas: _comunicación, liderazgo, construir tu red de contactos y más_

**Comunicación**

Think Fast, Talk Smart: Communication Techniques

[![Think Fast, Talk Smart: Communication Techniques](https://img.youtube.com/vi/HAnw168huqA/0.jpg)](https://www.youtube.com/watch?v=HAnw168huqA)

**Networking: red de contactos**

Tom Friel: How to Network

[![Tom Friel: How to Network](https://img.youtube.com/vi/rW-Ui6j60AM/0.jpg)](https://www.youtube.com/watch?v=rW-Ui6j60AM)

Effective Ways of Engaging in Small Group Networking Conversations

[![Effective Ways of Engaging in Small Group Networking Conversations](https://img.youtube.com/vi/WO7AFZWjy0E/0.jpg)](https://www.youtube.com/watch?v=WO7AFZWjy0E)

**Liderazgo**

Great leadership starts with self-leadership | Lars Sudmann | TEDxUCLouvain

[![Great leadership starts with self-leadership | Lars Sudmann | TEDxUCLouvain](https://img.youtube.com/vi/vlpKyLklDDY/0.jpg)](https://www.youtube.com/watch?v=vlpKyLklDDY)

Career Pathways to Executive Management (the full video)

[![Career Pathways to Executive Management (the full video)](https://img.youtube.com/vi/etnIIZRgI4g/0.jpg)](https://www.youtube.com/watch?v=etnIIZRgI4g)

## Agradecimientos

Esta experiencia de aprendizaje ha sido posible gracias a la inspiración de de estos increíbles sitios open source para aprender desarrollo web:

- [The Odin Project](https://www.theodinproject.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

Especialmente si te interesa programar full stack en JavaScript, estos recursos son 1000% recomendables.
