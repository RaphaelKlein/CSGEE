CREATE DATABASE CSGEE;
USE CSGEE;

CREATE TABLE Usuario(
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(20) NOT NULL,
email VARCHAR(100) NOT NULL,
senha VARCHAR(45) NOT NULL
);

CREATE TABLE Feedback(
idFeedback INT AUTO_INCREMENT,
nota INT,
comentario VARCHAR(250),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
PRIMARY KEY (idFeedback, fkUsuario)
);

CREATE TABLE Tentativa(
idTentativa INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario),
acertos INT,
erros INT
);

CREATE TABLE Comentarios(
idComentario INT PRIMARY KEY AUTO_INCREMENT,
dataComentario DATE,
textoComentario VARCHAR (250),
fkUsuario INT,
FOREIGN KEY (fkUsuario) REFERENCES Usuario (idUsuario)
);