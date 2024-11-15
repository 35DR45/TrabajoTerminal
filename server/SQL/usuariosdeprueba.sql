use mydb;
-- id, nombre, correo, pass, telefono, tipo, tutor, tutorado, aprendizaje, reputacion;
insert into usuario values (null, "juan", "a@a.com", "123", "5500112233", 2, null, 2, 1, default);
insert into usuario values (null, "pedro", "b@b.com", "123", "5511223344", 1, 1, null, 1, default);
insert into usuario values (null, "pepe", "c@c.com", "123", "5522334455", 2, null, null, 1, default);
insert into usuario values (null, "Miguel", "d@d.com", "123", "555920185", 2, null, null, 1, default);
insert into usuario values (null, "Angel", "e@e.com", "123", "5523141512", 2, null, null, 1, default);
insert into usuario values (null, "Luis", "e@e.com", "123", "5523141512", 2, null, null, 1, default);
select * from usuario;
