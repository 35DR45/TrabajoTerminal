-- MySQL Script generated by MySQL Workbench
-- Mon Apr 29 17:54:44 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Aprendizaje`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Aprendizaje` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Aprendizaje` (
  `idAprendizaje` INT NOT NULL,
  `Nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idAprendizaje`))
ENGINE = InnoDB;

INSERT INTO Aprendizaje VALUES(1,"VISUAL");
INSERT INTO Aprendizaje VALUES(2,"KINESTESICO");
INSERT INTO Aprendizaje VALUES(3,"AUDITIVO");

-- -----------------------------------------------------
-- Table `mydb`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Usuario` (
  `idUsuario` INT NOT NULL auto_increment,
  `NombreUsuario` VARCHAR(45) NOT NULL,
  `Correo` VARCHAR(45) NOT NULL,
  `pass` VARCHAR(128) NOT NULL,
  `Telefono` VARCHAR(10) NULL,
  `Tipo` INT(2) NOT NULL DEFAULT 0,
  `Tutor` INT NULL,
  `Tutorado` INT NULL,
  `Aprendizaje` INT NOT NULL,
  `Reputacion` INT NOT NULL default 1000,
  PRIMARY KEY (`idUsuario`),
  CONSTRAINT `fk_Usuario_Usuario1`
    FOREIGN KEY (`Tutor`)
    REFERENCES `mydb`.`Usuario` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuario_Aprendizaje1`
    FOREIGN KEY (`Aprendizaje`)
    REFERENCES `mydb`.`Aprendizaje` (`idAprendizaje`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Materia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Materia` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Materia` (
  `idMateria` INT NOT NULL,
  `NombreMateria` VARCHAR(45) NOT NULL,
  `ImagenMateria` Text NOT NULL,
  PRIMARY KEY (`idMateria`))
ENGINE = InnoDB;

INSERT INTO Materia VALUES(1,"STATISTICAL TOOLS FOR DATA ANALYTICS","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFJklEQVR4Xu2dwXHbMBBFc/A1BbgBV5BrKnEjaSE9pAVX4TJ8zbiBnCRzBplPLT3EYhcESJCQ5H944wEogiCegAVASf72N7x/I9dDkkH6kmSQviQZpC9JBulLkkG2c/oID6chfNf5JSQZZBvnITydhvAb6GMlJBlkHechPJ6G8Os8hLfzEMJpCH/0a0pIMkgdGJrOQ3g+D+EVIiYo5GAg4jSEn6eP8DIXMRPCIesoTkP4gR5wHsI/LYJCDmQK2OchvGsBGgrZER2wS6CQHfACdgkQqMsrIckgnws7N2CXQCGNKAnYJVDIRmoCdgkUshGJFU1kAAppQKvhikIagoC+dmaleNZll5BkAMy7pVLgSR//CszWHmuHse1C5N3xpN4dWAytKvweMNqjlFVtFiVk/o0xVBf+uvaBy60ji8NOQvyLo9t+yaFLhi3dHiVQSGtkuPL2r9AmudnY1xAyDqsf4UHntyYzfAOImCY9Vnt9DSHjavojvEhDPcu6YZfYhr0srwfg+tObIjMbu28hzmwHDYYJR1NBmXYY2wLXMc7Ri8r7FeLIsGgiKBfIcyvw+aISPUwfLyEu8AqFVMiwqBa0EMhRj0d9jkaGsex1PKLEtQnZKMMiK6gkkOs6tiZKXJOQHWRYRIKExUC+J1HiWoQUyBgbUoYWswEbYwZygDZrKSpKXIOQEhkIrFJXjNU/x/TlcesugrxAPg1xgimslijRW0ixDOMdKTOcPQS5gVwNcehFmJ2Zry0lSvQUskWGRSNBbiCXRxRWfZH3XFpPTZToJaS1DIs1gnKBPLdWmeqrzylBX+RwIUfIsCgQlAvkP4ytkgjI1OeVoC90qJAWMnLHatCCvKFqCuRGXSNuTkgLGTJWY7MRsy405KrVcQ25tcqcmxLSSoYaNnDOqv2jUjKBPOFmhOwkYyIZZmQowjYJttMfc+UusRDII25CyM4yQCokvqe3+RBXI0jq7m06Jly9kANkmGuGzD2BYkEys1qMHRNXLeQAGRO1QjRvsg2STA7uRsiBMtb0EAsMS8n2x10IOVDGBIV4bJUhCzCM66Uy2EM8tsqYqJlmChSiKdhaKJNxKadGCHuIhaxmvfl6kYyJSiGAQjQZIXUy2EOylS8WIuXohqySkSlnCQrRjO9seXePq+DLcwb3CRryrQYYj9UJYQ9ZYpKj8+eMspxfPagUAihkC7Low3BmVr5SCHvIWmSY+nzQ41W+UgigkDVIQ3/enFf5SiHsIbXMprLRjXmVrxQCKKQUkYGfrkhuyqt8pRD2kFJQrsjQ5WYrXykEUMgSSzJyla8Uwh6yhMjIbTRmK18pBFCIB26qREau8pVC2EM8xp5R8WtsXuUrhQAK0chsqknlK4Wwh3jkvuNt4VW+UgigEItOQthDPDoJARRi0UkIe4hHJyGAQiw6CWEP8egkBFCIRSch7CEenYQACrHoJIQ9xKOTEEAhFp2EsId4dBICKMSikxD2EI9OQgCFWLQQwk+/5ytfJQQ3hMYB0qjZvxCoy5D6oBE+X6vP08esOs4+JZmck/mbfAu35J5UnnlPS0SJVkLGshY+ZF1LrrzcsZbkrjM/lnvdElGipRCyjihBIf2JEhTSnyhRImT6Eg5Zj5awRgime6/TV9TIRi6/p4L/JJrIKRVC2oNRJ1k3UUhHpMdEvYRC+pL8szUK6Yj17WNPCII42Q/8JjC+GZDsmcVCMC27/E8N/OQq2QksIXTsMIWQY/BkgCSD9CXJIH1JMkhfkgzSl//MkZupQ73VBgAAAABJRU5ErkJggg==");
INSERT INTO Materia VALUES(2,"INTRODUCTION TO CRIPTOGRAPHY","data:image/png;base64,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");



-- -----------------------------------------------------
-- Table `mydb`.`Leccion`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Leccion` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Leccion` (
  `idLeccion` INT NOT NULL,
  `Titulo` VARCHAR(100) NOT NULL,
  `Materia` INT NOT NULL,
  `Tipo` TINYINT NOT NULL,
  `Contenido` JSON NOT NULL,
  PRIMARY KEY (`idLeccion`, `Materia`, `Tipo`),
  CONSTRAINT `fk_Leccion_Materia`
    FOREIGN KEY (`Materia`)
    REFERENCES `mydb`.`Materia` (`idMateria`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `mydb`.`Progreso`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `mydb`.`Progreso` ;

CREATE TABLE IF NOT EXISTS `mydb`.`Progreso` (
  `idUsuario` INT NOT NULL,
  `idLeccion` INT NOT NULL,
  `idMateria` INT NOT NULL,
  `Leccion_Tipo` TINYINT NOT NULL, -- 0 Teorico, 1 Ejercicico
  `Completado` TINYINT NOT NULL DEFAULT 0,
  `Puntaje` INT NULL,
  `Rendimiento` INT(2), -- 0 Requiere apoyo, 1 NO requiere apoyo, 2 Puede dar apoyo
  PRIMARY KEY (`idUsuario`, `idLeccion`, `idMateria`, `Leccion_Tipo`),
  CONSTRAINT `fk_Progreso_Usuario1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `mydb`.`Usuario` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Progreso_Leccion1`
    FOREIGN KEY (`idLeccion` , `idMateria` , `Leccion_Tipo`)
    REFERENCES `mydb`.`Leccion` (`idLeccion` , `Materia` , `Tipo`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
