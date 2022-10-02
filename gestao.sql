-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 02, 2022 at 05:23 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gestao`
--

-- --------------------------------------------------------

--
-- Table structure for table `cadeira`
--

CREATE TABLE `cadeira` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cadeira`
--

INSERT INTO `cadeira` (`id`, `descricao`, `createdAt`, `updatedAt`) VALUES
(1, 'Cadeira 1', '2022-09-24 22:44:55', '2022-09-24 22:44:55'),
(2, 'Cadeira 2', '2022-09-24 22:45:04', '2022-09-24 22:45:04'),
(3, 'Cadeira 3', '2022-09-24 22:45:10', '2022-09-24 22:45:10'),
(4, 'Cadeira 4', '2022-09-24 22:45:14', '2022-09-24 22:45:14'),
(5, 'Cadeira 5', '2022-09-24 22:45:17', '2022-09-24 22:45:17'),
(6, 'Cadeira 6', '2022-09-24 22:45:21', '2022-09-24 22:45:21'),
(7, 'Cadeira 7', '2022-09-24 22:45:25', '2022-09-24 22:45:25'),
(8, 'Cadeira 8', '2022-09-24 22:45:32', '2022-09-24 22:45:32'),
(9, 'Cadeira 9', '2022-09-24 22:45:36', '2022-09-24 22:45:36'),
(10, 'Cadeira 10', '2022-09-24 22:45:40', '2022-09-24 22:45:40'),
(11, 'Cadeira 11', '2022-09-24 22:45:43', '2022-09-24 22:45:43'),
(12, 'Cadeira 12', '2022-09-24 22:45:47', '2022-09-24 22:45:47');

-- --------------------------------------------------------

--
-- Table structure for table `cadeiracurso`
--

