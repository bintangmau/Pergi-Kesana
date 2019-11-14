-- MySQL dump 10.13  Distrib 8.0.11, for Win64 (x86_64)
--
-- Host: localhost    Database: pergi_kesana
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
-- Table structure for table `buktitransfer`
--

DROP TABLE IF EXISTS `buktitransfer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `buktitransfer` (
  `idbuktitf` int(11) NOT NULL AUTO_INCREMENT,
  `buktiTF` varchar(500) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idPaket` int(11) NOT NULL,
  PRIMARY KEY (`idbuktitf`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `buktitransfer`
--

LOCK TABLES `buktitransfer` WRITE;
/*!40000 ALTER TABLE `buktitransfer` DISABLE KEYS */;
INSERT INTO `buktitransfer` VALUES (1,'/image/travel/BUKTITRANSFER1573655616706.jpg',31,31),(2,'/image/travel/BUKTITRANSFER1573656358369.jpg',31,31),(3,'/image/travel/BUKTITRANSFER1573657363346.jpg',31,12),(4,'/image/travel/BUKTITRANSFER1573657973097.jpg',0,12),(5,'/image/travel/BUKTITRANSFER1573658010834.jpg',0,12),(6,'/image/travel/BUKTITRANSFER1573658209572.jpg',31,12);
/*!40000 ALTER TABLE `buktitransfer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `food` (
  `idfood` int(11) NOT NULL AUTO_INCREMENT,
  `makanan` varchar(100) NOT NULL,
  `deskripsi` text NOT NULL,
  `idPaket` int(11) NOT NULL,
  `pathGambar` varchar(1000) NOT NULL,
  PRIMARY KEY (`idfood`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (13,'Dolma','Penampilannya sedikit menyerupai lemper khas Indonesia. Akan tetapi, bila lemper dibungkus dengan daun pisang, maka daun sebagai pembungkus makanan ini dapat di makan. Nama kuliner khas Turki ini yaitu Dolma.  Sayuran yang umum dipakai untuk membuat Dolma ini yaitu terong, paprika, tomat, kol serta daun anggur. Isi dari dolma ini yaitu nasi serta daging yang dicincang. Lalu, dolma akan di kukus sampai matang sebelum dihidangkan.',32,'/image/food/FOOD1573628230412.jpg'),(14,'Tunisia Brik','	Brik merupakan makanan yang terbuat dari telur utuh, keju mozzarella, mayones, tomat, dan ikan gindara. Semua bahan tersebut dibungkus dengan bentuk segitiga kemudian digoreng. Nantinya hidangan ini akan memiliki tekstur gurih, renyah, dan kriuk. Kenikmatan brik akan bertambah dengan lelehan keju mozzarella dan mayonnaise yang keluar saat digigit. Restoran di Tunisia biasanya menawarkan brik dengan tingkat kematangan telur yang dapat disesuaikan dengan selera Anda. Brik dapat dipesan dengan telur yang setengah matang atau matang. Untuk cara memakannya adalah dengan disantap langsung menggunakan tangan serta dicocolkan ke dalam saos atau sambal. Dari segi bentuk, brik Tunisia hadir dalam berbagai macam variasi sesuai pembuatnya. Bentuk yang umum dijumpai adalah bentuk samosa, calzone, atau segitiga. Isiannya juga dapat divariasikan seperti udang, kentang, atau keju. Jadi kuliner ini dapat memiliki variasi rasa yang beragam.',6,'/image/food/FOOD1573649035548.jpg'),(16,'Pizza','Pizza adalah hidangan yang sedap dari asal Italia, yang terdiri atas puyung yang biasanya berbentuk bulat, rata dengan adonan gandum yang diberi tomat, keju, dan berbagai bahan lainnya (teri, zaitun, daging, dll.) Dipanggang pada suhu tinggi dalam oven kayu bakar tradisional. Dalam aturan formal, seperti restoran, pizza dimakan dengan pisau dan garpu, tetapi dalam pengaturan biasa itu dipotong menjadi irisan untuk dimakan saat dipegang di tangan. Pizza kecil terkadang disebut pizzettas.',11,'/image/food/FOOD1573649134757.jpg'),(17,'Tortilla Espanola','Makanan yang satu ini bisa dibilang hampir mirip dengan pizza. Makanan ini memiliki rasa yang lezat dan enak. Jenis makanan ini bernama tortilla Espanola yang artinya kentang. Bahan utama pembuatan dari tortilla espanola adalah kentang dan telur.  Dalam mengolah makanan spanyol ini agar menjadi makanan tortilla espanola yaitu kentang yang sudah di cuci bersih ditumbuk dan dimasak menjadi satu. Makanan ini memiliki cita rasa yang lezat dan memberikan sensasi lembut yang dapat membuat orang ketanggihan dan ingin memakannya lagi.',12,'/image/food/FOOD1573649403518.jpg');
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `histori`
--

DROP TABLE IF EXISTS `histori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `histori` (
  `idhistori` int(11) NOT NULL AUTO_INCREMENT,
  `histori` varchar(1000) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idKategori` int(11) NOT NULL,
  `waktuHistori` varchar(1000) NOT NULL,
  PRIMARY KEY (`idhistori`)
) ENGINE=InnoDB AUTO_INCREMENT=328 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `histori`
--

LOCK TABLES `histori` WRITE;
/*!40000 ALTER TABLE `histori` DISABLE KEYS */;
INSERT INTO `histori` VALUES (1,'bintang Telah Melakukan Registrasi',0,3,'Nov 7, 2019'),(2,'Admin telah menghapus User bernama bintang',1,7,'Nov 7, 2019'),(3,'bintang Telah Melakukan Registrasi',0,3,'Nov 7, 2019'),(4,'bintang Telah melakukan Login',31,4,'Nov 7, 2019'),(5,'Telah melakukan isi ulang Kesana-PAY sebesar 10000 USD',31,1,'2019/11/7'),(6,'bintang Telah melakukan Login',31,4,'2019/11/7'),(7,'Bintang Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(8,'Telah melakukan pembayaran menuju Russia, Sebesar 1160 USD',31,5,'2019/11/7'),(9,'Andre Telah medaftar Travel menuju Tunisia',31,2,'2019/11/7'),(10,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(11,'Admin telah menghapus User bernama testis',1,7,'Nov 7, 2019'),(12,'Admin telah menghapus User bernama jonno',1,7,'Nov 7, 2019'),(13,'Admin telah menghapus User bernama admintes',1,7,'Nov 7, 2019'),(14,'Admin telah menghapus User bernama cobalagi',1,7,'Nov 7, 2019'),(15,'bintang Telah melakukan Login',31,4,'2019/11/7'),(16,'Maxs Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(17,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(18,'bintang Telah melakukan Login',31,4,'2019/11/7'),(19,'bintang Telah melakukan Login',31,4,'2019/11/7'),(20,'bintang Telah melakukan Login',31,4,'2019/11/7'),(21,'Maulana Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(22,'Maulana Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(23,'Maulana Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(24,'Maulana Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(25,'Maulana Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(26,'Maulana Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(27,'bintang Telah melakukan Login',31,4,'2019/11/7'),(28,'Maulana Telah medaftar Travel menuju Tunisia',31,2,'2019/11/7'),(29,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(30,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(31,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(32,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(33,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(34,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(35,'bintang Telah melakukan Login',31,4,'2019/11/7'),(36,'Maulana Telah medaftar Travel menuju Tunisia',31,2,'2019/11/7'),(37,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(38,'bintang Telah melakukan Login',31,4,'2019/11/7'),(39,'bintang Telah melakukan Login',31,4,'2019/11/7'),(40,'tes Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(41,'ckok Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(42,'bintang Telah melakukan Login',31,4,'2019/11/7'),(43,'jlkoko Telah medaftar Travel menuju Russia',31,2,'2019/11/7'),(44,'bintang Telah melakukan Login',31,4,'2019/11/7'),(45,'huh Telah medaftar Travel menuju Spain',31,2,'2019/11/7'),(46,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(47,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(48,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(49,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(50,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/7'),(51,'bintang Telah melakukan Login',31,4,'2019/11/7'),(52,'bintang Telah melakukan Login',31,4,'2019/11/7'),(53,'bintang Telah melakukan Login',31,4,'2019/11/7'),(54,'bintang Telah melakukan Login',31,4,'2019/11/7'),(55,'bintang Telah melakukan Login',31,4,'2019/11/7'),(56,'bintang Telah melakukan Login',31,4,'2019/11/7'),(57,'bintang Telah melakukan Login',31,4,'2019/11/8'),(58,'bintang Telah melakukan Login',31,4,'2019/11/8'),(59,'bintang Telah melakukan Login',31,4,'2019/11/8'),(60,'bintang Telah melakukan Login',31,4,'2019/11/8'),(61,'bintang Telah melakukan Login',31,4,'2019/11/8'),(62,'bintang Telah melakukan Login',31,4,'2019/11/8'),(63,'bintang Telah melakukan Login',31,4,'2019/11/8'),(64,'bintang Telah melakukan Login',31,4,'2019/11/8'),(65,'bintang Telah melakukan Login',31,4,'2019/11/8'),(66,'bintang Telah melakukan Login',31,4,'2019/11/8'),(67,'bintang Telah melakukan Login',31,4,'2019/11/8'),(68,'bintang Telah melakukan Login',31,4,'2019/11/8'),(69,'bintang Telah melakukan Login',31,4,'2019/11/8'),(70,'bintang Telah melakukan Login',31,4,'2019/11/8'),(71,'bintang Telah melakukan Login',31,4,'2019/11/8'),(72,'bintang Telah melakukan Login',31,4,'2019/11/8'),(73,'bintang Telah melakukan Login',31,4,'2019/11/8'),(74,'bintang Telah melakukan Login',31,4,'2019/11/8'),(75,'bintang Telah melakukan Login',31,4,'2019/11/8'),(76,'bintang Telah melakukan Login',31,4,'2019/11/8'),(77,'bintang Telah melakukan Login',31,4,'2019/11/8'),(78,'bintang Telah melakukan Login',31,4,'2019/11/8'),(79,'bintang Telah melakukan Login',31,4,'2019/11/8'),(80,'bintang Telah melakukan Login',31,4,'2019/11/8'),(81,'bintang Telah melakukan Login',31,4,'2019/11/8'),(82,'bintang Telah melakukan Login',31,4,'2019/11/8'),(83,'bintang Telah melakukan Login',31,4,'2019/11/8'),(84,'bintang Telah melakukan Login',31,4,'2019/11/8'),(85,'bintang Telah melakukan Login',31,4,'2019/11/8'),(86,'Tony Start Telah medaftar Travel menuju Tunisia',31,2,'2019/11/8'),(87,'bintang Telah melakukan Login',31,4,'2019/11/8'),(88,'bintang Telah melakukan Login',31,4,'2019/11/8'),(89,'bintang Telah melakukan Login',31,4,'2019/11/8'),(90,'bintang Telah melakukan Login',31,4,'2019/11/8'),(91,'bintang Telah melakukan Login',31,4,'2019/11/8'),(92,'bintang Telah melakukan Login',31,4,'2019/11/8'),(93,'Telah melakukan pembayaran menuju Tunisia, Sebesar 960 USD',31,5,'2019/11/8'),(94,'bintang Telah melakukan Login',31,4,'2019/11/8'),(95,'Andre cok Telah medaftar Travel menuju United States',31,2,'2019/11/8'),(96,'bintang Telah melakukan Login',31,4,'2019/11/8'),(97,'Andre Taulancok Telah medaftar Travel menuju Tunisia',31,2,'2019/11/8'),(98,'bintang Telah melakukan Login',31,4,'2019/11/8'),(99,'bintang Telah melakukan Login',31,4,'2019/11/8'),(100,'bintang Telah melakukan Login',31,4,'2019/11/8'),(101,'bintang Telah melakukan Login',31,4,'2019/11/8'),(102,'bintang Telah melakukan Login',31,4,'2019/11/8'),(103,'bintang Telah melakukan Login',31,4,'2019/11/8'),(104,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/8'),(105,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/8'),(106,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/8'),(107,'bintang Telah melakukan Login',31,4,'2019/11/8'),(108,'Ari Telah medaftar Travel menuju Tunisia',31,2,'2019/11/8'),(109,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/8'),(110,'bintang Telah melakukan Login',31,4,'2019/11/8'),(111,'Arri Telah medaftar Travel menuju Russia',31,2,'2019/11/8'),(112,'Telah melakukan pembayaran menuju Russia, Sebesar 1160 USD',31,5,'2019/11/8'),(113,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/8'),(114,'bintang Telah melakukan Login',31,4,'2019/11/8'),(115,'bintang Telah melakukan Login',31,4,'2019/11/8'),(116,'Bintank Telah medaftar Travel menuju Tunisia',31,2,'2019/11/8'),(117,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/8'),(118,'bintang Telah melakukan Login',31,4,'2019/11/8'),(119,'BintangMH Telah medaftar Travel menuju United States',31,2,'2019/11/8'),(120,'Telah melakukan pembayaran menuju United States, Sebesar 1360 USD',31,5,'2019/11/8'),(121,'Susu Coklat Telah medaftar Travel menuju Morocco',31,2,'2019/11/8'),(122,'bintang Telah melakukan Login',31,4,'2019/11/8'),(123,'bintang Telah melakukan Login',31,4,'2019/11/8'),(124,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/8'),(125,'bintang Telah melakukan Login',31,4,'2019/11/8'),(126,'bintang Telah melakukan Login',31,4,'2019/11/8'),(127,'Wkwk Telah medaftar Travel menuju United States',31,2,'2019/11/8'),(128,'Telah melakukan pembayaran menuju United States, Sebesar 1360 USD',31,5,'2019/11/8'),(129,' Telah Melakukan Registrasi',0,3,'2019/11/8'),(130,'Admin telah menghapus User bernama ',1,7,'Nov 8, 2019'),(131,' Telah Melakukan Registrasi',0,3,'2019/11/8'),(132,'Admin telah menghapus User bernama ',1,7,'Nov 8, 2019'),(133,' Telah Melakukan Registrasi',0,3,'2019/11/8'),(134,'Admin telah menghapus User bernama ',1,7,'Nov 8, 2019'),(135,'bintang Telah melakukan Login',31,4,'2019/11/9'),(136,'bintang Telah melakukan Login',31,4,'2019/11/9'),(137,'bintang Telah melakukan Login',31,4,'2019/11/9'),(138,'bintang Telah melakukan Login',31,4,'2019/11/9'),(139,'bintang Telah melakukan Login',31,4,'2019/11/9'),(140,'reza Telah Melakukan Registrasi',0,3,'2019/11/9'),(141,'bintang Telah melakukan Login',31,4,'2019/11/9'),(142,'bintang Telah melakukan Login',31,4,'2019/11/9'),(143,'bintang Telah melakukan Login',31,4,'2019/11/9'),(144,'bintang Telah melakukan Login',31,4,'2019/11/9'),(145,'bintang Telah melakukan Login',31,4,'2019/11/9'),(146,'bintang Telah melakukan Login',31,4,'2019/11/9'),(147,'bintang Telah melakukan Login',31,4,'2019/11/9'),(148,'bintang Telah melakukan Login',31,4,'2019/11/9'),(149,'bintang Telah melakukan Login',31,4,'2019/11/9'),(150,'bintang Telah melakukan Login',31,4,'2019/11/9'),(151,'bintang Telah melakukan Login',31,4,'2019/11/9'),(152,'bintang Telah melakukan Login',31,4,'2019/11/9'),(153,'bintang Telah melakukan Login',31,4,'2019/11/9'),(154,'bintang Telah melakukan Login',31,4,'2019/11/9'),(155,'bintang Telah melakukan Login',31,4,'2019/11/9'),(156,'bintang Telah melakukan Login',31,4,'2019/11/9'),(157,'Telah melakukan isi ulang Kesana-PAY sebesar 2000 USD',31,1,'2019/11/9'),(158,'reza Telah melakukan Login',35,4,'2019/11/9'),(159,'bintang Telah melakukan Login',31,4,'2019/11/9'),(160,'bintang Telah melakukan Login',31,4,'2019/11/9'),(161,'bintang Telah melakukan Login',31,4,'2019/11/9'),(162,'bintang Telah melakukan Login',31,4,'2019/11/9'),(163,'bintang Telah melakukan Login',31,4,'2019/11/9'),(164,'bintang Telah melakukan Login',31,4,'2019/11/9'),(165,'bintang Telah melakukan Login',31,4,'2019/11/9'),(166,'bintang Telah melakukan Login',31,4,'2019/11/9'),(167,'bintang Telah melakukan Login',31,4,'2019/11/11'),(168,'bintang Telah melakukan Login',31,4,'2019/11/11'),(169,'bintang Telah melakukan Login',31,4,'2019/11/11'),(170,'bintang Telah melakukan Login',31,4,'2019/11/11'),(171,'bintang Telah melakukan Login',31,4,'2019/11/11'),(172,'bintang Telah melakukan Login',31,4,'2019/11/11'),(173,'Pradytia Telah medaftar Travel menuju Tunisia',31,2,'2019/11/11'),(174,'Telah melakukan pembayaran menuju Tunisia, Sebesar 960 USD',31,5,'2019/11/11'),(175,'oihij Telah medaftar Travel menuju Russia',31,2,'2019/11/11'),(176,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/11'),(177,'bintang Telah melakukan Login',31,4,'2019/11/11'),(178,'coba Telah medaftar Travel menuju Spain',31,2,'2019/11/11'),(179,'bintang Telah melakukan Login',31,4,'2019/11/11'),(180,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/11'),(181,'bintang Telah melakukan Login',31,4,'2019/11/11'),(182,'bintang Telah melakukan Login',31,4,'2019/11/11'),(183,'bintang Telah melakukan Login',31,4,'2019/11/11'),(184,'bintang Telah melakukan Login',31,4,'2019/11/11'),(185,'bintang Telah melakukan Login',31,4,'2019/11/11'),(186,'bintang Telah melakukan Login',31,4,'2019/11/11'),(187,'bintang Telah melakukan Login',31,4,'2019/11/11'),(188,'bintang Telah melakukan Login',31,4,'2019/11/11'),(189,'bintang Telah melakukan Login',31,4,'2019/11/11'),(190,'bintang Telah melakukan Login',31,4,'2019/11/11'),(191,'bintang Telah melakukan Login',31,4,'2019/11/11'),(192,'bintang Telah melakukan Login',31,4,'2019/11/11'),(193,'bintang Telah melakukan Login',31,4,'2019/11/11'),(194,'bintang Telah melakukan Login',31,4,'2019/11/11'),(195,'bintang Telah melakukan Login',31,4,'2019/11/11'),(196,'bintang Telah melakukan Login',31,4,'2019/11/11'),(197,'bintang Telah melakukan Login',31,4,'2019/11/11'),(198,'bintang Telah melakukan Login',31,4,'2019/11/11'),(199,'bintang Telah melakukan Login',31,4,'2019/11/11'),(200,'bintang Telah melakukan Login',31,4,'2019/11/11'),(201,'bintang Telah melakukan Login',31,4,'2019/11/11'),(202,'bintang Telah melakukan Login',31,4,'2019/11/11'),(203,'bintang Telah melakukan Login',31,4,'2019/11/11'),(204,'bintang Telah melakukan Login',31,4,'2019/11/12'),(205,'bintang Telah melakukan Login',31,4,'2019/11/12'),(206,'bintang Telah melakukan Login',31,4,'2019/11/12'),(207,'bintang Telah melakukan Login',31,4,'2019/11/12'),(208,'bintang Telah melakukan Login',31,4,'2019/11/12'),(209,'bintang Telah melakukan Login',31,4,'2019/11/12'),(210,'bintang Telah melakukan Login',31,4,'2019/11/12'),(211,'bintang Telah melakukan Login',31,4,'2019/11/12'),(212,'bintang Telah melakukan Login',31,4,'2019/11/12'),(213,'bintang Telah melakukan Login',31,4,'2019/11/12'),(214,'bintang Telah melakukan Login',31,4,'2019/11/12'),(215,'bintang Telah melakukan Login',31,4,'2019/11/12'),(216,'bintang Telah melakukan Login',31,4,'2019/11/12'),(217,'bintang Telah melakukan Login',31,4,'2019/11/12'),(218,'Telah melakukan isi ulang Kesana-PAY sebesar 3000 USD',31,1,'2019/11/12'),(219,'bintang Telah melakukan Login',31,4,'2019/11/12'),(220,'bintang Telah melakukan Login',31,4,'2019/11/12'),(221,'Coba aja bayar tiket',0,8,'terserah'),(222,'bintang Telah melakukan Login',31,4,'2019/11/12'),(223,'Telah melakukan pembayaran Tiket menuju London sebesar 700',31,8,'2019/11/12'),(224,'bintang Telah melakukan Login',31,4,'2019/11/12'),(225,'bintang Telah melakukan Login',31,4,'2019/11/12'),(226,'bintang Telah melakukan Login',31,4,'2019/11/12'),(227,'Telah melakukan isi ulang Kesana-PAY sebesar 3000 USD',31,1,'2019/11/12'),(228,'Telah melakukan pembayaran Tiket menuju Berlin sebesar 500',31,8,'2019/11/12'),(229,'Telah melakukan pembayaran Tiket menuju Berlin sebesar 500',31,8,'2019/11/12'),(230,'bintang Telah melakukan Login',31,4,'2019/11/12'),(231,'Telah melakukan pembayaran Tiket menuju Berlin sebesar 500',31,8,'2019/11/12'),(232,'bintang Telah melakukan Login',31,4,'2019/11/12'),(233,'bintang Telah melakukan Login',31,4,'2019/11/12'),(234,'bintang Telah melakukan Login',31,4,'2019/11/12'),(235,'bintang Telah melakukan Login',31,4,'2019/11/12'),(236,'bintang Telah melakukan Login',31,4,'2019/11/12'),(237,'bintang Telah melakukan Login',31,4,'2019/11/12'),(238,'bintang Telah melakukan Login',31,4,'2019/11/12'),(239,'bintang Telah melakukan Login',31,4,'2019/11/12'),(240,'bintang Telah melakukan Login',31,4,'2019/11/12'),(241,'bintang Telah melakukan Login',31,4,'2019/11/12'),(242,'bintang Telah melakukan Login',31,4,'2019/11/12'),(243,'bintang Telah melakukan Login',31,4,'2019/11/12'),(244,'bintang Telah melakukan Login',31,4,'2019/11/12'),(245,'Telah melakukan pembayaran Tiket menuju Czevh sebesar 1200',31,8,'2019/11/12'),(246,'bintang Telah melakukan Login',31,4,'2019/11/12'),(247,'bintang Telah melakukan Login',31,4,'2019/11/12'),(248,'bintang Telah melakukan Login',31,4,'2019/11/12'),(249,'bintang Telah melakukan Login',31,4,'2019/11/12'),(250,'Eric NTINU Telah medaftar Travel menuju Canada',31,2,'2019/11/12'),(251,'akun Telah Melakukan Registrasi',0,3,'2019/11/12'),(252,'akun Telah melakukan Login',36,4,'2019/11/12'),(253,'Telah melakukan isi ulang Kesana-PAY sebesar 200 USD',36,1,'2019/11/12'),(254,'Telah melakukan isi ulang Kesana-PAY sebesar 2000 USD',36,1,'2019/11/12'),(255,'akun Telah medaftar Travel menuju Canada',36,2,'2019/11/12'),(256,'Tidak membayar, dan Travel dibatalkan',36,6,'2019/11/12'),(257,'bintang Telah melakukan Login',31,4,'2019/11/12'),(258,'Telah melakukan isi ulang Kesana-PAY sebesar 40000 USD',31,1,'2019/11/12'),(259,'bintang Telah melakukan Login',31,4,'2019/11/13'),(260,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/13'),(261,'Admin telah menghapus Travel menuju ljho',1,7,'Nov 13, 2019'),(262,'bintang Telah melakukan Login',31,4,'2019/11/13'),(263,'bintang Telah melakukan Login',31,4,'2019/11/13'),(264,'bintang Telah melakukan Login',31,4,'2019/11/13'),(265,'Admin telah menghapus Travel menuju tes',1,7,'Nov 13, 2019'),(266,'Admin telah menghapus Travel menuju cibatik',1,7,'Nov 13, 2019'),(267,'Admin telah menghapus Travel menuju ADMIN',1,7,'Nov 13, 2019'),(268,'Admin telah menghapus Travel menuju coba tokl',1,7,'Nov 13, 2019'),(269,'bintang Telah melakukan Login',31,4,'2019/11/13'),(270,'bintang Telah melakukan Login',31,4,'2019/11/13'),(271,'bintang Telah melakukan Login',31,4,'2019/11/13'),(272,'Telah melakukan pembayaran Tiket menuju Berlin sebesar 500',31,8,'2019/11/13'),(273,'bintang Telah melakukan Login',31,4,'2019/11/13'),(274,'bintang Telah melakukan Login',31,4,'2019/11/13'),(275,'bintang Telah melakukan Login',31,4,'2019/11/13'),(276,'bintang Telah melakukan Login',31,4,'2019/11/13'),(277,'Admin telah menghapus Travel menuju asd',1,7,'Nov 13, 2019'),(278,'Admin telah menghapus Travel menuju dasdsa',1,7,'Nov 13, 2019'),(279,'Admin telah menghapus Travel menuju asdsad',1,7,'Nov 13, 2019'),(280,'Admin telah menghapus Travel menuju dasdsa',1,7,'Nov 13, 2019'),(281,'Admin telah menghapus Travel menuju sadsa',1,7,'Nov 13, 2019'),(282,'Admin telah menghapus Travel menuju asdsa',1,7,'Nov 13, 2019'),(283,'bintang Telah melakukan Login',31,4,'2019/11/13'),(284,'coba aja Telah medaftar Travel menuju asdsa',31,2,'2019/11/13'),(285,'Telah melakukan pembayaran menuju asdsa, Sebesar 18.4 USD',31,5,'2019/11/13'),(286,'Admin telah menghapus Travel menuju asdsa',1,7,'Nov 13, 2019'),(287,'bintang Telah melakukan Login',31,4,'2019/11/13'),(288,'bintang Telah melakukan Login',31,4,'2019/11/13'),(289,'bintang Telah melakukan Login',31,4,'2019/11/13'),(290,'bintang Telah melakukan Login',31,4,'2019/11/13'),(291,'Iseng Telah medaftar Travel menuju Canada',31,2,'2019/11/13'),(292,'bintang Telah melakukan Login',31,4,'2019/11/13'),(293,'Telah melakukan pembayaran menuju Canada, Sebesar 1000 USD',31,5,'2019/11/13'),(294,'bintang Telah melakukan Login',31,4,'2019/11/13'),(295,'isenk Telah medaftar Travel menuju Spain',31,2,'2019/11/13'),(296,'bintang Telah melakukan Login',31,4,'2019/11/13'),(297,'bintang Telah melakukan Login',31,4,'2019/11/13'),(298,'bintang Telah melakukan Login',31,4,'2019/11/13'),(299,'bintang Telah melakukan Login',31,4,'2019/11/13'),(300,'bintang Telah melakukan Login',31,4,'2019/11/13'),(301,'cek Telah medaftar Travel menuju Russia',31,2,'2019/11/13'),(302,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/13'),(303,'bintang Telah melakukan Login',31,4,'2019/11/13'),(304,'bintang Telah melakukan Login',31,4,'2019/11/13'),(305,'bintang Telah melakukan Login',31,4,'2019/11/13'),(306,'bintang Telah melakukan Login',31,4,'2019/11/13'),(307,'bintang Telah melakukan Login',31,4,'2019/11/13'),(308,'cobimawon Telah medaftar Travel menuju Morocco',31,2,'2019/11/13'),(309,'bintang Telah melakukan Login',31,4,'2019/11/13'),(310,'bintang Telah melakukan Login',31,4,'2019/11/13'),(311,'Telah melakukan pembayaran Tiket menuju Brussel sebesar 600',31,8,'2019/11/13'),(312,'Telah melakukan pembayaran Tiket menuju Brussel sebesar 600',31,8,'2019/11/13'),(313,'bintang Telah melakukan Login',31,4,'2019/11/13'),(314,'bintang Telah melakukan Login',31,4,'2019/11/13'),(315,'Telah melakukan pembayaran Tiket menuju Brussel sebesar 600',31,8,'2019/11/13'),(316,'bintang Telah melakukan Login',31,4,'2019/11/13'),(317,'Telah melakukan pembayaran Tiket menuju London sebesar 700',31,8,'2019/11/13'),(318,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/13'),(319,'Isenk Telah medaftar Travel menuju Canada',31,2,'2019/11/13'),(320,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/13'),(321,'cek Telah medaftar Travel menuju Canada',31,2,'2019/11/13'),(322,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/13'),(323,'Tidak membayar, dan Travel dibatalkan',31,6,'2019/11/13'),(324,'bintang Telah melakukan Login',31,4,'2019/11/13'),(325,'bintang Telah melakukan Login',31,4,'2019/11/13'),(326,'bintang Telah melakukan Login',31,4,'2019/11/13'),(327,'Telah membatalkan Pendaftaran Travel',31,6,'2019/11/13');
/*!40000 ALTER TABLE `histori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historikategori`
--

DROP TABLE IF EXISTS `historikategori`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `historikategori` (
  `idhistorikategori` int(11) NOT NULL AUTO_INCREMENT,
  `historikategori` varchar(100) NOT NULL,
  PRIMARY KEY (`idhistorikategori`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historikategori`
--

LOCK TABLES `historikategori` WRITE;
/*!40000 ALTER TABLE `historikategori` DISABLE KEYS */;
INSERT INTO `historikategori` VALUES (1,'Isi Ulang Saldo'),(2,'Pendaftaran Travel'),(3,'Register'),(4,'Login'),(5,'Pembayaran Travel'),(6,'Pembatalan Travel'),(7,'Admin'),(8,'Pembayaran Tiket'),(9,'Pembatalan Tiket');
/*!40000 ALTER TABLE `historikategori` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jawaban`
--

DROP TABLE IF EXISTS `jawaban`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `jawaban` (
  `idjawaban` int(11) NOT NULL AUTO_INCREMENT,
  `jawaban` text NOT NULL,
  `waktu` varchar(45) NOT NULL,
  `idSoal` int(11) NOT NULL,
  PRIMARY KEY (`idjawaban`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jawaban`
--

LOCK TABLES `jawaban` WRITE;
/*!40000 ALTER TABLE `jawaban` DISABLE KEYS */;
INSERT INTO `jawaban` VALUES (1,'Lima Ngewe','30 Oktober 2019',1),(2,'Rasakno','30 Oktober 2019',2),(3,'la we ragelem kerjo','30 Oktober 2019',4),(4,'dancok matamu we sopo','30 Oktober 2019',5),(5,'Matamu picek','30 Oktober 2019',5),(6,'Lah jancok we takon ra enek hubungane mbe website goblok','30 Oktober 2019',6),(7,'Matane urip sak karepmu','30 Oktober 2019',7),(8,'','30 Oktober 2019',1),(9,'Asu we','30 Oktober 2019',7),(10,'kowe loh blok','30 Oktober 2019',8),(11,'urip sak karepmu ae le','30 Oktober 2019',7),(12,'oponeh koe cok','30 Oktober 2019',8),(13,'Lancar jaya bro','30 Oktober 2019',10),(14,'Lancar jaya 2','29-10-2019',11),(15,'again','October 29, 2019',11),(16,'matamu kuwi','October 30, 2019',12),(17,'Raimu teko teko ngejak gelut','October 30, 2019',13),(18,'opo','October 31, 2019',14),(19,'matamu picek','November 1, 2019',15),(20,'','November 3, 2019',14),(21,'he','November 3, 2019',14),(22,'yo rasakno ta lee','November 5, 2019',17),(23,'opo','November 5, 2019',14),(24,'he','November 5, 2019',14),(25,'1','November 5, 2019',14),(26,'opo','November 5, 2019',14),(27,'lima ngew','November 5, 2019',1),(28,'et','November 5, 2019',4),(29,'rasakno lee','November 6, 2019',17),(30,'opo','November 8, 2019',18),(31,'','November 13, 2019',18),(32,'','November 13, 2019',18),(33,'opo','November 13, 2019',18);
/*!40000 ALTER TABLE `jawaban` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `paketwisata`
--

DROP TABLE IF EXISTS `paketwisata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `paketwisata` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `destinasi` varchar(45) NOT NULL,
  `harga` int(11) NOT NULL,
  `maskapai` varchar(100) NOT NULL,
  `hotel` varchar(200) NOT NULL,
  `berangkat` varchar(100) NOT NULL,
  `pulang` varchar(100) NOT NULL,
  `kuota` int(11) NOT NULL,
  `wisata` varchar(800) NOT NULL,
  `deskripsi` text NOT NULL,
  `gambar` varchar(500) NOT NULL,
  `batasBayar` varchar(100) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `paketwisata`
--

LOCK TABLES `paketwisata` WRITE;
/*!40000 ALTER TABLE `paketwisata` DISABLE KEYS */;
INSERT INTO `paketwisata` VALUES (1,'Morocco',1400,'Morocco Airlines','Morocco Hotels','2019/12/1','2019/12/10',100,'Rabat','keren sangat cok','/image/travel/EDITTRAVEL1573630445104.jpg','2019/11/29','Buka'),(6,'Tunisia',1200,'Morocco Airlines','M\norocco Hotels','2019/12/1','2019/12/9',98,'Tunis','keren banget dah','/image/travel/EDITTRAVEL1573630662139.jpg','2019/11/29','Buka'),(10,'Russia',1450,'Rossiya Airlines','Radisson Resort - Pushka Inn - Vega Izmailovo','2019/12/20','2019/12/27',98,'Moscow - Kremlin - St.Petersburg - Tomsk','Rusia menawarkan Anda berbagai macam tempat destinasi wisata yang dapat dikunjungi oleh para traveler. Negara ini memiliki banyak spot-spot yang menarik dan keren yang dapat Anda lihat di masing-masing penjuru kotanya terlebih lagi pada musim dingin. Wah, sepertinya sangat keren sekali bukan? Nah, bagi Anda yang penasaran dengan tempat wisata di Rusia,','/image/travel/EDITTRAVEL1573630841460.jpg','2019/12/15','Buka'),(11,'United States',1700,'F22 Raptor','Virginia Hotel','2019/12/30','2020/1/4',98,'Los Angeles - New York - Chicago','Keren banget disini sumpah','/image/travel/EDITTRAVEL1573630939300.jpg','2019/12/24','Buka'),(12,'Spain',1700,'Spain Airlines','Spanish Hotel','2019/12/27','2020/1/4',101,'Barcelona- Cordova - Sevilla','keren banget bro','/image/travel/EDITTRAVEL1573630966946.jpg','2019/12/20','Buka'),(31,'Canada',1250,'Canada Airlines','Canada Hotels','2019/12/10','2019/12/15',99,'Banyak Banget dah pokoknya','Seru banget nih, ada artis kampung','/image/travel/EDITTRAVEL1573631017473.jpg','2019/12/01','Buka'),(32,'Turkey',1250,'Turkish Airlines','Ottoman Hotels','2019/12/12','2019/12/20',100,'Istanbul - Cappadocia - Anakara','Keren turki tu','/image/travel/undefined','2019/12/01','Buka'),(37,'Australia',1350,'Sidney Airlines','Sidney Hotels','2019/12/20','2019/12/28',100,'Banya','Enak','/image/travel/TRAVEL1573651160189.jfif','2019/12/10','Buka'),(38,'New Zealand',1100,'Zealand Airlines','Keren','2019/12/11','2019/12/20',100,'Kandank Sapi','Keren banget','/image/travel/TRAVEL1573651713721.jfif','2019/11/14','Buka'),(45,'coab`',32323,'lbjn','dfafs','lnljn','lj',988,'ououbnun','909ojn','/image/travel/TRAVEL1573652209261.jfif','2019/11/14','Buka'),(46,'tes',23,'adsa','dadfa','adasd','asdsa',98,'bhbi','kkbn','/image/travel/TRAVEL1573652328589.jfif','2019/11/15','Buka');
/*!40000 ALTER TABLE `paketwisata` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `penumpang`
--

DROP TABLE IF EXISTS `penumpang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `penumpang` (
  `idPenumpang` int(11) NOT NULL AUTO_INCREMENT,
  `namaPenumpang` varchar(100) NOT NULL,
  `usiaPenumpang` int(11) NOT NULL,
  `alamatPenumpang` varchar(200) NOT NULL,
  `idTiket` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `statusPenumpang` varchar(45) NOT NULL,
  PRIMARY KEY (`idPenumpang`),
  KEY `berangkatpesawat_idx` (`idTiket`),
  CONSTRAINT `berangkatpesawat` FOREIGN KEY (`idTiket`) REFERENCES `tiket` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `penumpang`
--

LOCK TABLES `penumpang` WRITE;
/*!40000 ALTER TABLE `penumpang` DISABLE KEYS */;
INSERT INTO `penumpang` VALUES (1,'Tesz',14,'Kediri',14,31,''),(2,'Bintang',18,'18',14,31,''),(3,'Maulana',20,'Kediri Jatenk',14,31,''),(4,'Tnk',23,'Mlg',14,31,''),(5,'Adit',30,'Malang',14,31,''),(6,'Bintang Maulana',18,'Kediri Jawa Timur',14,31,''),(7,'Andre',23,'Blitar',14,31,''),(13,'Starr',20,'Kediri Jawa Timur Indonesia',15,31,'Belum Berangkat'),(14,'tes',34,'Mlg',15,31,'Belum Berangkat'),(15,'suwung',21,'Kediri',15,31,'Belum Berangkat'),(16,'iseng lagi hehe',10,'Mlg',14,31,'Belum Berangkat');
/*!40000 ALTER TABLE `penumpang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peserta`
--

DROP TABLE IF EXISTS `peserta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `peserta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `namaPeserta` varchar(45) NOT NULL,
  `usiaPeserta` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idPaket` int(11) NOT NULL,
  `status` varchar(45) NOT NULL,
  `noPaspor` varchar(45) NOT NULL,
  `alamat` varchar(45) NOT NULL,
  `noTelp` int(11) NOT NULL,
  `timeout` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_idUser_idx` (`idUser`),
  KEY `fk_idPaket_idx` (`idPaket`),
  CONSTRAINT `fk_idPaket` FOREIGN KEY (`idPaket`) REFERENCES `paketwisata` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=140 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peserta`
--

LOCK TABLES `peserta` WRITE;
/*!40000 ALTER TABLE `peserta` DISABLE KEYS */;
INSERT INTO `peserta` VALUES (104,'Bintang',18,31,10,'Sudah Bayar','BTG 123','Jl Soekarno-Hatta 4A Kediri, Jawa Timur',8323244,NULL),(114,'Maulana',23,31,6,'Sudah Bayar','oi0920932','Kediri',909909,NULL),(123,'Arri',344,31,10,'Sudah Bayar','90i908','Bekasi',8080808,'2019-11-08 18:23:48'),(125,'BintangMH',18,31,11,'Sudah Bayar','BTG 123','Kediri Jatenk',90823232,'2019-11-08 23:59:33'),(127,'Wkwk',18,31,11,'Sudah Bayar','38009089','Kediry',8989898,'2019-11-09 00:39:58'),(128,'Pradytia',80,31,6,'Sudah Bayar','khojn','Goblok No 30',88989898,'2019-11-11 16:08:38'),(134,'Iseng',12,31,31,'Sudah Bayar','3232','Kediri',82323,'2019-11-13 21:59:56');
/*!40000 ALTER TABLE `peserta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saldoadmin`
--

DROP TABLE IF EXISTS `saldoadmin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `saldoadmin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `saldoAdmin` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `waktuPemasukan` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldoadmin`
--

LOCK TABLES `saldoadmin` WRITE;
/*!40000 ALTER TABLE `saldoadmin` DISABLE KEYS */;
INSERT INTO `saldoadmin` VALUES (1,1160,19,'2019/11/5'),(2,1160,19,'2019/11/5'),(3,1160,19,'2019/11/5'),(4,1360,3,'2019/11/5'),(5,960,3,'2019/11/5'),(6,960,3,'2019/11/5'),(7,1160,3,'2019/11/5'),(8,1360,5,'2019/11/5'),(9,1160,3,'2019/11/5'),(10,1160,19,'2019/11/5'),(11,1160,3,'2019/11/5'),(12,1360,19,'2019/11/5'),(13,1360,19,'2019/11/5'),(14,960,19,'2019/11/5'),(15,960,19,'2019/11/5'),(16,960,3,'2019/11/6'),(17,1160,21,'2019/11/6'),(18,960,21,'2019/11/6'),(19,960,21,'2019/11/6'),(20,960,21,'2019/11/6'),(21,1360,21,'2019/11/6'),(22,1360,22,'2019/11/6'),(23,1360,22,'2019/11/6'),(24,960,23,'2019/11/6'),(25,960,2,'2019/11/6'),(26,960,3,'2019/11/6'),(27,1160,21,'2019/11/6'),(28,1360,21,'2019/11/6'),(29,1360,21,'2019/11/6'),(30,1360,24,'2019/11/6'),(31,1160,21,'2019/11/6'),(32,1160,25,'2019/11/6'),(33,1160,31,'2019/11/7'),(34,960,31,'2019/11/8'),(35,1160,31,'2019/11/8'),(36,1360,31,'2019/11/8'),(37,1360,31,'2019/11/8'),(38,960,31,'2019/11/11'),(39,1,31,'2019/11/6'),(40,1,31,'2019-11-12 13:06:39'),(41,1200,31,'2019/11/12'),(42,700,31,'2019/11/12'),(43,700,31,'2019/11/12'),(44,700,31,'2019/11/12'),(45,700,31,'2019/11/12'),(46,700,31,'2019/11/12'),(47,700,31,'2019/11/12'),(48,500,31,'2019/11/12'),(49,500,31,'2019/11/12'),(50,500,31,'2019/11/12'),(51,1200,31,'2019/11/12'),(52,500,31,'2019/11/13'),(53,18,31,'2019/11/13'),(54,1000,31,'2019/11/13'),(55,1700,31,'2019/11/13'),(56,1700,0,'2019/11/13'),(57,1700,31,'2019/11/13'),(58,600,31,'2019/11/13'),(59,600,31,'2019/11/13'),(60,600,31,'2019/11/13'),(61,700,31,'2019/11/13');
/*!40000 ALTER TABLE `saldoadmin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saldouser`
--

DROP TABLE IF EXISTS `saldouser`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `saldouser` (
  `idsaldouser` int(11) NOT NULL AUTO_INCREMENT,
  `saldoUser` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  PRIMARY KEY (`idsaldouser`),
  KEY `fk_user_saldo_idx` (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saldouser`
--

LOCK TABLES `saldouser` WRITE;
/*!40000 ALTER TABLE `saldouser` DISABLE KEYS */;
INSERT INTO `saldouser` VALUES (1,20685391,3),(2,4240,5),(3,150000100,11),(4,70,12),(5,123,13),(8,11,16),(9,1,17),(12,11,15),(13,101,18),(14,241,19),(15,21,20),(16,2561,21),(17,1281,22),(18,1041,23),(19,41,2),(20,1641,24),(21,841,25),(22,36523,31),(23,2201,36);
/*!40000 ALTER TABLE `saldouser` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `soal`
--

DROP TABLE IF EXISTS `soal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `soal` (
  `idsoal` int(11) NOT NULL AUTO_INCREMENT,
  `soal` text NOT NULL,
  `idUser` int(11) NOT NULL,
  `waktu` varchar(45) NOT NULL,
  PRIMARY KEY (`idsoal`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `soal`
--

LOCK TABLES `soal` WRITE;
/*!40000 ALTER TABLE `soal` DISABLE KEYS */;
INSERT INTO `soal` VALUES (1,'Mangan piroan ?',3,'27 Oktober 2019'),(2,'Aku luwe..',5,'27 Oktober 2019'),(3,'Luwe su',3,'27 Oktober 2019'),(4,'La we ra gelem ngekei',5,'27 Oktober 2019'),(5,'la we ra ngejak aku',5,'27 Oktober 2019'),(6,'Lah dampod tenanan aku',3,'27 Oktober 2019'),(7,'Yo karepku tah min!',3,'27 Oktober 2019'),(8,'Uwe barang  min',5,'27 Oktober 2019'),(9,'mataen admin',5,'27 Oktober 2019'),(10,'coba waktu',3,'2019-10-29'),(11,'coba baru lagi',3,'29-10-2019'),(12,'min aku ngelak jaluk ombe',5,'30-10-2019'),(13,'Min ayo gelot',12,'30-10-2019'),(14,'Min',13,'31-10-2019'),(15,'cok ',3,'01-11-2019'),(16,'jajal waktu min',3,'2019/11/5'),(17,'min, duitku entek',19,'2019/11/5'),(18,'min',31,'2019/11/8');
/*!40000 ALTER TABLE `soal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiket`
--

DROP TABLE IF EXISTS `tiket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tiket` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `maskapai` varchar(45) NOT NULL,
  `kodepesawat` varchar(45) NOT NULL,
  `dari` varchar(45) NOT NULL,
  `ke` varchar(45) NOT NULL,
  `berangkat` varchar(45) NOT NULL,
  `durasi` int(11) NOT NULL,
  `seat` int(11) NOT NULL,
  `time` varchar(45) NOT NULL,
  `price` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiket`
--

LOCK TABLES `tiket` WRITE;
/*!40000 ALTER TABLE `tiket` DISABLE KEYS */;
INSERT INTO `tiket` VALUES (14,'Garuda Indonesia','GT 3451','Jakarta','London','2019/12/20',9,97,'16:00:00',700),(15,'Billyard Airlines','BR 1234','Surabaya','Brussel','2019/12/12',4,0,'21:00:00',600),(16,'Air Tumpah Airlines','AT 213','Surabaya','Singapore','2019/12/10',2,100,'20:15:00',50);
/*!40000 ALTER TABLE `tiket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(64) NOT NULL,
  `role` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Bintang','admin','ffa4b30002d221faaf551cecede635a839b037a4d19fb675e7750a24b7cf4ad0','admin','Verfied'),(31,'bintang','bintangmaulanahabib@gmail.com','1597979c9272cd6ef2d65b20d066ca8edf033779301697372accf400ce5726bb','user','Unverified'),(35,'reza','reza.com','1597979c9272cd6ef2d65b20d066ca8edf033779301697372accf400ce5726bb','user','Unverified'),(36,'akun','akun@com','1597979c9272cd6ef2d65b20d066ca8edf033779301697372accf400ce5726bb','user','Unverified');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-13 23:21:48
