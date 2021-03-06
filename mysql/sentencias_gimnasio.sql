-- Comentarios SQL

-- INSERT
-- INSERT INTO nbTabla (campos) VALUES (valores)

INSERT INTO gimnasio_4.clientes 
(nombre, apellidos, direccion, email, edad, genero, cuota, fecha_nacimiento, dni, profesor_id) 
VALUES 
('Rosaura', 'López', 'C Falsa 123', 'rosaura@gmail.com', 34, 'f', 19.90, '2001-06-10', '12892983J', 5);

-- UPDATE
-- UPDATE nbTabla SET nbCampo = nuevoValor, nbCampo2 = nuevoValor2 WHERE CONDICION

UPDATE clientes
SET edad = 56, dni = '11111111K'
WHERE id = 101;

-- DELETE
-- DELETE FROM nbTabla WHERE CONDICION

DELETE FROM clientes WHERE id = 101;

-- SELECT
-- SELECT camposARecuperar FROM nbTabla [WHERE condiciones]

SELECT nombre, apellidos, direccion, edad FROM clientes;

SELECT * FROM clientes;

SELECT * FROM clientes
WHERE cuota = 16.90;

-- Alias

select c.nombre, c.cuota as pago, c.direccion
from clientes as c;

-- Funciones

select count(c.genero) as num
from clientes as c
where genero = 'f';

-- AVG - sacamos la media
-- Sacar la media de edad de todos los clientes

select round(avg(c.edad)) as media_edad
from clientes as c;

-- Edad máxima y edad mínima

select max(c.edad) as edad_maxima, min(c.edad) as edad_minima
from clientes as c;

-- Suma de todas las cuotas

select sum(cuota) as suma_total
from clientes;

-- Condiciones

select * 
from clientes 
where edad > 40;

select *
from clientes
where edad >= 40
and edad <= 60;

-- Subconsultas
-- Recuperar todos los clientes cuyo profesor sea Nora Contreras

select *
from clientes
where profesor_id = (select id 
					from profesores 
					where nombre = 'Nora Contreras');
                    
-- Recuperar todos los clientes cuya edad sea mayor que la media del gimnasio

select * 
from clientes
where edad > (select avg(edad) from clientes);

-- order by

select * 
from clientes
order by edad desc, nombre asc; -- asc

-- Consultas a más de una tabla

select c.nombre, c.cuota, p.nombre as nombre_profesor
from clientes as c, profesores as p
where c.profesor_id = p.id
order by c.profesor_id;

-- Lista de clientes con nombre, apellidos, email, cuota 
-- y nombre del profesor
-- cuya cuota sea de 16.90, ordenados de la Z-A por el apellido del 
-- cliente

select c.nombre, c.apellidos, c.cuota, c.email, p.nombre as nombre_profesor
from clientes c, profesores p
where c.profesor_id = p.id
and c.cuota = 16.90
order by c.apellidos desc;

-- Recupera todos los ejercicios que realiza un cliente
-- Campos: nombre del cliente, apellidos del cliente,
-- duración del ejercicio, número de repeticiones y nombre del 
-- ejercicio

select c.nombre, c.apellidos, ce.duracion, ce.repeticiones,
e.nombre as nombre_ejercicio
from clientes c, clientes_has_ejercicios ce, ejercicios e
where c.id = ce.cliente_id
and e.id = ce.ejercicio_id;

-- GROUP BY

select cuota, count(id) as num_clientes
from clientes
group by cuota;

-- Listado de profesores con el número total de clientes que
-- tiene cada uno
-- ordenados de más trabajador a menos trabajador

select p.id, p.nombre, count(c.id) as num_clientes
from profesores p, clientes c
where p.id = c.profesor_id
group by c.profesor_id
order by num_clientes desc;

-- GROUP_CONCAT

SELECT p.nombre, p.experiencia, GROUP_CONCAT(c.nombre SEPARATOR '|') AS clientes
FROM clientes c, profesores p
WHERE c.profesor_id = p.id
GROUP BY c.profesor_id;

-- CONCAT

select nombre, apellidos, concat(nombre, " ", apellidos) as nombre_completo
from clientes;

-- BETWEEN

select *
from clientes 
where edad not between 40 and 50;

-- LIKE

select * 
from clientes
where nombre like '%l';

select *
from clientes 
where apellidos like 'h%z';

select * from clientes
where nombre like '__r%';


-- JOIN


select c.nombre, c.apellidos, ce.repeticiones, 
ce.duracion, e.nombre as nombre_ejercicio
from clientes_has_ejercicios ce
inner join clientes c on ce.cliente_id = c.id
inner join ejercicios e on ce.ejercicio_id = e.id;

-- Nombre y apellidos del cliente con un listado de sus ejercicios
-- separados por comas
-- y nombre del profesor que lo supervisa

select c.nombre, c.apellidos, group_concat(e.nombre) as ejercicios,
p.nombre as nombre_profesor
from clientes c
inner join clientes_has_ejercicios ce on c.id = ce.cliente_id
inner join ejercicios e on ce.ejercicio_id = e.id
inner join profesores p on c.profesor_id = p.id
group by c.id;

-- Listado de clientes y el número de repeticiones que 
-- tienen que hacer al ir gimnasio

select c.nombre, c.apellidos, sum(ce.repeticiones) 
from clientes c
inner join clientes_has_ejercicios ce on c.id = ce.cliente_id
group by c.id;

select * from clientes_has_ejercicios;

-- Lista de profesores con sus clientes separados por coma
-- solo aquellos profesores que tengan clientes

select p.nombre, group_concat(c.nombre)
from profesores p
inner join clientes c on p.id = c.profesor_id
group by p.id;