CREATE TABLE `cadeiracurso` (
  `id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL,
  `cadera_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `cordcurso`
--

CREATE TABLE `cordcurso` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cordcurso`
--

INSERT INTO `cordcurso` (`id`, `usuario_id`, `curso_id`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, '2022-09-24 22:36:25', '2022-09-24 22:36:25'),
(2, 2, 3, '2022-09-24 22:36:25', '2022-09-24 22:36:25'),
(3, 3, 2, '2022-09-24 22:36:41', '2022-09-24 22:36:41'),
(4, 4, 4, '2022-09-24 22:36:48', '2022-09-24 22:36:48');

-- --------------------------------------------------------

--
-- Table structure for table `curso`
--

CREATE TABLE `curso` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `curso`
--

INSERT INTO `curso` (`id`, `descricao`, `createdAt`, `updatedAt`) VALUES
(1, 'IG1NA', '2022-09-24 22:23:18', '2022-09-24 22:23:18'),
(2, 'IG2NA', '2022-09-24 22:23:28', '2022-09-24 22:23:28'),
(3, 'IG3NA', '2022-09-24 22:23:37', '2022-09-24 22:23:37'),
(4, 'IG4NA', '2022-09-24 22:35:37', '2022-09-24 22:35:37');

-- --------------------------------------------------------

--
-- Table structure for table `cursocadeira`
--

CREATE TABLE `cursocadeira` (
  `id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL,
  `cadeira_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cursocadeira`
--

INSERT INTO `cursocadeira` (`id`, `curso_id`, `cadeira_id`, `createdAt`, `updatedAt`) VALUES
(1, 2, 1, '2022-09-24 22:47:49', '2022-09-24 22:47:49'),
(2, 2, 2, '2022-09-24 22:47:49', '2022-09-24 22:47:49'),
(3, 2, 3, '2022-09-24 22:47:49', '2022-09-24 22:47:49'),
(4, 1, 4, '2022-09-24 22:48:12', '2022-09-24 22:48:12'),
(5, 1, 5, '2022-09-24 22:48:12', '2022-09-24 22:48:12'),
(6, 1, 6, '2022-09-24 22:48:12', '2022-09-24 22:48:12'),
(7, 3, 7, '2022-09-24 22:48:26', '2022-09-24 22:48:26'),
(8, 3, 8, '2022-09-24 22:48:26', '2022-09-24 22:48:26'),
(9, 3, 9, '2022-09-24 22:48:26', '2022-09-24 22:48:26');

-- --------------------------------------------------------

--
-- Table structure for table `planoanalitico`
--

CREATE TABLE `planoanalitico` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `cadeira_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `curso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `planoanalitico`
--

INSERT INTO `planoanalitico` (`id`, `descricao`, `cadeira_id`, `createdAt`, `updatedAt`, `curso_id`) VALUES
(13, 'Descrição 01', 1, '2022-09-29 20:27:11', '2022-09-29 20:27:11', 2),
(14, 'Descrição 01', 2, '2022-09-29 20:28:31', '2022-09-29 20:28:31', 2);

-- --------------------------------------------------------

--
-- Table structure for table `planoitens`
--

CREATE TABLE `planoitens` (
  `id` int(11) NOT NULL,
  `descricao` varchar(255) DEFAULT NULL,
  `planoanalitico_id` int(11) NOT NULL,
  `concluido` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `planoitens`
--

INSERT INTO `planoitens` (`id`, `descricao`, `planoanalitico_id`, `concluido`, `createdAt`, `updatedAt`) VALUES
(21, 'Descricao do item 06', 13, 1, '2022-09-29 20:31:27', '2022-09-29 20:31:57');

-- --------------------------------------------------------

--
-- Table structure for table `professorcadeira`
--

CREATE TABLE `professorcadeira` (
  `id` int(11) NOT NULL,
  `cadeira_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `curso_id` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `professorcadeira`
--

INSERT INTO `professorcadeira` (`id`, `cadeira_id`, `usuario_id`, `curso_id`, `createdAt`, `updatedAt`) VALUES
(13, 1, 7, 2, '2022-09-29 20:06:07', '2022-09-29 20:06:07'),
(14, 2, 7, 2, '2022-09-29 20:06:07', '2022-09-29 20:06:07'),
(15, 3, 7, 2, '2022-09-29 20:06:07', '2022-09-29 20:06:07');

-- --------------------------------------------------------

--
-- Table structure for table `turma`
--

CREATE TABLE `turma` (
  `id` int(11) NOT NULL,
  `designacao` varchar(255) NOT NULL,
  `curso_id` int(11) NOT NULL,
  `turno` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `turma`
--

INSERT INTO `turma` (`id`, `designacao`, `curso_id`, `turno`, `createdAt`, `updatedAt`) VALUES
(1, 'Turma 01', 1, 'Diurno', '2022-09-24 22:43:31', '2022-09-24 22:43:31'),
(2, 'Turma 02', 2, 'Diurno', '2022-09-24 22:43:38', '2022-09-24 22:43:38'),
(3, 'Turma 03', 3, 'Diurno', '2022-09-24 22:43:57', '2022-09-24 22:43:57'),
(4, 'Turma 04', 4, 'Diurno', '2022-09-24 22:44:04', '2022-09-24 22:44:04');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `apelido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefone` varchar(255) NOT NULL,
  `senha` text NOT NULL,
  `role` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nome`, `apelido`, `email`, `telefone`, `senha`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Pedagogico Francisco', 'Mavie', 'francisco@gmail.com', '846461323', '$2b$10$Y9achPbCFwjs6lPhSvyVyO6jXrFcjHi4FNevWUnnHYxe7PkqiGpf6', 1, '2022-09-24 22:06:58', '2022-09-24 22:06:58'),
(2, 'Coordenador 1', 'Curso 1', 'cord1@gmail.com', '258846233437', '$2b$10$ZRyIlu2wyF9VcY8xCTm9LOgVAxvPCESjjjKjzO7gMVXZ4JymP.OoG', 2, '2022-09-24 22:11:33', '2022-09-24 22:11:33'),
(3, 'Coordenador 2', 'Curso 2', 'cord2@gmail.com', '258846233438', '$2b$10$Gz5DhF3gwuaZrY6XRTcCaO3/GL5ZVAaHLAxzdXlUU4x3jbI2RylLm', 2, '2022-09-24 22:12:43', '2022-09-24 22:12:43'),
(4, 'Coordenador 3', 'Curso 3', 'cord3@gmail.com', '258843233438', '$2b$10$zXU4mNWQ5MLUx451Hg4sE.bWuCXQxeinu5eWl6/e0Q7bOVhlsx6.y', 2, '2022-09-24 22:12:59', '2022-09-24 22:12:59'),
(5, 'Professor 01', 'Apelido', 'prof1@gmail.com', '258846233434', '$2b$10$3HEovAxh2OABxf2rWPhx3OXW7ZQco79/SKB3x5SiXOD08b6fzFYRu', 3, '2022-09-24 23:26:37', '2022-09-24 23:26:37'),
(6, 'Professor 02', 'Apelido', 'prof2@gmail.com', '258846223434', '$2b$10$duHNtkD2Lf59sn25J78fpOev6S4bgxEiqswCBblkA38aivtu0eRN6', 3, '2022-09-24 23:26:56', '2022-09-24 23:26:56'),
(7, 'Professor 03', 'Apelido', 'prof3@gmail.com', '258846223334', '$2b$10$9Z1bJ/ELNtWJWb2.iLhHH.fMuim8ks8G6K51ud8JIXqsWf3PjLteO', 3, '2022-09-24 23:27:07', '2022-09-24 23:27:07'),
(8, 'Professor 04', 'Apelido', 'prof4@gmail.com', '258846223344', '$2b$10$Ks.aaVU9YiYsGPhx2Tfo6OXHKaIqOv/JMtDEjomxH3KpX6Qqm7XuS', 3, '2022-09-24 23:27:18', '2022-09-24 23:27:18'),
(9, 'Professor 05', 'Apelido', 'prof5@gmail.com', '258846523344', '$2b$10$lpFfbxGxD0xA0cODy4K5Sey9YHQxwyTVyBmNkYa8CTfYwD5h/T1um', 3, '2022-09-24 23:27:29', '2022-09-24 23:27:29'),
(10, 'Professor 06', 'Apelido', 'prof6@gmail.com', '258846563344', '$2b$10$IM52zWRo46pZGY9qIoGuLeeGYuwv3sdUbVWKKOTF8tx84T2RDty6q', 3, '2022-09-24 23:27:38', '2022-09-24 23:27:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cadeira`
--
ALTER TABLE `cadeira`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `descricao` (`descricao`),
  ADD UNIQUE KEY `descricao_2` (`descricao`),
  ADD UNIQUE KEY `descricao_3` (`descricao`),
  ADD UNIQUE KEY `descricao_4` (`descricao`),
  ADD UNIQUE KEY `descricao_5` (`descricao`),
  ADD UNIQUE KEY `descricao_6` (`descricao`),
  ADD UNIQUE KEY `descricao_7` (`descricao`),
  ADD UNIQUE KEY `descricao_8` (`descricao`);

--
-- Indexes for table `cadeiracurso`
--
ALTER TABLE `cadeiracurso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cordcurso`
--
ALTER TABLE `cordcurso`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `curso`
--
ALTER TABLE `curso`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `descricao` (`descricao`),
  ADD UNIQUE KEY `descricao_2` (`descricao`),
  ADD UNIQUE KEY `descricao_3` (`descricao`),
  ADD UNIQUE KEY `descricao_4` (`descricao`),
  ADD UNIQUE KEY `descricao_5` (`descricao`),
  ADD UNIQUE KEY `descricao_6` (`descricao`),
  ADD UNIQUE KEY `descricao_7` (`descricao`),
  ADD UNIQUE KEY `descricao_8` (`descricao`);

--
-- Indexes for table `cursocadeira`
--
ALTER TABLE `cursocadeira`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `planoanalitico`
--
ALTER TABLE `planoanalitico`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `planoitens`
--
ALTER TABLE `planoitens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `professorcadeira`
--
ALTER TABLE `professorcadeira`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `turma`
--
ALTER TABLE `turma`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `telefone` (`telefone`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `telefone_2` (`telefone`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `telefone_3` (`telefone`),
  ADD UNIQUE KEY `email_4` (`email`),
  ADD UNIQUE KEY `telefone_4` (`telefone`),
  ADD UNIQUE KEY `email_5` (`email`),
  ADD UNIQUE KEY `telefone_5` (`telefone`),
  ADD UNIQUE KEY `email_6` (`email`),
  ADD UNIQUE KEY `telefone_6` (`telefone`),
  ADD UNIQUE KEY `email_7` (`email`),
  ADD UNIQUE KEY `telefone_7` (`telefone`),
  ADD UNIQUE KEY `email_8` (`email`),
  ADD UNIQUE KEY `telefone_8` (`telefone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cadeira`
--
ALTER TABLE `cadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `cadeiracurso`
--
ALTER TABLE `cadeiracurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cordcurso`
--
ALTER TABLE `cordcurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cursocadeira`
--
ALTER TABLE `cursocadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `planoanalitico`
--
ALTER TABLE `planoanalitico`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `planoitens`
--
ALTER TABLE `planoitens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `professorcadeira`
--
ALTER TABLE `professorcadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
