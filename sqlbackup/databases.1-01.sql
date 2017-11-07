-- MySQL dump 10.10
--
-- Host: localhost    Database: demo
-- ------------------------------------------------------
-- Server version	5.0.24a-community-nt

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
-- Table structure for table `clientdetails`
--

DROP TABLE IF EXISTS `clientdetails`;
CREATE TABLE `clientdetails` (
  `appId` varchar(255) NOT NULL,
  `resourceIds` varchar(255) default NULL,
  `appSecret` varchar(255) default NULL,
  `scope` varchar(255) default NULL,
  `grantTypes` varchar(255) default NULL,
  `redirectUrl` varchar(255) default NULL,
  `authorities` varchar(255) default NULL,
  `access_token_validity` int(11) default NULL,
  `refresh_token_validity` int(11) default NULL,
  `additionalInformation` varchar(4096) default NULL,
  `autoApproveScopes` varchar(255) default NULL,
  PRIMARY KEY  (`appId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `clientdetails`
--


/*!40000 ALTER TABLE `clientdetails` DISABLE KEYS */;
LOCK TABLES `clientdetails` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `clientdetails` ENABLE KEYS */;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE `movies` (
  `id` int(11) NOT NULL auto_increment,
  `artist` varchar(255) default NULL,
  `description` varchar(255) default NULL,
  `host_movie_id` int(11) NOT NULL,
  `name` varchar(255) default NULL,
  `poster` varchar(255) default NULL,
  `thumb` varchar(255) default NULL,
  `url_160` varchar(255) default NULL,
  `url_320` varchar(255) default NULL,
  `year` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movies`
--


/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
LOCK TABLES `movies` WRITE;
INSERT INTO `movies` VALUES (1,'Hrithik Roshan','Movie : Jodhaa Akbar ,Music : A.R.Rahman,Production : UTV Motion Pictures,Director : Ashutosh Gowarikar,Starring : Hrithik Roshan, Aishwarya Rai,Year Released : 2008,Language : Tamil,Lyrics : Na. Muthukumar, M Rahman ',1,'Jodhaa Akbar','http://www.starmusiq.com/movieimages/Tamil/J/Jodhaa-Akbar_B.jpg','images/songs/Jodhaa-Akbar_B.jpg','http://filemirchi.info/Tamil/J/Jodhaa_Akbar_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/J/Jodhaa_Akbar_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip','2008'),(2,'Narain','Movie : Anjathe,Music : Sundar C Babu,Production : Nemichand Jabhak,Director : Mysskin,Starring : Narain, Ajmal Ameer, Prasanna, Vijayalakshmi,Year Released : 2007,Language : Tamil,Lyrics : Bharathiyar, Priyan, Kabilan ',2,'Anjathe','http://www.starmusiq.com/movieimages/Tamil/A/Anjathe_B.jpg','images/songs/Anjathe_B.jpg','http://filemirchi.info/Tamil/A/Anjaathe_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/A/Anjaathe_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2007'),(3,'Nakul ','Movie : Kadhalil Vizhunthen,Music : Vijay Antony,Production : Atlantic Movies,Director : P.V.Prasath,Starring : Nakul , Sunaina,Year Released : 2007,Language : Tamil,Lyrics : Thamarai, P.V.Prasath, Nepolian & Priyan ',3,'Kadhalil Vizhunthen','http://www.starmusiq.com/movieimages/Tamil/K/Kadhalil-Vizhunthen_B.jpg','images/songs/Kadhalil-Vizhunthen_B.jpg','http://filemirchi.info/Tamil/K/Kadhalil_Vizhunthen_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/K/Kadhalil_Vizhunthen_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2007'),(4,'Dhanush','Movie : Yaaradi Nee Mohini,Music : Yuvan Shankar Raja,Production : Vimalageetha K,Director : Mithran R Jawahar,Starring : Dhanush, Nayantara, Karthik Kumar, Raghuvaran, K. Viswanath,Year Released : 2008,Language : Tamil,Lyrics : Na. Muthukumar ',4,'Yaaradi Nee Mohini','http://www.starmusiq.com/movieimages/Tamil/Y/Yaaradi-Nee-Mohini_B.jpg','images/songs/Yaaradi-Nee-Mohini_B.jpg','http://filemirchi.info/Tamil/Y/Yaaradi_Nee_Mohini_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/Y/Yaaradi_Nee_Mohini_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2008'),(5,'Ashok','Movie : Pidichirukku,Music : Manu Ramesan,Production : Kool Productions,Director : Kanagu,Starring : Ashok, Vishakha Singh, Sampath Raj, Ganja Karuppu, Saranya Ponvannan,Year Released : 2008,Language : Tamil,Lyrics : Yugabharathi, Viveka, S. Ramesan Nair ',5,'Pidichirukku','http://www.starmusiq.com/movieimages/Tamil/P/2008/Pidichirukku_B.jpg','images/songs/Pidichirukku_B.jpg','http://filemirchi.info/Tamil/P/2008/Pidichirukku_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/P/2008/Pidichirukku_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2008'),(6,'Silambarasan','Movie : Kaalai,Music : G. V. Prakash Kumar,Production : GK Films Corporation,Director : Tarun Gopi,Starring : Simbu (Silambarasan), Vedhika, Nila.,Year Released : 2007,Language : Tamil,Lyrics : Vaali, Snehan, Simbu, Tarun Gopi ',7,'Kaalai','http://www.starmusiq.com/movieimages/Tamil/K/Kaalai_B.jpg','images/songs/Kaalai_B.jpg','http://filemirchi.info/Tamil/K/Kaalai_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/K/Kaalai_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2007'),(7,'Bharath','Movie : Nepali,Music : Srikanth Deva,Production : Rama Saravanan,Director : V. Z. Durai,Starring : Bharath, Meera Jasmine, Govind Namdeo, Sangeetha, Prem,Year Released : 2008,Language : Tamil,Lyrics : Yugabharathi, Karthik Netha, Vijaya Sagar ',8,'Nepali','http://www.starmusiq.com/movieimages/Tamil/N/2008/Nepali_B.jpg','images/songs/Nepali_B.jpg','http://filemirchi.info/Tamil/N/2008/Nepali_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/N/2008/Nepali_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2008'),(8,'Madhavan','Movie : Vaazhthugal,Music : Yuvan Shankar Raja,Production : Amma Creations,Director : Seeman,Starring : Madhavan, Bhavana, Venkat Prabhu,Year Released : 2007,Language : Tamil,Lyrics : Na. Muthukumar ',9,'Vaazhthugal','http://www.starmusiq.com/movieimages/Tamil/V/Vaazhthugal_B.jpg','images/songs/Vaazhthugal_B.jpg','http://filemirchi.info/Tamil/V/Vaazhthugal_160kbps_StarMusiQ.Com.zip','http://filemirchi.info/Tamil/V/Vaazhthugal_ACD-Rip_320kbps_Crystal_Clear_StarMusiQ.Com.zip',' 2007');
UNLOCK TABLES;
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;

--
-- Table structure for table `oauth_access_token`
--

DROP TABLE IF EXISTS `oauth_access_token`;
CREATE TABLE `oauth_access_token` (
  `token_id` varchar(255) default NULL,
  `token` mediumblob,
  `authentication_id` varchar(255) NOT NULL,
  `user_name` varchar(255) default NULL,
  `client_id` varchar(255) default NULL,
  `authentication` mediumblob,
  `refresh_token` varchar(255) default NULL,
  PRIMARY KEY  (`authentication_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_access_token`
--


/*!40000 ALTER TABLE `oauth_access_token` DISABLE KEYS */;
LOCK TABLES `oauth_access_token` WRITE;
INSERT INTO `oauth_access_token` VALUES ('376e37746c00495f17bacbbfa811b2a0','¨Ì\0sr\0Corg.springframework.security.oauth2.common.DefaultOAuth2AccessToken≤û6$˙Œ\0L\0additionalInformationt\0Ljava/util/Map;L\0\nexpirationt\0Ljava/util/Date;L\0refreshTokent\0?Lorg/springframework/security/oauth2/common/OAuth2RefreshToken;L\0scopet\0Ljava/util/Set;L\0	tokenTypet\0Ljava/lang/String;L\0valueq\0~\0xpsr\0java.util.Collections$EmptyMapY6ÖZ‹Á–\0\0xpsr\0java.util.DatehjÅKYt\0\0xpw\0\0^©\nÚ)xsr\0Lorg.springframework.security.oauth2.common.DefaultExpiringOAuth2RefreshToken/ﬂGcù–…∑\0L\0\nexpirationq\0~\0xr\0Dorg.springframework.security.oauth2.common.DefaultOAuth2RefreshTokens·\ncT‘^\0L\0valueq\0~\0xpt\0$012e8fa8-c6b8-4d1c-9c24-833b549493edsq\0~\0	w\0\0^©ïÕxsr\0%java.util.Collections$UnmodifiableSetÄí—èõÄU\0\0xr\0,java.util.Collections$UnmodifiableCollectionB\0ÄÀ^˜\0L\0ct\0Ljava/util/Collection;xpsr\0java.util.LinkedHashSetÿl◊Zï›*\0\0xr\0java.util.HashSet∫DÖïñ∏∑4\0\0xpw\0\0\0?@\0\0\0\0\0t\0readt\0writext\0bearert\0$57208af4-3afb-4196-811d-a66cdbbe88e2','9f0f191921b092233cec5cac22fc3fe4','logavdm@gmail.com','loga','¨Ì\0sr\0Aorg.springframework.security.oauth2.provider.OAuth2AuthenticationΩ@bR\0L\0\rstoredRequestt\0<Lorg/springframework/security/oauth2/provider/OAuth2Request;L\0userAuthenticationt\02Lorg/springframework/security/core/Authentication;xr\0Gorg.springframework.security.authentication.AbstractAuthenticationToken”™(~nGd\0Z\0\rauthenticatedL\0authoritiest\0Ljava/util/Collection;L\0detailst\0Ljava/lang/Object;xp\0sr\0&java.util.Collections$UnmodifiableList¸%1µÏé\0L\0listt\0Ljava/util/List;xr\0,java.util.Collections$UnmodifiableCollectionB\0ÄÀ^˜\0L\0cq\0~\0xpsr\0java.util.ArrayListxÅ“ô«aù\0I\0sizexp\0\0\0w\0\0\0sr\0Borg.springframework.security.core.authority.SimpleGrantedAuthority\0\0\0\0\0\0§\0L\0rolet\0Ljava/lang/String;xpt\0\nROLE_ADMINxq\0~\0psr\0:org.springframework.security.oauth2.provider.OAuth2Request\0\0\0\0\0\0\0\0Z\0approvedL\0authoritiesq\0~\0L\0\nextensionst\0Ljava/util/Map;L\0redirectUriq\0~\0L\0refresht\0;Lorg/springframework/security/oauth2/provider/TokenRequest;L\0resourceIdst\0Ljava/util/Set;L\0\rresponseTypesq\0~\0xr\08org.springframework.security.oauth2.provider.BaseRequest6(z>£qiΩ\0L\0clientIdq\0~\0L\0requestParametersq\0~\0L\0scopeq\0~\0xpt\0logasr\0%java.util.Collections$UnmodifiableMapÒ•®˛tıB\0L\0mq\0~\0xpsr\0java.util.HashMap⁄¡√`—\0F\0\nloadFactorI\0	thresholdxp?@\0\0\0\0\0w\0\0\0\0\0\0t\0\ngrant_typet\0passwordt\0usernamet\0logavdm@gmail.comxsr\0%java.util.Collections$UnmodifiableSetÄí—èõÄU\0\0xq\0~\0	sr\0java.util.LinkedHashSetÿl◊Zï›*\0\0xr\0java.util.HashSet∫DÖïñ∏∑4\0\0xpw\0\0\0?@\0\0\0\0\0t\0readt\0writexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsq\0~\0\Z?@\0\0\0\0\0\0w\0\0\0\0\0\0\0xppsq\0~\0#w\0\0\0?@\0\0\0\0\0t\0restservicexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsr\0Oorg.springframework.security.authentication.UsernamePasswordAuthenticationToken\0\0\0\0\0\0§\0L\0credentialsq\0~\0L\0	principalq\0~\0xq\0~\0sq\0~\0sq\0~\0\0\0\0w\0\0\0q\0~\0xq\0~\0/sr\0java.util.LinkedHashMap4¿N\\l¿˚\0Z\0accessOrderxq\0~\0\Z?@\0\0\0\0\0w\0\0\0\0\0\0q\0~\0q\0~\0q\0~\0q\0~\0x\0psr\02org.springframework.security.core.userdetails.User\0\0\0\0\0\0§\0Z\0accountNonExpiredZ\0accountNonLockedZ\0credentialsNonExpiredZ\0enabledL\0authoritiesq\0~\0L\0passwordq\0~\0L\0usernameq\0~\0xpsq\0~\0 sr\0java.util.TreeSet›òPìïÌá[\0\0xpsr\0Forg.springframework.security.core.userdetails.User$AuthorityComparator\0\0\0\0\0\0§\0\0xpw\0\0\0q\0~\0xpt\0logavdm@gmail.com','4427d3927f8de8b1d3a4fea5e86833a7'),('b876fcb2d57a26b7a7247c7ec964b6fa','¨Ì\0sr\0Corg.springframework.security.oauth2.common.DefaultOAuth2AccessToken≤û6$˙Œ\0L\0additionalInformationt\0Ljava/util/Map;L\0\nexpirationt\0Ljava/util/Date;L\0refreshTokent\0?Lorg/springframework/security/oauth2/common/OAuth2RefreshToken;L\0scopet\0Ljava/util/Set;L\0	tokenTypet\0Ljava/lang/String;L\0valueq\0~\0xpsr\0java.util.Collections$EmptyMapY6ÖZ‹Á–\0\0xpsr\0java.util.DatehjÅKYt\0\0xpw\0\0^©hŸTxsr\0Lorg.springframework.security.oauth2.common.DefaultExpiringOAuth2RefreshToken/ﬂGcù–…∑\0L\0\nexpirationq\0~\0xr\0Dorg.springframework.security.oauth2.common.DefaultOAuth2RefreshTokens·\ncT‘^\0L\0valueq\0~\0xpt\0$e2af5412-0b61-4689-9ad8-f3ef5da6b7c0sq\0~\0	w\0\0^©…Axsr\0%java.util.Collections$UnmodifiableSetÄí—èõÄU\0\0xr\0,java.util.Collections$UnmodifiableCollectionB\0ÄÀ^˜\0L\0ct\0Ljava/util/Collection;xpsr\0java.util.LinkedHashSetÿl◊Zï›*\0\0xr\0java.util.HashSet∫DÖïñ∏∑4\0\0xpw\0\0\0?@\0\0\0\0\0t\0readt\0writext\0bearert\0$70ec7f16-3bc5-466f-9000-dabc42ff7bbf','cedc8f57b214177befec43370f811b1f','logavdm@gmail.com','logavdm@gmail.com','¨Ì\0sr\0Aorg.springframework.security.oauth2.provider.OAuth2AuthenticationΩ@bR\0L\0\rstoredRequestt\0<Lorg/springframework/security/oauth2/provider/OAuth2Request;L\0userAuthenticationt\02Lorg/springframework/security/core/Authentication;xr\0Gorg.springframework.security.authentication.AbstractAuthenticationToken”™(~nGd\0Z\0\rauthenticatedL\0authoritiest\0Ljava/util/Collection;L\0detailst\0Ljava/lang/Object;xp\0sr\0&java.util.Collections$UnmodifiableList¸%1µÏé\0L\0listt\0Ljava/util/List;xr\0,java.util.Collections$UnmodifiableCollectionB\0ÄÀ^˜\0L\0cq\0~\0xpsr\0java.util.ArrayListxÅ“ô«aù\0I\0sizexp\0\0\0w\0\0\0sr\0Borg.springframework.security.core.authority.SimpleGrantedAuthority\0\0\0\0\0\0§\0L\0rolet\0Ljava/lang/String;xpt\0\nROLE_ADMINxq\0~\0psr\0:org.springframework.security.oauth2.provider.OAuth2Request\0\0\0\0\0\0\0\0Z\0approvedL\0authoritiesq\0~\0L\0\nextensionst\0Ljava/util/Map;L\0redirectUriq\0~\0L\0refresht\0;Lorg/springframework/security/oauth2/provider/TokenRequest;L\0resourceIdst\0Ljava/util/Set;L\0\rresponseTypesq\0~\0xr\08org.springframework.security.oauth2.provider.BaseRequest6(z>£qiΩ\0L\0clientIdq\0~\0L\0requestParametersq\0~\0L\0scopeq\0~\0xpt\0logavdm@gmail.comsr\0%java.util.Collections$UnmodifiableMapÒ•®˛tıB\0L\0mq\0~\0xpsr\0java.util.HashMap⁄¡√`—\0F\0\nloadFactorI\0	thresholdxp?@\0\0\0\0\0w\0\0\0\0\0\0t\0\ngrant_typet\0passwordt\0usernamet\0logavdm@gmail.comxsr\0%java.util.Collections$UnmodifiableSetÄí—èõÄU\0\0xq\0~\0	sr\0java.util.LinkedHashSetÿl◊Zï›*\0\0xr\0java.util.HashSet∫DÖïñ∏∑4\0\0xpw\0\0\0?@\0\0\0\0\0t\0readt\0writexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsq\0~\0\Z?@\0\0\0\0\0\0w\0\0\0\0\0\0\0xppsq\0~\0#w\0\0\0?@\0\0\0\0\0t\0restservicexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsr\0Oorg.springframework.security.authentication.UsernamePasswordAuthenticationToken\0\0\0\0\0\0§\0L\0credentialsq\0~\0L\0	principalq\0~\0xq\0~\0sq\0~\0sq\0~\0\0\0\0w\0\0\0q\0~\0xq\0~\0/sr\0java.util.LinkedHashMap4¿N\\l¿˚\0Z\0accessOrderxq\0~\0\Z?@\0\0\0\0\0w\0\0\0\0\0\0q\0~\0q\0~\0q\0~\0q\0~\0x\0psr\02org.springframework.security.core.userdetails.User\0\0\0\0\0\0§\0Z\0accountNonExpiredZ\0accountNonLockedZ\0credentialsNonExpiredZ\0enabledL\0authoritiesq\0~\0L\0passwordq\0~\0L\0usernameq\0~\0xpsq\0~\0 sr\0java.util.TreeSet›òPìïÌá[\0\0xpsr\0Forg.springframework.security.core.userdetails.User$AuthorityComparator\0\0\0\0\0\0§\0\0xpw\0\0\0q\0~\0xpt\0logavdm@gmail.com','9630e6fa3c2483e2a23db532f0b3be67');
UNLOCK TABLES;
/*!40000 ALTER TABLE `oauth_access_token` ENABLE KEYS */;

--
-- Table structure for table `oauth_approvals`
--

DROP TABLE IF EXISTS `oauth_approvals`;
CREATE TABLE `oauth_approvals` (
  `userId` varchar(255) default NULL,
  `clientId` varchar(255) default NULL,
  `scope` varchar(255) default NULL,
  `status` varchar(10) default NULL,
  `expiresAt` timestamp NOT NULL default CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  `lastModifiedAt` timestamp NOT NULL default '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_approvals`
--


/*!40000 ALTER TABLE `oauth_approvals` DISABLE KEYS */;
LOCK TABLES `oauth_approvals` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `oauth_approvals` ENABLE KEYS */;

--
-- Table structure for table `oauth_client_details`
--

DROP TABLE IF EXISTS `oauth_client_details`;
CREATE TABLE `oauth_client_details` (
  `client_id` varchar(255) NOT NULL,
  `resource_ids` varchar(255) default NULL,
  `client_secret` varchar(255) default NULL,
  `scope` varchar(255) default NULL,
  `authorized_grant_types` varchar(255) default NULL,
  `web_server_redirect_uri` varchar(255) default NULL,
  `authorities` varchar(255) default NULL,
  `access_token_validity` int(11) default NULL,
  `refresh_token_validity` int(11) default NULL,
  `additional_information` varchar(4096) default NULL,
  `autoapprove` varchar(255) default NULL,
  PRIMARY KEY  (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_client_details`
--


/*!40000 ALTER TABLE `oauth_client_details` DISABLE KEYS */;
LOCK TABLES `oauth_client_details` WRITE;
INSERT INTO `oauth_client_details` VALUES ('loga','restservice','nathan','read,write','password,refresh_token',NULL,NULL,900,10000,'{}',NULL),('logavdm@gmail.com','restservice','demodemo','read,write','password,refresh_token',NULL,NULL,900,10000,'{}',NULL);
UNLOCK TABLES;
/*!40000 ALTER TABLE `oauth_client_details` ENABLE KEYS */;

--
-- Table structure for table `oauth_client_token`
--

DROP TABLE IF EXISTS `oauth_client_token`;
CREATE TABLE `oauth_client_token` (
  `token_id` varchar(255) default NULL,
  `token` mediumblob,
  `authentication_id` varchar(255) NOT NULL,
  `user_name` varchar(255) default NULL,
  `client_id` varchar(255) default NULL,
  PRIMARY KEY  (`authentication_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_client_token`
--


/*!40000 ALTER TABLE `oauth_client_token` DISABLE KEYS */;
LOCK TABLES `oauth_client_token` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `oauth_client_token` ENABLE KEYS */;

--
-- Table structure for table `oauth_code`
--

DROP TABLE IF EXISTS `oauth_code`;
CREATE TABLE `oauth_code` (
  `code` varchar(255) default NULL,
  `authentication` mediumblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_code`
--


/*!40000 ALTER TABLE `oauth_code` DISABLE KEYS */;
LOCK TABLES `oauth_code` WRITE;
UNLOCK TABLES;
/*!40000 ALTER TABLE `oauth_code` ENABLE KEYS */;

--
-- Table structure for table `oauth_refresh_token`
--

DROP TABLE IF EXISTS `oauth_refresh_token`;
CREATE TABLE `oauth_refresh_token` (
  `token_id` varchar(255) default NULL,
  `token` mediumblob,
  `authentication` mediumblob
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `oauth_refresh_token`
--


/*!40000 ALTER TABLE `oauth_refresh_token` DISABLE KEYS */;
LOCK TABLES `oauth_refresh_token` WRITE;
INSERT INTO `oauth_refresh_token` VALUES ('4427d3927f8de8b1d3a4fea5e86833a7','¨Ì\0sr\0Lorg.springframework.security.oauth2.common.DefaultExpiringOAuth2RefreshToken/ﬂGcù–…∑\0L\0\nexpirationt\0Ljava/util/Date;xr\0Dorg.springframework.security.oauth2.common.DefaultOAuth2RefreshTokens·\ncT‘^\0L\0valuet\0Ljava/lang/String;xpt\0$012e8fa8-c6b8-4d1c-9c24-833b549493edsr\0java.util.DatehjÅKYt\0\0xpw\0\0^©ïÕx','¨Ì\0sr\0Aorg.springframework.security.oauth2.provider.OAuth2AuthenticationΩ@bR\0L\0\rstoredRequestt\0<Lorg/springframework/security/oauth2/provider/OAuth2Request;L\0userAuthenticationt\02Lorg/springframework/security/core/Authentication;xr\0Gorg.springframework.security.authentication.AbstractAuthenticationToken”™(~nGd\0Z\0\rauthenticatedL\0authoritiest\0Ljava/util/Collection;L\0detailst\0Ljava/lang/Object;xp\0sr\0&java.util.Collections$UnmodifiableList¸%1µÏé\0L\0listt\0Ljava/util/List;xr\0,java.util.Collections$UnmodifiableCollectionB\0ÄÀ^˜\0L\0cq\0~\0xpsr\0java.util.ArrayListxÅ“ô«aù\0I\0sizexp\0\0\0w\0\0\0sr\0Borg.springframework.security.core.authority.SimpleGrantedAuthority\0\0\0\0\0\0§\0L\0rolet\0Ljava/lang/String;xpt\0\nROLE_ADMINxq\0~\0psr\0:org.springframework.security.oauth2.provider.OAuth2Request\0\0\0\0\0\0\0\0Z\0approvedL\0authoritiesq\0~\0L\0\nextensionst\0Ljava/util/Map;L\0redirectUriq\0~\0L\0refresht\0;Lorg/springframework/security/oauth2/provider/TokenRequest;L\0resourceIdst\0Ljava/util/Set;L\0\rresponseTypesq\0~\0xr\08org.springframework.security.oauth2.provider.BaseRequest6(z>£qiΩ\0L\0clientIdq\0~\0L\0requestParametersq\0~\0L\0scopeq\0~\0xpt\0logasr\0%java.util.Collections$UnmodifiableMapÒ•®˛tıB\0L\0mq\0~\0xpsr\0java.util.HashMap⁄¡√`—\0F\0\nloadFactorI\0	thresholdxp?@\0\0\0\0\0w\0\0\0\0\0\0t\0\ngrant_typet\0passwordt\0usernamet\0logavdm@gmail.comxsr\0%java.util.Collections$UnmodifiableSetÄí—èõÄU\0\0xq\0~\0	sr\0java.util.LinkedHashSetÿl◊Zï›*\0\0xr\0java.util.HashSet∫DÖïñ∏∑4\0\0xpw\0\0\0?@\0\0\0\0\0t\0readt\0writexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsq\0~\0\Z?@\0\0\0\0\0\0w\0\0\0\0\0\0\0xppsq\0~\0#w\0\0\0?@\0\0\0\0\0t\0restservicexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsr\0Oorg.springframework.security.authentication.UsernamePasswordAuthenticationToken\0\0\0\0\0\0§\0L\0credentialsq\0~\0L\0	principalq\0~\0xq\0~\0sq\0~\0sq\0~\0\0\0\0w\0\0\0q\0~\0xq\0~\0/sr\0java.util.LinkedHashMap4¿N\\l¿˚\0Z\0accessOrderxq\0~\0\Z?@\0\0\0\0\0w\0\0\0\0\0\0q\0~\0q\0~\0q\0~\0q\0~\0x\0psr\02org.springframework.security.core.userdetails.User\0\0\0\0\0\0§\0Z\0accountNonExpiredZ\0accountNonLockedZ\0credentialsNonExpiredZ\0enabledL\0authoritiesq\0~\0L\0passwordq\0~\0L\0usernameq\0~\0xpsq\0~\0 sr\0java.util.TreeSet›òPìïÌá[\0\0xpsr\0Forg.springframework.security.core.userdetails.User$AuthorityComparator\0\0\0\0\0\0§\0\0xpw\0\0\0q\0~\0xpt\0logavdm@gmail.com'),('9630e6fa3c2483e2a23db532f0b3be67','¨Ì\0sr\0Lorg.springframework.security.oauth2.common.DefaultExpiringOAuth2RefreshToken/ﬂGcù–…∑\0L\0\nexpirationt\0Ljava/util/Date;xr\0Dorg.springframework.security.oauth2.common.DefaultOAuth2RefreshTokens·\ncT‘^\0L\0valuet\0Ljava/lang/String;xpt\0$e2af5412-0b61-4689-9ad8-f3ef5da6b7c0sr\0java.util.DatehjÅKYt\0\0xpw\0\0^©…Ax','¨Ì\0sr\0Aorg.springframework.security.oauth2.provider.OAuth2AuthenticationΩ@bR\0L\0\rstoredRequestt\0<Lorg/springframework/security/oauth2/provider/OAuth2Request;L\0userAuthenticationt\02Lorg/springframework/security/core/Authentication;xr\0Gorg.springframework.security.authentication.AbstractAuthenticationToken”™(~nGd\0Z\0\rauthenticatedL\0authoritiest\0Ljava/util/Collection;L\0detailst\0Ljava/lang/Object;xp\0sr\0&java.util.Collections$UnmodifiableList¸%1µÏé\0L\0listt\0Ljava/util/List;xr\0,java.util.Collections$UnmodifiableCollectionB\0ÄÀ^˜\0L\0cq\0~\0xpsr\0java.util.ArrayListxÅ“ô«aù\0I\0sizexp\0\0\0w\0\0\0sr\0Borg.springframework.security.core.authority.SimpleGrantedAuthority\0\0\0\0\0\0§\0L\0rolet\0Ljava/lang/String;xpt\0\nROLE_ADMINxq\0~\0psr\0:org.springframework.security.oauth2.provider.OAuth2Request\0\0\0\0\0\0\0\0Z\0approvedL\0authoritiesq\0~\0L\0\nextensionst\0Ljava/util/Map;L\0redirectUriq\0~\0L\0refresht\0;Lorg/springframework/security/oauth2/provider/TokenRequest;L\0resourceIdst\0Ljava/util/Set;L\0\rresponseTypesq\0~\0xr\08org.springframework.security.oauth2.provider.BaseRequest6(z>£qiΩ\0L\0clientIdq\0~\0L\0requestParametersq\0~\0L\0scopeq\0~\0xpt\0logavdm@gmail.comsr\0%java.util.Collections$UnmodifiableMapÒ•®˛tıB\0L\0mq\0~\0xpsr\0java.util.HashMap⁄¡√`—\0F\0\nloadFactorI\0	thresholdxp?@\0\0\0\0\0w\0\0\0\0\0\0t\0\ngrant_typet\0passwordt\0usernamet\0logavdm@gmail.comxsr\0%java.util.Collections$UnmodifiableSetÄí—èõÄU\0\0xq\0~\0	sr\0java.util.LinkedHashSetÿl◊Zï›*\0\0xr\0java.util.HashSet∫DÖïñ∏∑4\0\0xpw\0\0\0?@\0\0\0\0\0t\0readt\0writexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsq\0~\0\Z?@\0\0\0\0\0\0w\0\0\0\0\0\0\0xppsq\0~\0#w\0\0\0?@\0\0\0\0\0t\0restservicexsq\0~\0#w\0\0\0?@\0\0\0\0\0\0xsr\0Oorg.springframework.security.authentication.UsernamePasswordAuthenticationToken\0\0\0\0\0\0§\0L\0credentialsq\0~\0L\0	principalq\0~\0xq\0~\0sq\0~\0sq\0~\0\0\0\0w\0\0\0q\0~\0xq\0~\0/sr\0java.util.LinkedHashMap4¿N\\l¿˚\0Z\0accessOrderxq\0~\0\Z?@\0\0\0\0\0w\0\0\0\0\0\0q\0~\0q\0~\0q\0~\0q\0~\0x\0psr\02org.springframework.security.core.userdetails.User\0\0\0\0\0\0§\0Z\0accountNonExpiredZ\0accountNonLockedZ\0credentialsNonExpiredZ\0enabledL\0authoritiesq\0~\0L\0passwordq\0~\0L\0usernameq\0~\0xpsq\0~\0 sr\0java.util.TreeSet›òPìïÌá[\0\0xpsr\0Forg.springframework.security.core.userdetails.User$AuthorityComparator\0\0\0\0\0\0§\0\0xpw\0\0\0q\0~\0xpt\0logavdm@gmail.com');
UNLOCK TABLES;
/*!40000 ALTER TABLE `oauth_refresh_token` ENABLE KEYS */;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL auto_increment,
  `role` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `roles`
--


/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
LOCK TABLES `roles` WRITE;
INSERT INTO `roles` VALUES (1,'ROLE_ADMIN'),(2,'ROLE_USER'),(3,'ROLE_SALES');
UNLOCK TABLES;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;

--
-- Table structure for table `songs`
--

DROP TABLE IF EXISTS `songs`;
CREATE TABLE `songs` (
  `id` int(11) NOT NULL auto_increment,
  `host_song_id` int(11) NOT NULL,
  `name` varchar(255) default NULL,
  `mid` int(11) default NULL,
  PRIMARY KEY  (`id`),
  KEY `FKsu6005y8ql9jpibhvol7apbjc` (`mid`),
  CONSTRAINT `FKsu6005y8ql9jpibhvol7apbjc` FOREIGN KEY (`mid`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `songs`
--


/*!40000 ALTER TABLE `songs` DISABLE KEYS */;
LOCK TABLES `songs` WRITE;
INSERT INTO `songs` VALUES (1,1,' Mulumaathy Avalathu Mugaam - VmusiQ.Com ',1),(2,1,' Ithayam Idam Mariyathae Vizhi - VmusiQ.Com ',1),(3,1,' Khwaja Mere Khwaja - VmusiQ.Com ',1);
UNLOCK TABLES;
/*!40000 ALTER TABLE `songs` ENABLE KEYS */;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY  (`user_id`,`role_id`),
  KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`),
  CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_roles`
--


/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
LOCK TABLES `user_roles` WRITE;
INSERT INTO `user_roles` VALUES (1,1),(2,2);
UNLOCK TABLES;
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL auto_increment,
  `non_expired_password` bit(1) NOT NULL,
  `password` varchar(255) default NULL,
  `email` varchar(255) default NULL,
  `is_enable` bit(1) NOT NULL,
  `is_expired` bit(1) NOT NULL,
  `is_locked` bit(1) NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--


/*!40000 ALTER TABLE `users` DISABLE KEYS */;
LOCK TABLES `users` WRITE;
INSERT INTO `users` VALUES (1,'','demodemo','logavdm@gmail.com','','\0','\0'),(2,'','demodemo','logavdm1@gmail.com','','\0','\0'),(3,'','demodemo','logavdm3@gmail.com','','\0','\0');
UNLOCK TABLES;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

