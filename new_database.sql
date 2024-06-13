-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for zerowaste
CREATE DATABASE IF NOT EXISTS `zerowaste` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `zerowaste`;

-- Dumping structure for table zerowaste.payments
CREATE TABLE IF NOT EXISTS `payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `subscription_type` enum('standard','pro','exclusive') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payment_method` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `valid_thru` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvv` varchar(4) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name_on_card` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `payments_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zerowaste.payments: ~1 rows (approximately)
INSERT IGNORE INTO `payments` (`id`, `user_id`, `subscription_type`, `payment_method`, `card_number`, `valid_thru`, `cvv`, `name_on_card`, `created_at`) VALUES
	(71, 47, 'pro', 'creditDebitCard', '5555555555554444', '12/23', '123', 'test', '2024-06-11 04:56:13'),
	(72, 65, 'pro', 'creditDebitCard', '5555555555554444', '12/24', '122', 'Ucil', '2024-06-11 05:25:54');

-- Dumping structure for table zerowaste.pickups
CREATE TABLE IF NOT EXISTS `pickups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `phone_number` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_general_ci,
  `residence_type` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `notes` text COLLATE utf8mb4_general_ci,
  `pickup_status` enum('requested','completed','canceled') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT 'requested',
  `proof_of_pickup` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `FK_pickups_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=85 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zerowaste.pickups: ~4 rows (approximately)
INSERT IGNORE INTO `pickups` (`id`, `user_id`, `phone_number`, `address`, `residence_type`, `notes`, `pickup_status`, `proof_of_pickup`, `created_at`) VALUES
	(80, 47, '6262', '6262', 'Apartemen', 'eaeaea', 'requested', NULL, '2024-06-11 04:56:13'),
	(82, 47, '222', '222', 'Rumah', 'test', 'requested', NULL, '2024-06-11 05:14:27'),
	(83, 47, '085156283645', 'Jakarta', 'Rumah', 'test', 'requested', 'proof_of_pickup-2024-6-11-12-15-12.jpg', '2024-06-11 05:15:12'),
	(84, 65, '6262', '6262', 'Rumah', NULL, 'requested', NULL, '2024-06-11 05:25:54');

-- Dumping structure for table zerowaste.unregistered_payments
CREATE TABLE IF NOT EXISTS `unregistered_payments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `unregistered_user_id` int DEFAULT NULL,
  `subscription_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `payment_method` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `card_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `valid_thru` varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `cvv` varchar(5) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name_on_card` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `unregistered_user_id` (`unregistered_user_id`),
  CONSTRAINT `unregistered_payments_ibfk_1` FOREIGN KEY (`unregistered_user_id`) REFERENCES `unregistered_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zerowaste.unregistered_payments: ~0 rows (approximately)

-- Dumping structure for table zerowaste.unregistered_pickups
CREATE TABLE IF NOT EXISTS `unregistered_pickups` (
  `id` int NOT NULL AUTO_INCREMENT,
  `unregistered_user_id` int DEFAULT NULL,
  `residence_type` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_general_ci,
  `proof_of_pickup` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `unregistered_user_id` (`unregistered_user_id`),
  CONSTRAINT `unregistered_pickups_ibfk_1` FOREIGN KEY (`unregistered_user_id`) REFERENCES `unregistered_users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zerowaste.unregistered_pickups: ~3 rows (approximately)
INSERT IGNORE INTO `unregistered_pickups` (`id`, `unregistered_user_id`, `residence_type`, `notes`, `proof_of_pickup`) VALUES
	(2, 2, 'Rumah', 'test', NULL),
	(3, 1, 'Kos', 'Rijal', NULL),
	(4, 2, 'Rumah', 'test', 'proof_of_pickup-2024-6-9-3-9-33.png');

-- Dumping structure for table zerowaste.unregistered_users
CREATE TABLE IF NOT EXISTS `unregistered_users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone_number` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zerowaste.unregistered_users: ~2 rows (approximately)
INSERT IGNORE INTO `unregistered_users` (`id`, `name`, `phone_number`, `address`, `email`) VALUES
	(1, 'admin', '085156283645', 'test', 'afghanekapangestu@gmail.com'),
	(2, 'test', '085156283645', 'bogor', 'afghanekapangesatu2@gmail.com');

-- Dumping structure for table zerowaste.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table zerowaste.users: ~3 rows (approximately)
INSERT IGNORE INTO `users` (`id`, `email`, `password`, `name`) VALUES
	(47, 'afghanekapangestu@gmail.com', '$2a$12$6hcLS1EitD0R9bIM.lu7.ublhO5VM2.13ydznbfM.zpEzrJt7g4ze', 'Afghan'),
	(63, 'test@gmail.com', '$2a$12$B2nSZRR54uMxv4jXahdKpOGJ9234jqrkYN14ggy3G5YmKDI8ssbWW', 'Test'),
	(64, 'test2@gmail.com', '$2a$12$wwMEuxy9SYhBaVt2bZoPhe9JUA/sXFADaeOv8saDGq2KnDPy3Qjti', 'test2'),
	(65, 'ucil@gmail.com', '$2a$12$4BgbwOJif0uJnfbMuvIM9u7dia9ZKzpMIBg3/sezc482MJw/ozLr6', 'ucil');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
