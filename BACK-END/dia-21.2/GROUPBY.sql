--  exiba a quantidade de clientes cadastrados na tabela sakila.customer
-- que estão ativos e a quantidade que estão inativos
SELECT * FROM sakila.customer;
SELECT COUNT(active) AS 'ativo/inativo'
FROM sakila.customer
GROUP BY active;

SELECT store_id AS loja,
COUNT(active) AS ativos
FROM sakila.customer
WHERE active
GROUP BY store_id;

-- média de duração de locação por classificação indicativa
SELECT rating, AVG(rental_duration)
FROM sakila.film
GROUP BY rating;

-- nome do distrito e a quantidade de endereços registrados nele
SELECT district, COUNT(*)
FROM sakila.address
GROUP BY district;




