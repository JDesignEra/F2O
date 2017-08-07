-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 07, 2017 at 08:50 PM
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
CREATE DATABASE IF NOT EXISTS `f2o` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_520_ci;
USE `f2o`;

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
  `photo` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL DEFAULT 'user-default.png',
  `cover` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL DEFAULT 'default-card-up.png',
  `code` varchar(4) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- RELATIONSHIPS FOR TABLE `accounts`:
--

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`uid`, `email`, `password`, `name`, `title`, `bio`, `photo`, `cover`, `code`) VALUES
(1, 'demo@test.com', '$2y$10$Qf/CwhVreXlvWoLNV3hGJOapwehxrM1DkzoE9ZoEyat6lOreh/WF2', 'Demo', '', '', 'user-default.png', 'default-card-up.png', ''),
(2, 'jon@test.com', '$2y$10$wPFU79D64GjyCS0Ll9rwHuDraMJ52.fDjtoA1U54x2XTcn/zex5e.', 'Jonathan Soh', 'Programmer', 'Skydiver, tattoo addict, band member, Swiss design-head and New School grad. Working at the intersection of design and purpose to craft an inspiring, compelling and authentic brand narrative. I\'m fueled by craft beer, hip-hop and tortilla chips.', 'profile-2.jpg', 'cover-2.jpg', ''),
(3, 'mz@test.com', '$2y$10$sMSQ6lRF73zZfqCWIOhRs.wNRsmI.Ri/n1KxKqdSY0eiAc7YCoRXO', 'Mark Zuckerberg', 'Founder of Facebook', 'Born on May 14, 1984, in White Plains, New York, Mark Zuckerberg co-founded the social-networking website Facebook out of his college dorm room.', 'profile-3.jpg', 'cover-3.jpg', ''),
(4, 'bg@microsoft.com', '$2y$10$yvTCM66tEvsnbYeCCIgH7Ol8DOlBHA0Pl0Km4YnmUMrrg0OGM6tCq', 'Bill Gates', 'Founder of Microsoft', 'Entrepreneur Bill Gates founded the world\'s largest software business, Microsoft, with Paul Allen, and subsequently became one of the richest men in the world.', 'profile-4.jpg', 'cover-4.png', ''),
(5, 'rj@test.com', '$2y$10$FfRb80dyPvfHVizHYct7Pe7CB1bCojuklmm3T9T4fZfsjReUwR3pW', 'Rob Janoff', 'Designer', 'Janoff designed the forgotten coloured stripes Apple logo. A testament to its simplicity and longevity (and it was created in only two weeks).', 'profile-5.jpg', 'cover-5.png', ''),
(6, 'tgm.joel@gmail.com', '$2y$10$sXEj2eGAPsAoQDwNOCkpHezPhw/J68k.g2lRteEb9yxSK2R6tG5IS', 'Joel', 'Full-Stack Developer', 'I am a Freelance Full-Stack Developer. I have been in the field since 2012 and I am armed with a broad range of expertise skills. I am capable of setting up a professional website, graphic designing, and programming. Within my leisure time, I enjoy design', 'profile-6.jpg', 'cover-6.png', '');

-- --------------------------------------------------------

--
-- Table structure for table `educations`
--

CREATE TABLE `educations` (
  `uid` int(255) NOT NULL,
  `acc_uid` int(255) NOT NULL,
  `school` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `degree` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `field` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `start_date` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `end_date` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- RELATIONSHIPS FOR TABLE `educations`:
--   `acc_uid`
--       `accounts` -> `uid`
--

--
-- Dumping data for table `educations`
--

INSERT INTO `educations` (`uid`, `acc_uid`, `school`, `degree`, `field`, `start_date`, `end_date`) VALUES
(1, 2, 'ITE College Central', 'Higher Nitec', 'Information Technology', '2015-07-15', '2017-06-08'),
(2, 3, 'Harvard', 'Diploma', 'Information Technology', '2014-08-01', '2015-08-01'),
(3, 6, 'Nanyang Polytechnic', 'Diploma', 'Business Informatics', '2017-04-01', 'Present');

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
-- RELATIONSHIPS FOR TABLE `experiences`:
--   `acc_uid`
--       `accounts` -> `uid`
--

--
-- Dumping data for table `experiences`
--

INSERT INTO `experiences` (`uid`, `acc_uid`, `company`, `title`, `start_date`, `end_date`) VALUES
(1, 2, 'IBM', 'Elite Programmer', '2014-07-10', 'Present'),
(2, 3, 'Facebook', 'Co-Founder', '2014-08-21', 'Present'),
(3, 4, 'Microsoft', 'Founder', '2012-08-01', 'Present'),
(4, 6, 'J.Design', 'Founder', '2012-08-01', 'Present'),
(5, 6, 'F2O', 'Founder', '2017-06-01', 'Present');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `uid` int(255) NOT NULL,
  `acc_uid` int(255) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `subject` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `message` varchar(2000) COLLATE utf8_unicode_520_ci NOT NULL,
  `status` varchar(10) COLLATE utf8_unicode_520_ci NOT NULL DEFAULT 'new'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- RELATIONSHIPS FOR TABLE `messages`:
--   `acc_uid`
--       `accounts` -> `uid`
--

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`uid`, `acc_uid`, `name`, `email`, `subject`, `message`, `status`) VALUES
(1, 6, 'Test', 'test@test.com', 'Test Contact User Form', 'Testing if the contact user form is working', ''),
(2, 6, 'Jon', 'jon@test.com', 'Test Contact User Form Again', 'Once again I am testing if the contact user form is working as intended', 'new'),
(3, 6, 'Test Company', 'testc@test.com', 'Testing Contact User Form 3', 'Testing contact user form again, this is the third test.', 'new');

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
-- RELATIONSHIPS FOR TABLE `skill_types`:
--

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
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `uid` int(255) NOT NULL,
  `acc_uid` int(255) NOT NULL,
  `skill` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- RELATIONSHIPS FOR TABLE `skills`:
