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
-- Database: `filmovi`
--

-- --------------------------------------------------------

--
-- Table structure for table `filmovi`
--

DROP TABLE IF EXISTS `filmovi`;
CREATE TABLE IF NOT EXISTS `filmovi` (
  `movie_id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  `genre` varchar(50) NOT NULL,
  `written_by` varchar(100) NOT NULL,
  `directed_by` varchar(100) NOT NULL,
  `produced_by` varchar(100) NOT NULL,
  `actors` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `lenght` int(11) NOT NULL,
  `picture_path` varchar(255) NOT NULL,
  `avg_rate` decimal(11,0) DEFAULT '0',
  `num_votes` int(11) DEFAULT '0',
  PRIMARY KEY (`movie_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `filmovi`
--

INSERT INTO `filmovi` (`movie_id`, `title`, `description`, `genre`, `written_by`, `directed_by`, `produced_by`, `actors`, `year`, `lenght`, `picture_path`, `avg_rate`, `num_votes`) VALUES
(4, 'The Little Mermaid', 'A mermaid princess makes a Faustian bargain in an attempt to become human and win a princes love', 'Animation, Family, Fantasy ', 'John Musker, Ron Clements', 'Ron Clements, John Musker', 'Walt Disney Pictures, Silver Screen Partners IV', 'Jodi Benson, Samuel E. Wright, Rene Auberjonois', 1989, 84, 'pictures/mermaid_poster.jpg', '7', 5),
(2, 'Shrek', 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.', 'Animation, Adventure, Comedy', 'William Steig, Ted Elliott', 'Andrew Adamson, Vicky Jenson', 'Dreamworks', 'Mike Myers, Eddie Murphy, Cameron Diaz', 2001, 90, 'pictures/shrek.jpg', '8', 4),
(6, 'The Shawshank Redemption', 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', 'Drama', 'Stephen King, Frank Darabont', 'Frank Darabont', 'Castle Rock Entertainment', 'Tim Robbins, Morgan Freeman, Bob Gunton', 1994, 144, 'pictures/Shawshank.Redemption_Poster.png', '10', 2),
(12, 'Harry Potter and the Chamber of Secrets', 'A house-elf warns Harry against returning to Hogwarts, but he decides to ignore it. When students and creatures at the school begin to get petrified, Harry finds himself surrounded in mystery.', 'Action, Adventure', 'Stephen King, Frank Darabont', 'Chris Columbus', 'Warner Bros.', 'Daniel Redcliff, Emma Watson', 2002, 95, 'pictures/Chamba.jpg', '0', 0),
(13, 'Kad Porastem Bicu Kengur', 'Vozdovac sa pocetka 2000tih.', 'Comedy', 'Miroslav MomÄiloviÄ‡', 'Radivoje AndriÄ‡', 'Kosutnjak film', 'Sergej Trifunovic, Marija Karan, Nikola Djuricko', 2002, 96, 'pictures/kengur.jpg', '0', 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
