-- quantos pagtos temos na data 25/05/2005?
SELECT COUNT(*) FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';
 -- usando LIKE
 SELECT COUNT(*) FROM sakila.payment
WHERE payment_date LIKE '2005-05-25%';
-- usando BETWEEN
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-25 00:00:00'
AND '2005-05-25 23:59:59';
--  quantos pagtos feitos entre 1/7/2005 e 22/08/2005
SELECT COUNT(*) FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01%' AND '2005-08-22%';
-- extraia data, ano, mes, dia, hora, minuto e seg do rental_id=10330
SELECT rental_date FROM sakila.rental
WHERE rental_id = 10330;
-- todos dados do pagto feito dia 28/07/2005 a partir das 22h
SELECT * FROM sakila.payment
WHERE payment_date 
BETWEEN '2005-07-28 22:00:00'
AND '2005/07/28 23:59:59'
ORDER BY payment_date;