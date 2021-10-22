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

-- 4. Exiba o nome , email , id do endereço , endereço e distrito dos
-- clientes que moram no distrito da California e que contêm "rene"
-- em seus nomes

SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a
ON a.district LIKE 'california'
AND c.first_name LIKE '%rene%';

-- 5. Exiba o nome e a quantidade de endereços dos clientes cadastrados.
-- Ordene seus resultados por nomes de forma decrescente.
-- Exiba somente os clientes ativos

SELECT customer.first_name, COUNT(address.address) AS contagem
FROM sakila.customer AS customer
INNER JOIN sakila.address AS address
ON customer.address_id = address.address_id
WHERE customer.active
GROUP BY customer.first_name;

-- 6. Monte uma query que exiba o nome , sobrenome e a média de valor
-- ( amount ) paga aos funcionários no ano de 2006. Use as tabelas
-- payment e staff 
SELECT s.first_name, s.last_name, AVG(p.amount)
FROM sakila.staff AS s
INNER JOIN sakila.payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.staff_id;

-- 7. exiba o id do ator , nome , id do filme e título do filme ,
-- usando as tabelas actor , film_actor e film



