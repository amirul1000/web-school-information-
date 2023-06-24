-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2023 at 05:32 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bepzaschool`
--

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `company_name` varchar(127) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `country` varchar(127) DEFAULT NULL,
  `city` varchar(64) DEFAULT NULL,
  `state` varchar(64) DEFAULT NULL,
  `zip` varchar(64) DEFAULT NULL,
  `file_company_logo` varchar(256) DEFAULT NULL,
  `file_report_logo` varchar(256) DEFAULT NULL,
  `file_report_background` varchar(256) DEFAULT NULL,
  `report_footer` varchar(256) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`id`, `company_name`, `address`, `country`, `city`, `state`, `zip`, `file_company_logo`, `file_report_logo`, `file_report_background`, `report_footer`) VALUES
(1, 'Pata Corporation', 'C-20,JAkir Hossain Road,Block-E, Md-pur', 'US', 'PArk', 'NY', '1212', NULL, NULL, NULL, 'footer content XXXXXXXXX XXXXXXX');

-- --------------------------------------------------------

--
-- Table structure for table `content`
--

CREATE TABLE `content` (
  `id` int(10) NOT NULL,
  `content_users_id` int(10) DEFAULT NULL,
  `content_title` varchar(1024) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `content`
--

INSERT INTO `content` (`id`, `content_users_id`, `content_title`, `description`, `created_at`, `updated_at`) VALUES
(1, 9, 'uploading', 'ckeditor', '2022-08-12 13:24:51', NULL),
(2, 9, 'uploading', 'ckeditor', '2022-08-12 13:25:53', NULL),
(3, 9, 'uploading', 'ckeditor', '2022-08-13 20:41:15', NULL),
(4, 9, 'uploading', 'ckeditor', '2022-08-14 16:46:03', NULL),
(5, 9, 'uploading', 'ckeditor', '2022-08-14 16:46:06', NULL),
(6, 9, 'uploading', 'ckeditor', '2022-08-14 16:47:17', NULL),
(7, 9, 'uploading', 'ckeditor', '2022-08-14 16:47:36', NULL),
(8, 9, 'uploading', 'ckeditor', '2022-08-14 16:48:27', NULL),
(9, 9, 'uploading', 'ckeditor', '2022-08-14 16:50:31', NULL),
(10, 9, 'uploading', 'ckeditor', '2022-08-14 17:17:32', NULL),
(11, 9, 'uploading', 'ckeditor', '2022-08-24 03:55:42', NULL),
(12, 9, 'uploading', 'ckeditor', '2022-08-24 03:56:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `contentmeta`
--

CREATE TABLE `contentmeta` (
  `id` int(10) NOT NULL,
  `content_id` int(10) DEFAULT NULL,
  `meta_key` text DEFAULT NULL,
  `meta_value` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `contentmeta`
--

INSERT INTO `contentmeta` (`id`, `content_id`, `meta_key`, `meta_value`, `created_at`, `updated_at`) VALUES
(1, 1, '0', NULL, '2022-08-12 13:24:51', NULL),
(2, 2, '0', 'uploads/ckeditor/1743569_830022673692925_1707495855_n.jpg', '2022-08-12 13:25:54', NULL),
(3, 3, '0', 'uploads/ckeditor/immagine1.jpg', '2022-08-13 20:41:16', NULL),
(4, 4, NULL, 'uploads/ckeditor/immagine1.jpg', '2022-08-14 16:46:03', NULL),
(5, 5, NULL, 'uploads/ckeditor/immagine1.jpg', '2022-08-14 16:46:07', NULL),
(6, 6, NULL, 'uploads/ckeditor/immagine1.jpg', '2022-08-14 16:47:17', NULL),
(7, 7, '0', 'uploads/ckeditor/Product-concept.jpg', '2022-08-14 16:47:36', NULL),
(8, 8, '0', 'uploads/ckeditor/1603957118-winning-products.jpg', '2022-08-14 16:48:27', NULL),
(9, 9, '0', 'uploads/ckeditor/IMG_3249.jpg', '2022-08-14 16:50:31', NULL),
(10, 10, '0', 'uploads/ckeditor/IMG_3252.JPG', '2022-08-14 17:17:32', NULL),
(11, 11, '1', 'uploads/ckeditor/1661306142Product-concept.jpg', '2022-08-24 03:55:42', NULL),
(12, 12, '1', 'uploads/ckeditor/16613061851603957118-winning-products.jpg', '2022-08-24 03:56:25', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `content_manage`
--

CREATE TABLE `content_manage` (
  `id` int(10) NOT NULL,
  `content_type_id` int(10) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `content_manage`
--

INSERT INTO `content_manage` (`id`, `content_type_id`, `content`, `created_at`, `updated_at`) VALUES
(7, 81, '<p>bvb</p>\r\n', '2022-08-16 18:41:11', NULL),
(8, 45, '<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width: 500px;\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n			<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width: 500px;\">\r\n				<tbody>\r\n					<tr>\r\n						<td><img alt=\"\" src=\"http://localhost/bepzaschool/public/uploads/ckeditor/16613061851603957118-winning-products.jpg\" style=\"width: 880px; height: 450px;\" /></td>\r\n						<td>&nbsp;</td>\r\n					</tr>\r\n					<tr>\r\n						<td>&nbsp;</td>\r\n						<td>&nbsp;</td>\r\n					</tr>\r\n					<tr>\r\n						<td>&nbsp;</td>\r\n						<td>&nbsp;</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n\r\n			<p>&nbsp;</p>\r\n			</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>&nbsp;</td>\r\n			<td>&nbsp;</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<p>bbv</p>\r\n', '2022-08-16 18:41:21', '2022-08-24 03:56:28'),
(9, 36, '<p><img alt=\"\" src=\"http://localhost/bepzaschool/public/uploads/ckeditor/1661306142Product-concept.jpg\" style=\"width: 430px; height: 317px;\" />hjhj</p>\r\n', '2022-08-16 18:41:40', '2022-08-24 03:55:47');

-- --------------------------------------------------------

--
-- Table structure for table `content_type`
--

CREATE TABLE `content_type` (
  `id` int(10) NOT NULL,
  `content_name` varchar(256) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `content_type`
--

INSERT INTO `content_type` (`id`, `content_name`, `created_at`, `updated_at`) VALUES
(36, 'About Us', '2022-08-16 18:32:23', '2022-08-16 18:43:39'),
(37, 'Infastructure', '2022-08-16 18:32:34', NULL),
(38, 'At a Glance', '2022-08-16 18:32:48', NULL),
(39, 'Mission and Vission', '2022-08-16 18:32:58', NULL),
(40, 'Achievment', '2022-08-16 18:33:08', NULL),
(41, 'News and Events', '2022-08-16 18:33:20', NULL),
(42, 'Prefectship', '2022-08-16 18:33:32', NULL),
(43, 'History', '2022-08-16 18:33:43', NULL),
(44, 'Rules and Regulations', '2022-08-16 18:33:55', NULL),
(45, 'Uniform', '2022-08-16 18:34:05', NULL),
(46, 'Syllabus', '2022-08-16 18:34:14', NULL),
(47, 'Academic Calendar', '2022-08-16 18:34:26', NULL),
(48, 'Examination System', '2022-08-16 18:34:37', NULL),
(49, 'Notice', '2022-08-16 18:34:47', NULL),
(50, 'Absenteeism', '2022-08-16 18:34:58', NULL),
(51, 'Identity Card', '2022-08-16 18:35:10', NULL),
(52, 'Time Table', '2022-08-16 18:35:20', NULL),
(53, 'Kids Gallery', '2022-08-16 18:35:31', NULL),
(54, 'Governing Body', '2022-08-16 18:35:45', NULL),
(55, 'Chairman Message', '2022-08-16 18:35:56', NULL),
(56, 'Principal Message', '2022-08-16 18:36:07', NULL),
(57, 'Ex-Principal', '2022-08-16 18:36:20', NULL),
(58, 'Fees', '2022-08-16 18:36:30', NULL),
(59, 'Admission Circular', '2022-08-16 18:36:41', NULL),
(60, 'Online Admission', '2022-08-16 18:36:52', NULL),
(61, 'Admission Result', '2022-08-16 18:37:04', NULL),
(62, 'Prospectus', '2022-08-16 18:37:14', NULL),
(63, 'HSC RESULTS', '2022-08-16 18:37:27', NULL),
(64, 'SSC RESULTS', '2022-08-16 18:37:37', NULL),
(65, 'JSC RESULTS', '2022-08-16 18:37:49', NULL),
(66, 'PEC RESULTS', '2022-08-16 18:38:01', NULL),
(67, 'Scholarship RESULTS', '2022-08-16 18:38:11', NULL),
(68, 'Co Ordinator', '2022-08-16 18:38:23', NULL),
(69, 'School Teacher', '2022-08-16 18:38:34', NULL),
(70, 'College Teacher', '2022-08-16 18:38:45', NULL),
(71, 'Class Teacher', '2022-08-16 18:38:56', NULL),
(72, 'Staff', '2022-08-16 18:39:08', NULL),
(73, 'Club and Society', '2022-08-16 18:39:23', NULL),
(74, 'Anual Cultural', '2022-08-16 18:39:35', NULL),
(75, 'Games and Sports', '2022-08-16 18:39:46', NULL),
(76, 'Organizational Activities', '2022-08-16 18:39:58', NULL),
(77, 'Multimidia Class Room', '2022-08-16 18:40:10', NULL),
(78, 'Library', '2022-08-16 18:40:21', NULL),
(79, 'Transport', '2022-08-16 18:40:30', NULL),
(80, 'Photo Gallery', '2022-08-16 18:40:42', NULL),
(81, 'Video Gallery', '2022-08-16 18:40:54', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `id` int(11) NOT NULL,
  `country` varchar(200) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`id`, `country`) VALUES
(1, 'Afghanistan'),
(2, 'Åland Islands'),
(3, 'Albania'),
(4, 'Algeria'),
(5, 'American Samoa'),
(6, 'Andorra'),
(7, 'Angola'),
(8, 'Anguilla'),
(9, 'Antarctica'),
(10, 'Antigua and Barbuda'),
(11, 'Argentina'),
(12, 'Armenia'),
(13, 'Aruba'),
(14, 'Australia'),
(15, 'Austria'),
(16, 'Azerbaijan'),
(17, 'Bahamas'),
(18, 'Bahrain'),
(19, 'Bangladesh'),
(20, 'Barbados'),
(21, 'Belarus'),
(22, 'Belgium'),
(23, 'Belize'),
(24, 'Benin'),
(25, 'Bermuda'),
(26, 'Bhutan'),
(27, 'Bolivia'),
(28, 'Bosnia and Herzegovina'),
(29, 'Botswana'),
(30, 'Bouvet Island'),
(31, 'Brazil'),
(32, 'British Indian Ocean Territory'),
(33, 'Brunei Darussalam'),
(34, 'Bulgaria'),
(35, 'Burkina Faso'),
(36, 'Burundi'),
(37, 'Cambodia'),
(38, 'Cameroon'),
(39, 'Canada'),
(40, 'Cape Verde'),
(41, 'Cayman Islands'),
(42, 'Central African Republic'),
(43, 'Chad'),
(44, 'Chile'),
(45, 'China'),
(46, 'Christmas Island'),
(47, 'Cocos (Keeling) Islands'),
(48, 'Colombia'),
(49, 'Comoros'),
(50, 'Congo'),
(51, 'Congo, The Democratic Republic of the'),
(52, 'Cook Islands'),
(53, 'Costa Rica'),
(54, 'Côte D\'Ivoire'),
(55, 'Croatia'),
(56, 'Cuba'),
(57, 'Cyprus'),
(58, 'Czech Republic'),
(59, 'Denmark'),
(60, 'Djibouti'),
(61, 'Dominica'),
(62, 'Dominican Republic'),
(63, 'Ecuador'),
(64, 'Egypt'),
(65, 'El Salvador'),
(66, 'Equatorial Guinea'),
(67, 'Eritrea'),
(68, 'Estonia'),
(69, 'Ethiopia'),
(70, 'Falkland Islands (Malvinas)'),
(71, 'Faroe Islands'),
(72, 'Fiji'),
(73, 'Finland'),
(74, 'France'),
(75, 'French Guiana'),
(76, 'French Polynesia'),
(77, 'French Southern Territories'),
(78, 'Gabon'),
(79, 'Gambia'),
(80, 'Georgia'),
(81, 'Germany'),
(82, 'Ghana'),
(83, 'Gibraltar'),
(84, 'Greece'),
(85, 'Greenland'),
(86, 'Grenada'),
(87, 'Guadeloupe'),
(88, 'Guam'),
(89, 'Guatemala'),
(90, 'Guernsey'),
(91, 'Guinea'),
(92, 'Guinea-Bissau'),
(93, 'Guyana'),
(94, 'Haiti'),
(95, 'Heard Island and McDonald Islands'),
(96, 'Holy See (Vatican City State)'),
(97, 'Honduras'),
(98, 'Hong Kong'),
(99, 'Hungary'),
(100, 'Iceland'),
(101, 'India'),
(102, 'Indonesia'),
(103, 'Iran, Islamic Republic of'),
(104, 'Iraq'),
(105, 'Ireland'),
(106, 'Isle of Man'),
(107, 'Israel'),
(108, 'Italy'),
(109, 'Jamaica'),
(110, 'Japan'),
(111, 'Jersey'),
(112, 'Jordan'),
(113, 'Kazakhstan'),
(114, 'Kenya'),
(115, 'Kiribati'),
(116, 'Korea, Democratic People\'s Republic of'),
(117, 'Korea, Republic of'),
(118, 'Kuwait'),
(119, 'Kyrgyzstan'),
(120, 'Lao People\'s Democratic Republic'),
(121, 'Latvia'),
(122, 'Lebanon'),
(123, 'Lesotho'),
(124, 'Liberia'),
(125, 'Libyan Arab Jamahiriya'),
(126, 'Liechtenstein'),
(127, 'Lithuania'),
(128, 'Luxembourg'),
(129, 'Macao'),
(130, 'Macedonia, The Former Yugoslav Republic of'),
(131, 'Madagascar'),
(132, 'Malawi'),
(133, 'Malaysia'),
(134, 'Maldives'),
(135, 'Mali'),
(136, 'Malta'),
(137, 'Marshall Islands'),
(138, 'Martinique'),
(139, 'Mauritania'),
(140, 'Mauritius'),
(141, 'Mayotte'),
(142, 'Mexico'),
(143, 'Micronesia, Federated States of'),
(144, 'Moldova, Republic of'),
(145, 'Monaco'),
(146, 'Mongolia'),
(147, 'Montenegro'),
(148, 'Montserrat'),
(149, 'Morocco'),
(150, 'Mozambique'),
(151, 'Myanmar'),
(152, 'Namibia'),
(153, 'Nauru'),
(154, 'Nepal'),
(155, 'Netherlands'),
(156, 'Netherlands Antilles'),
(157, 'New Caledonia'),
(158, 'New Zealand'),
(159, 'Nicaragua'),
(160, 'Niger'),
(161, 'Nigeria'),
(162, 'Niue'),
(163, 'Norfolk Island'),
(164, 'Northern Mariana Islands'),
(165, 'Norway'),
(166, 'Oman'),
(167, 'Pakistan'),
(168, 'Palau'),
(169, 'Palestinian Territory, Occupied'),
(170, 'Panama'),
(171, 'Papua New Guinea'),
(172, 'Paraguay'),
(173, 'Peru'),
(174, 'Philippines'),
(175, 'Pitcairn'),
(176, 'Poland'),
(177, 'Portugal'),
(178, 'Puerto Rico'),
(179, 'Qatar'),
(180, 'Reunion'),
(181, 'Romania'),
(182, 'Russian Federation'),
(183, 'Rwanda'),
(184, 'Saint Barthélemy'),
(185, 'Saint Helena'),
(186, 'Saint Kitts and Nevis'),
(187, 'Saint Lucia'),
(188, 'Saint Martin'),
(189, 'Saint Pierre and Miquelon'),
(190, 'Saint Vincent and the Grenadines'),
(191, 'Samoa'),
(192, 'San Marino'),
(193, 'Sao Tome and Principe'),
(194, 'Saudi Arabia'),
(195, 'Senegal'),
(196, 'Serbia'),
(197, 'Seychelles'),
(198, 'Sierra Leone'),
(199, 'Singapore'),
(200, 'Slovakia'),
(201, 'Slovenia'),
(202, 'Solomon Islands'),
(203, 'Somalia'),
(204, 'South Africa'),
(205, 'South Georgia and the South Sandwich Islands'),
(206, 'Spain'),
(207, 'Sri Lanka'),
(208, 'Sudan'),
(209, 'Suriname'),
(210, 'Svalbard and Jan Mayen'),
(211, 'Swaziland'),
(212, 'Sweden'),
(213, 'Switzerland'),
(214, 'Syrian Arab Republic'),
(215, 'Taiwan, Province Of China'),
(216, 'Tajikistan'),
(217, 'Tanzania, United Republic of'),
(218, 'Thailand'),
(219, 'Timor-Leste'),
(220, 'Togo'),
(221, 'Tokelau'),
(222, 'Tonga'),
(223, 'Trinidad and Tobago'),
(224, 'Tunisia'),
(225, 'Turkey'),
(226, 'Turkmenistan'),
(227, 'Turks and Caicos Islands'),
(228, 'Tuvalu'),
(229, 'Uganda'),
(230, 'Ukraine'),
(231, 'United Arab Emirates'),
(232, 'United Kingdom'),
(233, 'United States'),
(234, 'United States Minor Outlying Islands'),
(235, 'Uruguay'),
(236, 'Uzbekistan'),
(237, 'Vanuatu'),
(238, 'Venezuela'),
(239, 'Viet Nam'),
(240, 'Virgin Islands, British'),
(241, 'Virgin Islands, U.S.'),
(242, 'Wallis And Futuna'),
(243, 'Western Sahara'),
(244, 'Yemen'),
(245, 'Zambia'),
(246, 'Zimbabwe');

-- --------------------------------------------------------

--
-- Table structure for table `file_management`
--

CREATE TABLE `file_management` (
  `id` int(10) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `file_upload` varchar(256) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(10) NOT NULL,
  `description` text DEFAULT NULL,
  `file_picture` varchar(256) DEFAULT NULL,
  `display_order_no` int(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `gallery`
--

INSERT INTO `gallery` (`id`, `description`, `file_picture`, `display_order_no`, `created_at`, `updated_at`) VALUES
(5, '', 'uploads/images/gallery/immagine1.jpg', 0, '2022-08-13 19:50:36', NULL),
(6, '', 'uploads/images/gallery/immagine2.jpg', 0, '2022-08-13 19:51:34', NULL),
(7, '', 'uploads/images/gallery/immagine3.jpg', 0, '2022-08-13 19:53:21', NULL),
(8, '', 'uploads/images/gallery/immagine1.jpg', 0, '2022-08-13 20:02:08', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(10) NOT NULL,
  `members_info` text DEFAULT NULL,
  `file_picture` varchar(256) DEFAULT NULL,
  `display_order_no` int(10) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `text_scroll`
--

CREATE TABLE `text_scroll` (
  `id` int(10) NOT NULL,
  `text_content` varchar(256) DEFAULT NULL,
  `display` enum('yes','no') DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `text_scroll`
--

INSERT INTO `text_scroll` (`id`, `text_content`, `display`, `created_at`, `updated_at`) VALUES
(1, 'fdfd dfdfdf fdfd fdfdfdf', 'yes', '2022-08-24 04:35:09', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(127) NOT NULL,
  `password` varchar(127) NOT NULL,
  `title` varchar(127) NOT NULL,
  `first_name` varchar(127) NOT NULL,
  `last_name` varchar(127) NOT NULL,
  `file_picture` varchar(256) DEFAULT NULL,
  `phone_no` varchar(20) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `company` varchar(127) DEFAULT NULL,
  `address` varchar(127) DEFAULT NULL,
  `city` varchar(127) DEFAULT NULL,
  `state` varchar(127) DEFAULT NULL,
  `zip` varchar(127) DEFAULT NULL,
  `country_id` varchar(127) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_type` enum('super','staff','client','visitor') NOT NULL,
  `status` enum('active','inactive') NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `title`, `first_name`, `last_name`, `file_picture`, `phone_no`, `dob`, `company`, `address`, `city`, `state`, `zip`, `country_id`, `created_at`, `updated_at`, `user_type`, `status`) VALUES
(9, 'xx@xx.com', 'xx', 'Mr.', 'John', 'Smith', NULL, NULL, NULL, '', '', '', '', '', '231', '2011-10-19 00:00:00', '2011-10-19 00:00:00', 'super', 'active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contentmeta`
--
ALTER TABLE `contentmeta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content_manage`
--
ALTER TABLE `content_manage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `content_type`
--
ALTER TABLE `content_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `file_management`
--
ALTER TABLE `file_management`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `text_scroll`
--
ALTER TABLE `text_scroll`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `content`
--
ALTER TABLE `content`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `contentmeta`
--
ALTER TABLE `contentmeta`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `content_manage`
--
ALTER TABLE `content_manage`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `content_type`
--
ALTER TABLE `content_type`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=247;

--
-- AUTO_INCREMENT for table `file_management`
--
ALTER TABLE `file_management`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `text_scroll`
--
ALTER TABLE `text_scroll`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
