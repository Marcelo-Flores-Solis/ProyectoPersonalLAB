-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 24-12-2025 a las 05:44:59
-- Versión del servidor: 8.4.7
-- Versión de PHP: 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cefiro_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mensajes`
--

DROP TABLE IF EXISTS `mensajes`;
CREATE TABLE IF NOT EXISTS `mensajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mensaje` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `mensajes`
--

INSERT INTO `mensajes` (`id`, `nombre`, `email`, `mensaje`, `fecha`) VALUES
(1, 'Prueba Sistema', 'admin@cefiro.com', 'Bienvenido a tu base de datos', '2025-12-24 00:29:36'),
(2, 'cefurro', 'cefurro@gmail', 'te quiero mano\r\n', '2025-12-24 00:35:53'),
(3, 'Laura García', 'laura.g@email.com', '¡Hola! Me encantó la sección de ajedrez. ¿Podrías agregar partidas de Bobby Fischer? Sería genial analizarlas.', '2025-12-24 05:44:35'),
(4, 'Carlos Gamer', 'carlos99@juegos.net', 'El diseño de la sección de juegos está brutal con esos colores neón. ¿Qué librería usaste para las animaciones?', '2025-12-24 05:44:35'),
(5, 'Profesor Música', 'piano@escuela.edu', 'Excelente herramienta el piano virtual. Lo usaré con mis alumnos para enseñar intervalos básicos. ¡Gracias!', '2025-12-24 05:44:35'),
(6, 'Ana Series', 'ana.movies@test.com', '¿Has visto Arcane? Deberías agregarla a tus recomendaciones de series, la animación y la historia encajan perfecto con tu estilo.', '2025-12-24 05:44:35'),
(7, 'Roberto Dev', 'robert@tech.co', 'Buen diseño web. Se nota que es todo código propio, la carga es muy rápida. Sigue así.', '2025-12-24 05:44:35'),
(8, 'Lucía Méndez', 'lucia.m@arte.com', 'Hola Cefiro, te escribo para preguntarte si aceptas colaboraciones para artículos sobre historia de la música.', '2025-12-24 05:44:35'),
(9, 'Test Bot', 'bot@sistema.internal', 'Esta es una prueba de caracteres especiales: ñ, á, é, í, ó, ú, ¿ ? ¡ !', '2025-12-24 05:44:35'),
(10, 'Juan Pérez', 'juan.perez@gmail.com', 'Me gustaría contactarte para un proyecto freelance. Revisa mi portafolio cuando puedas.', '2025-12-24 05:44:35');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
