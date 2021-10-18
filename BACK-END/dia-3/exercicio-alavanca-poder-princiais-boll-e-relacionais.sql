-- procurando email especíico na tabela-- 
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
-- por ordem alfabetica / não estão mais ativos
-- pertencem à loja 2 e não inclua o cliente KENNETH
SELECT * FROM sakila.customer
WHERE store_id = 2
AND active IS NOT true
AND first_name <> 'KENNETH'
ORDER BY first_name;
-- título/ descrição/ ano lançamento / valor custo substituição
-- dos 100 filmes com maior custo do mais alto ao mais baixo
--  entre filmes para menores de idade e custo minimo
-- de substituição de 18.00 dolares 
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE replacement_cost >= 18.00
AND rating = 'pg'
ORDER BY replacement_cost DESC
LIMIT 100 ;
-- QUANTOS clientes ativos na loja 1
SELECT COUNT(*) FROM sakila.customer
WHERE store_id = 1
AND active IS true;
-- detalhes de clientes da loja 1 não ativos
SELECT * FROM sakila.customer
WHERE active IS NOT true
AND store_id = 1;
-- 50 filmes feitos para adultos com menor tx aluguel
-- ordenado por título
SELECT * FROM sakila.film
WHERE rating = 'NC-17'
AND rental_rate < 1
ORDER BY title
LIMIT 50;