-- detalhes sobre aluguem de clientes com id (269, 239, 126, 399, 142)
SELECT * FROM sakila.payment
WHERE customer_id IN (269, 239, 126, 399, 142);
-- informaçoes de endereços nos distritos
-- ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas')
SELECT * FROM sakila.address
WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
-- nome, sobrenome, email clientes com seguintes sobrenomes
-- ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
--  em ordem alfabética
SELECT first_name, last_name, email FROM sakila.customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;
-- email clientes com address_id
-- (172, 173, 174, 175, 176) em ordem alfabética
SELECT email FROM sakila.customer
WHERE address_id BETWEEN 172 and 176
ORDER BY first_name;
-- quantos pagtos foram feitos entre 1/5/2005 e 1/8/2005
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';
SELECT title, release_year, rental_duration FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration desc;