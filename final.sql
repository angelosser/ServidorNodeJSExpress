-- Base de Datos

drop database if exists final;
create database final;
use final;

-- Tablas

create table productos (
id int unsigned auto_increment primary key,
nombre varchar(50) not null unique,
marca varchar(50) not null,
categoria varchar(50) not null,
estado bool not null default 1,
createdAt timestamp not null default NOW(),
updatedAt timestamp not null default NOW()
)ENGINE=InnoDB default CHARSET=utf8mb4 collate=utf8mb4_unicode_ci;

create table usuarios (
id int unsigned auto_increment primary key,
nombre varchar(50) not null,
correo varchar(50) not null unique,
clave varchar(255) not null,
sexo varchar(50) not null,
estado bool not null default 1,
createdAt timestamp not null default NOW(),
updatedAt timestamp not null default NOW()
)ENGINE=InnoDB default CHARSET=utf8mb4 collate=utf8mb4_unicode_ci;

create table tiendas (
id int unsigned auto_increment primary key,
nombre varchar(50) not null unique,
direccion varchar(100) not null unique,
horas int not null,
estado bool not null default 1,
createdAt timestamp not null default NOW(),
updatedAt timestamp not null default NOW()
)ENGINE=InnoDB default CHARSET=utf8mb4 collate=utf8mb4_unicode_ci;


insert into productos(nombre, marca, categoria) values ('Leche','Gloria', 'Lacteos');
insert into productos(nombre, marca, categoria) values ('Helado','Donofrio', 'Lacteos');
insert into productos(nombre, marca, categoria) values ('Red Bull','AJE', 'Energizantes');


insert into usuarios(nombre, correo, clave, sexo) values ('gloria','gloria@idat.com', '123', 'F');
insert into usuarios(nombre, correo, clave, sexo) values ('brenda','brenda@idat.com', '1234', 'F');
insert into usuarios(nombre, correo, clave, sexo) values ('alonso','alonso@idat.com', '12345', 'M');


insert into tiendas(nombre, direccion, horas) values ('TAMBO', 'AV. BRASIL 4040', 6);
insert into tiendas(nombre, direccion, horas) values ('OXXO', 'AV. BOLIVAR 422', 8);
insert into tiendas(nombre, direccion, horas) values ('MASS', 'AV. CUBA 1122', 4);


-- Consultas

select * from productos;
select * from usuarios;
select * from tiendas;