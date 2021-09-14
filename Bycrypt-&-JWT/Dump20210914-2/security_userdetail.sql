-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: security
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `userdetail`
--

DROP TABLE IF EXISTS `userdetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `userdetail` (
  `userid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `mobile` varchar(45) DEFAULT NULL,
  `password` varchar(145) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`userid`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userdetail`
--

LOCK TABLES `userdetail` WRITE;
/*!40000 ALTER TABLE `userdetail` DISABLE KEYS */;
INSERT INTO `userdetail` VALUES (1,'Rohit Sharma','aa@g.com','123','$2b$10$DPZoT/OA.VMOhBlh797BDuJtx/TpzbJFhQuzujqUgxBSumfqiY0jy',NULL,NULL),(2,'rohit','ab@g.com','12','$2b$10$2v8a5kqHFvKm07.wwKNzKefXgLNfe5HynMlQVrOQr1wP8Hp.6n5Em',NULL,NULL),(5,'rohit','abb@g.com','1222','$2b$10$p44ymAWpCjEo3sGspdItHuUGQjF8lpK9gGoUF8JR1TEMKjZE165Xa',NULL,NULL),(7,'rohit1','abba@g.com','1234567890','$2b$10$WUgoWWClp9D5RikI.2mo2.5aZXRs12H0idyiTBkfgOVVkW04aYPDi',NULL,NULL),(17,'rohit1','abbaa@g.com','1234567891','$2b$10$rlvFY4fiJSFtpT9.7BIabumMd5mTgTLBhJB90K6hNj34/yroNpGTy',NULL,NULL),(18,'rohit','acda@g.com','1234567890','$2b$10$ETube2xUV6JyLujHU5XzOOqA7rNtQ3i19sk2FqyRXlSGVC.NEMkRC','aa','aa'),(20,'aa','kk@g','4561237890','$2b$10$QQRwnZ/j/cm8iZq/4o4PruJUQP6TRpm1eKSg9b3Ert0R05rVKSOgu','abcd','aa'),(21,'RohitSS','rohit@g.com','7894561325','$2b$10$AOFtTE7GrFi49HUgYG.8Aexp/RTJ8UngRKbBUs8m.56cO7xP9oOve','rohit@','aa'),(24,'Rohit Kumar Sharma','abcd@g.com','1234567890','$2b$10$taJBw7X9OXhIzO1ChU.qcOAQgQRNdu2kZwnoPY3Sud1xZFifpjHmS','abcdefgh','abcsa'),(25,'Rohit Kumar Sharma','abcde@g.com','1234567890','$2b$10$tRsxTPYSPKsgWNIxLVVxJuLh1T4e8j5bulCSIRmUkdtJdRFwzh6EC','abcdefghfa','abcsa'),(26,'Hashmukh','hashmukh123@gmail.com','1234567890','$2b$10$ttUYy4ykud2tWMpScbpadOBeoDkr5xyX6c5uavwoz4GUBmlxKWQim','Hashmukh12','123');
/*!40000 ALTER TABLE `userdetail` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-14 15:51:38
