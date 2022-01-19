-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 19, 2022 at 06:05 PM
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
(1, 'Cadeira 1', '2022-01-15 18:35:35', '2022-01-15 18:35:35'),
(2, 'Cadeira 2', '2022-01-15 18:35:40', '2022-01-15 18:35:40'),
(3, 'Cadeira 3', '2022-01-15 18:35:42', '2022-01-15 18:35:42'),
(4, 'Cadeira 4', '2022-01-15 18:35:44', '2022-01-15 18:35:44'),
(5, 'Cadeira 5', '2022-01-15 18:35:46', '2022-01-15 18:35:46'),
(6, 'Cadeira 6', '2022-01-15 18:35:48', '2022-01-15 18:35:48'),
(7, 'Cadeira 7', '2022-01-15 18:35:50', '2022-01-15 18:35:50'),
(8, 'Cadeira 8', '2022-01-15 18:35:52', '2022-01-15 18:35:52'),
(9, 'Cadeira 9', '2022-01-15 18:35:55', '2022-01-15 18:35:55'),
(10, 'Cadeira 10', '2022-01-15 18:35:59', '2022-01-15 18:35:59');

-- --------------------------------------------------------

--
-- Table structure for table `cordcurso`
--

CREATE TABLE `cordcurso` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `curso_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cordcurso`
--

INSERT INTO `cordcurso` (`id`, `usuario_id`, `createdAt`, `updatedAt`, `curso_id`) VALUES
(1, 4, '2021-12-11 20:22:29', '2021-12-11 20:22:29', 1);

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
(1, 'IS1A', '2021-12-11 19:55:15', '2021-12-11 19:55:15'),
(2, 'IS3N', '2021-12-11 19:55:34', '2021-12-11 19:55:34'),
(3, 'IG1A', '2021-12-11 19:56:31', '2021-12-11 19:56:31'),
(4, 'IG1N', '2021-12-11 19:56:37', '2021-12-11 19:56:37');

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
(3, 1, 3, '2021-12-07 17:50:22', '2021-12-07 17:50:22'),
(4, 1, 4, '2021-12-07 17:50:22', '2021-12-07 17:50:22'),
(5, 1, 5, '2021-12-07 17:50:22', '2021-12-07 17:50:22');

-- --------------------------------------------------------

--
-- Table structure for table `professorcadeira`
--

CREATE TABLE `professorcadeira` (
  `id` int(11) NOT NULL,
  `cadeira_id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `professorcadeira`
--

INSERT INTO `professorcadeira` (`id`, `cadeira_id`, `usuario_id`, `createdAt`, `updatedAt`) VALUES
(5, 1, 9, '2022-01-15 19:04:00', '2022-01-15 19:04:00');

-- --------------------------------------------------------

--
-- Table structure for table `turma`
--

CREATE TABLE `turma` (
  `id` int(11) NOT NULL,
  `designacao` smallint(6) NOT NULL,
  `curso_id` int(11) NOT NULL,
  `turno` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `turma`
--

INSERT INTO `turma` (`id`, `designacao`, `curso_id`, `turno`, `createdAt`, `updatedAt`) VALUES
(1, 0, 1, 'Noturno', '2022-01-07 18:19:07', '2022-01-07 18:19:07');

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
(4, 'Coordenador 1', 'Curso 1', 'cord1@gmail.com', '258846134837', '$2b$10$3FBqVnpV2VPZbv3LhReSUeCkTv9Wv3D0kXb7OCRWzjUI9W0YiuLWO', 2, '2021-12-11 19:46:03', '2021-12-11 19:46:03'),
(5, 'Coordenador 2', 'Curso 2', 'cord2@gmail.com', '258846234837', '$2b$10$.8.z2iJpW5USbhn54/Z9iu4anhsibiNU.Ubj/MokKe3JEaL0fj1Ui', 2, '2021-12-12 10:09:43', '2021-12-12 10:09:43'),
(6, 'Coordenador 3', 'Curso 3', 'cord3@gmail.com', '258846233837', '$2b$10$55EGopEoHKEVqYLS66.J2Omff1hgGV4PNqSCuWhHaq.wA4f2/1GXK', 2, '2021-12-12 10:10:42', '2021-12-12 10:10:42'),
(7, 'Coordenador 4', 'Curso 4', 'cord4@gmail.com', '258846233437', '$2b$10$ftTcVvHSy8agTuQgg8PGQujulPLgHQB2NWgM1sZjXyag6PEBnsITG', 2, '2021-12-12 10:11:10', '2021-12-12 10:11:10'),
(9, 'Professor 1', 'Curso 1', 'prof1@gmail.com', '258846233431', '$2b$10$N5tOtPzzjwHuUAmtpfs9suoCwLo5mjHINTOi2V3h1n050G8ZBT/D2', 3, '2022-01-05 20:40:34', '2022-01-05 20:40:34');

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
  ADD UNIQUE KEY `descricao_7` (`descricao`);

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
  ADD UNIQUE KEY `descricao_7` (`descricao`);

--
-- Indexes for table `cursocadeira`
--
ALTER TABLE `cursocadeira`
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
  ADD UNIQUE KEY `senha` (`senha`) USING HASH,
  ADD UNIQUE KEY `senha_2` (`senha`) USING HASH,
  ADD UNIQUE KEY `senha_3` (`senha`) USING HASH,
  ADD UNIQUE KEY `senha_4` (`senha`) USING HASH,
  ADD UNIQUE KEY `senha_5` (`senha`) USING HASH,
  ADD UNIQUE KEY `senha_6` (`senha`) USING HASH,
  ADD UNIQUE KEY `senha_7` (`senha`) USING HASH;

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cadeira`
--
ALTER TABLE `cadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `cordcurso`
--
ALTER TABLE `cordcurso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `curso`
--
ALTER TABLE `curso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cursocadeira`
--
ALTER TABLE `cursocadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `professorcadeira`
--
ALTER TABLE `professorcadeira`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `turma`
--
ALTER TABLE `turma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
