use mydb;
-- id, nombre, correo, pass, telefono, tipo, tutor, tutorado, aprendizaje, reputacion;
delete from usuario;
#Usuario 1 Andres1! pass Andres1!
insert into usuario values (null, "Andres1!", "dove41@driftz.net", "$2b$10$aRBHBybjgdI4Oc0IBdAcwe/FCiL7WGecFKTPQL3eDKlPWVcCjLt3y", "000", 2, null, null, 1, 5000);
#Usuario 2 Andres2! pass Andres2!
insert into usuario values (null, "Andres2!", "orangutan50@mixzu.net", "$2b$10$.OP11HMTnj71CF2ErsMCM.0D1Ev4nMGLairL2MsPjI5V4fZhOG8TW", "000", 2, null, null, 1, 4500);
#Usuario 3 Andres3! pass Andres3!
insert into usuario values (null, "Andres3!", "raven06132@dotvu.net", "$2b$10$wCxB5FDfTn6rR8A32I6Uyeo1dFr0.YInqy4gQRm1QPDCiQHi9tO8m", "000", 2, null, null, 1, 7000);
#Usuario 4 Andres4! pass Andres4!
insert into usuario values (null, "Andres4!", "correonuevo@gmail.com ", "$2b$10$CoiF00wDoEw5BracKIa5SeMIJJykEUmZfxk7SRJD2XEUN5LFypOhe", "000", 2, null, null, 1, 2000);
#Usuario 5 Andres5! pass Andres5!
insert into usuario values (null, "Andres5!", "millipede94502@mixzu.net", "$2b$10$S.KezbSp5lsLwWsbns3CZeiZeYH6lJ8FarDMv4qkOrX7N6qA4fp5.", "000", 2, null, null, 1, default);
insert into usuario values (null, "Daniel32%!", "algo@ejemplo.com", "$2b$10$D6aRpLHlJKvdjkig29GHn.lFvy/adUvvE1l0JidiP4dAoel7Sa5au", "000", 2, null, null, 2, default);


#insert into usuario values (null, "juan", "a@a.com", "123" , "5500112233", 2, null, 2, 1, default);
#insert into usuario values (null, "pedro", "b@b.com", "123", "5511223344", 1, 1, null, 1, default);
#insert into usuario values (null, "pepe", "c@c.com", "123", "5522334455", 2, null, null, 1, default);
#insert into usuario values (null, "Miguel", "d@d.com", "123", "555920185", 2, null, null, 1, default);
#insert into usuario values (null, "Angel", "e@e.com", "123", "5523141512", 2, null, null, 1, default);
#insert into usuario values (null, "Luis", "e@e.com", "123", "5523141512", 2, null, null, 1, default);
select * from usuario;
