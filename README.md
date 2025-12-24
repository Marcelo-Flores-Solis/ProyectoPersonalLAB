# Cefiro Productions

###  URL del Proyecto
* **Estado:** Ejecución Local (Requiere Python y MySQL/WampServer)
* **Hospedaje** https://web-production-4c97e.up.railway.app/, en el hospedaje funciona el python pero no la base de datos

la base de datos funciona en mysql y se requiere de una base llamada cefiro_db, e importar todo lo que esta en la carpeta sql

posee un login escondido en http://localhost:8000/login con usuario admin y contra 123 para poder ver los mensajes recibidos en la base de datos en un tabla


### Descripción
Cefiro Productions aplicacion web personal que fusiona múltiples intereses: ajedrez, música (piano), videojuegos y series. El proyecto implementa una arquitectura , utilizando un servidor HTTP personalizado en Python que gestiona el enrutamiento y la lógica de backend. Cuenta con un sistema de contacto funcional que almacena mensajes en una base de datos MySQL, un panel de administración protegido por login para gestionar dichos mensajes, y una interfaz frontend moderna con animaciones JavaScript y diseño responsivo.

### Tecnologías Utilizadas

El proyecto ha sido desarrollado utilizando las siguientes tecnologías:

* **HTML5:** Estructura semántica de todas las páginas.
* **CSS3:** Diseño responsivo, variables CSS, Flexbox, Grid y animaciones personalizadas.
* **JavaScript:** Lógica del cliente, animaciones "Scroll Reveal" y sintetizador de audio (Web Audio API) para el piano virtual.
* **Python:** Servidor backend (`http.server`), manejo de rutas, lógica de login y conexión a base de datos.
* **SQL (MySQL):** Base de datos relacional para el almacenamiento persistente de los mensajes de contacto.
