-- detalhes de filmes que contém paravra ace no nome
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';
-- detalhes filmes cujas descrições terminam com 'china'
SELECT * FROM sakila.film
WHERE description LIKE '%china';
-- na descrição contém 'girl' e titulo finaliza com 'lord'
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';
-- no titulo a partir do 4 caracter contém 'gon'
SELECT * FROM sakila.film
WHERE title LIKE '___gon%';
-- no titulo a partir do 4 caracter contém 'gon'
-- descrição contém 'documentary'
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%documentary%';
-- titulos ou finaliza com 'academy' ou começa com 'mosquito'
SELECT * FROM sakila.film
WHERE title LIKE 'mosquito%'
OR title LIKE '%academy';
-- descrição contém 'monkey' e 'sumo'
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';