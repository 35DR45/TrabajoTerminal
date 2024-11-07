use mydb;
-- id, nombre, correo, pass, telefono, tipo, tutor, aprendizaje, reputacion;
insert into usuario values (null, "juan", "a@a.com", "123", "5500112233", default, null, 1, default);
insert into usuario values (null, "pedro", "b@b.com", "123", "5511223344", default, null, 1, default);
insert into usuario values (null, "pepe", "c@c.com", "123", "5522334455", default, null, 1, default);

select * from usuario;
