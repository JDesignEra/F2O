-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 10, 2017 at 11:50 PM
-- Server version: 10.1.24-MariaDB
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `f2o`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `uid` int(255) NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `password` char(76) COLLATE utf8_unicode_520_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `bio` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `code` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`uid`, `email`, `password`, `name`, `title`, `bio`, `code`) VALUES
(1, 'tgm.joel@gmail.com', '$2y$10$0gyPo4mOZyvJOlqLZgun2.iNfmf.MuGJCSLSNmlgLnszPbc5kHGF6', 'Joel', 'Full-Stack Developer', 'I am a Freelance Full-Stack Developer and Designer with my branding, J.Design. I have been in this industry since 2012. Furthermore, I am skilled in various programming languages and design skills.', '');

-- --------------------------------------------------------

--
-- Table structure for table `experiences`
--

CREATE TABLE `experiences` (
  `uid` int(255) NOT NULL,
  `acc_uid` int(255) NOT NULL,
  `company` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `experiences`
--

INSERT INTO `experiences` (`uid`, `acc_uid`, `company`, `title`, `start_date`, `end_date`) VALUES
(1, 1, 'J.Design', 'Full-Stack Developer', '2012-02-15', 'Present'),
(2, 1, 'Game-Nexus', 'Founder', '2014-01-01', '2015-01-01'),
(3, 1, 'F2O', 'Founder', '2017-06-20', 'Present');

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `uid` int(255) NOT NULL,
  `acc_uid` int(255) NOT NULL,
  `skill` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

-- --------------------------------------------------------

--
-- Table structure for table `skill_types`
--

CREATE TABLE `skill_types` (
  `uid` int(255) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `select_icon` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `icon` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `skill_types`
--

INSERT INTO `skill_types` (`uid`, `type`, `select_icon`, `icon`) VALUES
(1, 'Code', 'code.png', 'fa-code'),
(2, 'Design', 'design.png', 'fa-paint-brush'),
(3, 'Development', 'development.png', 'fa-cogs'),
(4, 'Writing', 'writing.png', 'fa-pencil');

-- --------------------------------------------------------

--
-- Table structure for table `socials`
--

CREATE TABLE `socials` (
  `uid` int(255) NOT NULL,
  `acc_uid` int(255) NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `socials`
--

INSERT INTO `socials` (`uid`, `acc_uid`, `url`, `type`) VALUES
(1, 1, 'joel@jdesignera.com', 'Email'),
(2, 1, 'jdesignera', 'Facebook'),
(3, 1, 'https://jdesignera.com', 'Website'),
(4, 1, 'jdesignera', 'Behance');

-- --------------------------------------------------------

--
-- Table structure for table `social_types`
--

CREATE TABLE `social_types` (
  `uid` int(255) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- Dumping data for table `social_types`
--

INSERT INTO `social_types` (`uid`, `type`) VALUES
(1, 'Behance'),
(2, 'BitBucket'),
(3, 'DeviantArt'),
(4, 'Dribbble'),
(5, 'Email'),
(6, 'Etsy'),
(7, 'Facebook'),
(8, 'Flickr'),
(9, 'GitHub'),
(10, 'Google+'),
(11, 'Instagram'),
(12, 'Linkedin'),
(13, 'Pinterest'),
(14, 'Skype'),
(15, 'Snapchat'),
(16, 'SoundCloud'),
(17, 'Telegram'),
(18, 'Tumblr'),
(19, 'Twitter'),
(20, 'Website'),
(21, 'WhatsApp'),
(22, 'YouTube');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `acc_uid` (`acc_uid`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `acc_uid` (`acc_uid`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `skill_types`
--
ALTER TABLE `skill_types`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `socials`
--
ALTER TABLE `socials`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `uid` (`acc_uid`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `social_types`
--
ALTER TABLE `social_types`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `type` (`type`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `skill_types`
--
ALTER TABLE `skill_types`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `socials`
--
ALTER TABLE `socials`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `social_types`
--
ALTER TABLE `social_types`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `experiences`
--
ALTER TABLE `experiences`
  ADD CONSTRAINT `experiences_ibfk_1` FOREIGN KEY (`acc_uid`) REFERENCES `accounts` (`uid`);

--
-- Constraints for table `skills`
--
ALTER TABLE `skills`
  ADD CONSTRAINT `skills_ibfk_1` FOREIGN KEY (`acc_uid`) REFERENCES `accounts` (`uid`),
  ADD CONSTRAINT `skills_ibfk_2` FOREIGN KEY (`type`) REFERENCES `skill_types` (`type`);

--
-- Constraints for table `socials`
--
ALTER TABLE `socials`
  ADD CONSTRAINT `socials_ibfk_1` FOREIGN KEY (`acc_uid`) REFERENCES `accounts` (`uid`),
  ADD CONSTRAINT `socials_ibfk_2` FOREIGN KEY (`type`) REFERENCES `social_types` (`type`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