--   `acc_uid`
--       `accounts` -> `uid`
--   `type`
--       `skill_types` -> `type`
--

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`uid`, `acc_uid`, `skill`, `type`) VALUES
(1, 2, 'Java', 'Code'),
(2, 2, 'Objective-C', 'Code'),
(3, 2, 'C#', 'Code'),
(4, 2, 'Javascript', 'Code'),
(5, 3, 'Javascript', 'Code'),
(6, 3, 'Social Site Development', 'Development'),
(7, 3, 'Web Design', 'Design'),
(8, 4, 'Operating System Development', 'Development'),
(9, 4, 'Shell Script', 'Code'),
(10, 5, 'Graphic Design', 'Design'),
(11, 6, 'Java', 'Code'),
(12, 6, 'Adobe Photoshop', 'Design'),
(13, 6, 'Adobe Illustrator', 'Design'),
(14, 6, 'Content Writing', 'Writing'),
(15, 6, 'Javascript', 'Code'),
(16, 6, 'Objective-C', 'Code'),
(17, 6, 'C#', 'Code'),
(18, 6, 'Python', 'Code'),
(19, 6, 'Website Development', 'Development'),
(20, 6, 'jQuery', 'Code'),
(21, 6, 'Ajax', 'Code');

-- --------------------------------------------------------

--
-- Table structure for table `social_types`
--

CREATE TABLE `social_types` (
  `uid` int(255) NOT NULL,
  `type` varchar(255) COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_520_ci;

--
-- RELATIONSHIPS FOR TABLE `social_types`:
--

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
-- RELATIONSHIPS FOR TABLE `socials`:
--   `acc_uid`
--       `accounts` -> `uid`
--   `type`
--       `social_types` -> `type`
--

--
-- Dumping data for table `socials`
--

INSERT INTO `socials` (`uid`, `acc_uid`, `url`, `type`) VALUES
(1, 2, 'jon', 'BitBucket'),
(2, 2, 'jon', 'GitHub'),
(3, 2, 'jon@test.com', 'Email'),
(4, 3, 'zuck', 'Facebook'),
(5, 4, 'BillGates', 'Facebook'),
(6, 4, 'williamhgates', 'Linkedin'),
(7, 5, 'robjanoff', 'Twitter'),
(8, 5, 'rob.janoff.75', 'Facebook'),
(9, 6, 'Joel.Lifes', 'Facebook'),
(10, 6, 'jdesignera', 'Linkedin'),
(11, 6, 'tgm.joel', 'Skype'),
(12, 6, 'joel@jdesignera.com', 'Email'),
(13, 6, 'https://jdesignera.com', 'Website');

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
-- Indexes for table `educations`
--
ALTER TABLE `educations`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `acc_uid` (`acc_uid`);

--
-- Indexes for table `experiences`
--
ALTER TABLE `experiences`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `acc_uid` (`acc_uid`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `acc_uid` (`acc_uid`);

--
-- Indexes for table `skill_types`
--
ALTER TABLE `skill_types`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`uid`),
  ADD KEY `acc_uid` (`acc_uid`),
  ADD KEY `type` (`type`);

--
-- Indexes for table `social_types`
--
ALTER TABLE `social_types`
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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `educations`
--
ALTER TABLE `educations`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `experiences`
--
ALTER TABLE `experiences`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `skill_types`
--
ALTER TABLE `skill_types`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `social_types`
--
ALTER TABLE `social_types`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
--
-- AUTO_INCREMENT for table `socials`
--
ALTER TABLE `socials`
  MODIFY `uid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `educations`
--
ALTER TABLE `educations`
  ADD CONSTRAINT `educations_ibfk_1` FOREIGN KEY (`acc_uid`) REFERENCES `accounts` (`uid`);

--
-- Constraints for table `experiences`
--
ALTER TABLE `experiences`
  ADD CONSTRAINT `experiences_ibfk_1` FOREIGN KEY (`acc_uid`) REFERENCES `accounts` (`uid`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`acc_uid`) REFERENCES `accounts` (`uid`);

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
