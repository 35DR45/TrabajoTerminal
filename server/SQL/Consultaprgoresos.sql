use mydb;
SELECT 
	m.idMateria AS id,
    m.NombreMateria AS Materia,
    IFNULL((COUNT(CASE WHEN l.Tipo = 0 THEN p.idLeccion END) / 
            COUNT(CASE WHEN l.Tipo = 0 THEN l.idLeccion END) * 100), 0) AS `Porcentaje de lecciones Teoricas`,
    IFNULL((COUNT(CASE WHEN l.Tipo = 0 THEN p.idLeccion END) / 
            COUNT(CASE WHEN l.Tipo = 0 THEN l.idLeccion END) * 100), 0) AS `Porcentaje de lecciones Practicas`,
    IFNULL((COUNT(p.idLeccion) / COUNT(l.idLeccion) * 100), 0) AS `Porcentaje Total`
FROM 
    Materia m
LEFT JOIN 
    Leccion l ON m.idMateria = l.Materia
LEFT JOIN 
    Progreso p ON l.idLeccion = p.idLeccion AND p.idUsuario IN (select idUsuario from Usuario where NombreUsuario="Miguel")
GROUP BY 
    m.idMateria, m.NombreMateria;
