-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: lanbar
-- ------------------------------------------------------
-- Server version	5.7.20-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `eventonegocio`
--

DROP TABLE IF EXISTS `eventonegocio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventonegocio` (
  `idEventoNegocio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `fecha` varchar(45) DEFAULT NULL,
  `descripcion` varchar(45) DEFAULT NULL,
  `Negocio_idNegocio` int(11) NOT NULL,
  PRIMARY KEY (`idEventoNegocio`),
  KEY `fk_EventoNegocio_Negocio1_idx` (`Negocio_idNegocio`),
  CONSTRAINT `fk_EventoNegocio_Negocio1` FOREIGN KEY (`Negocio_idNegocio`) REFERENCES `negocio` (`idNegocio`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventonegocio`
--

LOCK TABLES `eventonegocio` WRITE;
/*!40000 ALTER TABLE `eventonegocio` DISABLE KEYS */;
INSERT INTO `eventonegocio` VALUES (7,'Pintxopote','Mañana','Pintxopote',13),(8,'Eurocaña','Hoy','Eurocaña',13),(9,'karAOKE','22/2','canta mamon',14),(10,'Prueba','Prueba','Prueba',13);
/*!40000 ALTER TABLE `eventonegocio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventousuario`
--

DROP TABLE IF EXISTS `eventousuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventousuario` (
  `idEventoUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario_idUsuario` int(11) NOT NULL,
  `EventoNegocio_idEventoNegocio` int(11) NOT NULL,
  PRIMARY KEY (`idEventoUsuario`),
  KEY `fk_EventoUsuario_Usuario1_idx` (`Usuario_idUsuario`),
  KEY `fk_EventoUsuario_EventoNegocio1_idx` (`EventoNegocio_idEventoNegocio`),
  CONSTRAINT `fk_EventoUsuario_EventoNegocio1` FOREIGN KEY (`EventoNegocio_idEventoNegocio`) REFERENCES `eventonegocio` (`idEventoNegocio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_EventoUsuario_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventousuario`
--

LOCK TABLES `eventousuario` WRITE;
/*!40000 ALTER TABLE `eventousuario` DISABLE KEYS */;
INSERT INTO `eventousuario` VALUES (36,22,7),(37,23,7),(38,23,8),(39,24,7),(40,24,9);
/*!40000 ALTER TABLE `eventousuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fotosnegocio`
--

DROP TABLE IF EXISTS `fotosnegocio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fotosnegocio` (
  `idfotosNegocio` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL,
  `Negocio_idNegocio` int(11) NOT NULL,
  PRIMARY KEY (`idfotosNegocio`),
  KEY `fk_fotosNegocio_Negocio1_idx` (`Negocio_idNegocio`),
  CONSTRAINT `fk_fotosNegocio_Negocio1` FOREIGN KEY (`Negocio_idNegocio`) REFERENCES `negocio` (`idNegocio`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fotosnegocio`
--

LOCK TABLES `fotosnegocio` WRITE;
/*!40000 ALTER TABLE `fotosnegocio` DISABLE KEYS */;
INSERT INTO `fotosnegocio` VALUES (3,'aznar.jpg','aznar.jpg',13);
/*!40000 ALTER TABLE `fotosnegocio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fotosusuario`
--

DROP TABLE IF EXISTS `fotosusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fotosusuario` (
  `idfotosUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(45) DEFAULT NULL,
  `url` varchar(45) DEFAULT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idfotosUsuario`),
  KEY `fk_fotosUsuario_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_fotosUsuario_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fotosusuario`
--

LOCK TABLES `fotosusuario` WRITE;
/*!40000 ALTER TABLE `fotosusuario` DISABLE KEYS */;
INSERT INTO `fotosusuario` VALUES (9,'sonar-casa1.jpg','sonar-casa1.jpg',22),(10,'Jesús-Gil-portada3.jpg','Jesús-Gil-portada3.jpg',22),(11,'712wEVSimhL.jpg','712wEVSimhL.jpg',23),(12,'bar-ansicht_dpa.jpg','bar-ansicht_dpa.jpg',24),(13,'Captura el 2018-01-18 a las 14.30.10.png','Captura el 2018-01-18 a las 14.30.10.png',24),(14,'logo-3dBconsult.png','logo-3dBconsult.png',24),(15,'drinks.jpg','drinks.jpg',25),(16,'Buddha-Bar Baku.jpg','Buddha-Bar Baku.jpg',25),(17,'maxresdefault.jpg','maxresdefault.jpg',25),(18,'tataki-de-atun.jpg','tataki-de-atun.jpg',25);
/*!40000 ALTER TABLE `fotosusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localesseguidos`
--

DROP TABLE IF EXISTS `localesseguidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localesseguidos` (
  `idlocalesSeguidos` int(11) NOT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  `Negocio_idNegocio` int(11) NOT NULL,
  PRIMARY KEY (`idlocalesSeguidos`),
  KEY `fk_localesSeguidos_Usuario1_idx` (`Usuario_idUsuario`),
  KEY `fk_localesSeguidos_Negocio1_idx` (`Negocio_idNegocio`),
  CONSTRAINT `fk_localesSeguidos_Negocio1` FOREIGN KEY (`Negocio_idNegocio`) REFERENCES `negocio` (`idNegocio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_localesSeguidos_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localesseguidos`
--

LOCK TABLES `localesseguidos` WRITE;
/*!40000 ALTER TABLE `localesseguidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `localesseguidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `negocio`
--

DROP TABLE IF EXISTS `negocio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `negocio` (
  `idNegocio` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `direccion` varchar(45) DEFAULT NULL,
  `horario` varchar(45) DEFAULT NULL,
  `foto` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idNegocio`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `negocio`
--

LOCK TABLES `negocio` WRITE;
/*!40000 ALTER TABLE `negocio` DISABLE KEYS */;
INSERT INTO `negocio` VALUES (13,'Mastur Bar','Laredo','Mañanas','bar-coyote.jpg','mastur@gmail.com','1234'),(14,'bar bara','iparragirre','24h','bar-ansicht_dpa.jpg','bara@gmail.com','1234');
/*!40000 ALTER TABLE `negocio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rutasusuario`
--

DROP TABLE IF EXISTS `rutasusuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rutasusuario` (
  `idRutasUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombreRuta` varchar(45) DEFAULT NULL,
  `Usuario_idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idRutasUsuario`),
  KEY `fk_RutasUsuario_Usuario1_idx` (`Usuario_idUsuario`),
  CONSTRAINT `fk_RutasUsuario_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rutasusuario`
--

LOCK TABLES `rutasusuario` WRITE;
/*!40000 ALTER TABLE `rutasusuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `rutasusuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `apellidos` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `fotoPerfil` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (22,'Paco','Garcia','paco@gmail.com','1234','laporte1.jpg'),(23,'Kate','Upton','kate@gmail.com','1234','kate-upton-diariopoliticacom.jpg'),(24,'Miguelin','Indurain','m@m.com','1234','Paco.jpg'),(25,'Oier','P','oier@oier.com','1234','user.png');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `valoracionevento`
--

DROP TABLE IF EXISTS `valoracionevento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `valoracionevento` (
  `idvaloracionevento` int(11) NOT NULL AUTO_INCREMENT,
  `nota` int(11) DEFAULT NULL,
  `eventonegocio_idEventoNegocio` int(11) NOT NULL,
  `usuario_idUsuario` int(11) NOT NULL,
  PRIMARY KEY (`idvaloracionevento`),
  KEY `fk_valoracionevento_eventonegocio1_idx` (`eventonegocio_idEventoNegocio`),
  KEY `fk_valoracionevento_usuario1_idx` (`usuario_idUsuario`),
  CONSTRAINT `fk_valoracionevento_eventonegocio1` FOREIGN KEY (`eventonegocio_idEventoNegocio`) REFERENCES `eventonegocio` (`idEventoNegocio`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_valoracionevento_usuario1` FOREIGN KEY (`usuario_idUsuario`) REFERENCES `usuario` (`idUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valoracionevento`
--

LOCK TABLES `valoracionevento` WRITE;
/*!40000 ALTER TABLE `valoracionevento` DISABLE KEYS */;
INSERT INTO `valoracionevento` VALUES (1,5,7,22),(19,5,8,23),(22,9,7,23),(23,9,7,24),(24,3,9,24);
/*!40000 ALTER TABLE `valoracionevento` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-02-09  9:29:17
