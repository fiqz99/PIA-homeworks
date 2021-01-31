-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jan 31, 2021 at 10:53 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `korisnici`
--

-- --------------------------------------------------------

--
-- Table structure for table `korisnici`
--

DROP TABLE IF EXISTS `korisnici`;
CREATE TABLE IF NOT EXISTS `korisnici` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `nameSurname` varchar(50) NOT NULL,
  `e-mail` varchar(50) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `admin` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`user_id`, `nameSurname`, `e-mail`, `username`, `password`, `admin`) VALUES
(1, 'Filip Stefanovic', 'filipstfn@gmail.com', 'f', 'f', 0),
(2, 'Nemanja Trakic', 'nemaanja99@gmail.com', 'n', 'n', 1),
(8, 'Strahinja Krsmanovic', 'alpacino@gmail.com', 'straja99', 'straja99', 1),
(3, 'Marko', 'marko@markovic.com', 'marko1234', 'marko1234', 1),
(9, 'Jovana Jevtic', 'jovanaj@gmail.com', 'cruella', 'cruella99', 1),
(10, 'Aleksandar Stevanovic', 'sacakg99@gmail.com', 'sacakg99', 'sacakg99', 1),
(11, 'Anastasija Delic', 'nastja00@gmail.com', 'nastja00', 'nastja00', 1),
(16, 'Matija Matijevic', 'matijevicmesara@gmail.com', 'matija234', 'matija234', 1);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
