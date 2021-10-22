-- 1. Monte uma query que exiba o id do ator , nome do ator e 
-- id do filme em que ele já atuou usando as tabelas actor e 
-- film_actor 
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS fa
INNER JOIN sakila.film AS f
ON a.actor_id = fa.actor_id;

-- 2. Use o JOIN para exibir o nome , sobrenome e endereço de cada 
-- um dos funcionários do banco. Use as tabelas staff e address .
SELECT staff.first_name, staff.last_name, address.address
FROM sakila.staff AS staff
INNER JOIN sakila.address AS address
ON staff.address_id = address.address_id;

-- 3. Exiba o id do cliente , nome e email dos primeiros 100 clientes,
-- ordenados pelo nome em ordem decrescente, juntamente com o id do
-- endereço e o endereço onde o cliente mora.
SELECT
c.customer_id, c.first_name, c.last_name, a.address_id, a.address
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON c.address_id = a.address_id;


