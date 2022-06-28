-- Lista con el nombre de las sedes y el número de alumnos que tiene

select s.nombre, count(a.id) as num_alumnos
from sedes s
left join alumnos a on s.id = a.sede_id
group by s.id;


-- Lista con los alumnos de la "sede 1", incluyendo su nombre,
-- su matrícula y una lista con las materias que están cursando
-- si no está cursando nada, también debe aparecer en la lista
-- JOIN, GROUP_CONCAT, SUBCONSULTA

select a.id, a.nombre, a.matricula, ma.*
from alumnos a
left join materias_alumnos ma on a.id = ma.alumno_id
where a.sede_id = (select id from sedes where nombre = 'sede 1');










-- Lista de materias con la cantidad de alumnos de cada una de ellas
-- y el cálculo de la nota media de dichos alumnos