-- usando essa query
--      SELECT rating, AVG(length)
--     FROM sakila.film
--     GROUP BY rating;
-- durações médias entre 115.0 a 121.50.
-- dê um alias (apelido) à coluna AVG(length)
-- ORDENE de forma decrescente
    SELECT rating, AVG(length) AS duração_média
    FROM sakila.film
    GROUP BY rating
    HAVING duração_média BETWEEN 115.0 AND 121.5
    ORDER BY duração_média DESC;
    
-- usando essa query
--     SELECT rating, SUM(replacement_cost)
--     FROM sakila.film
--     GROUP by rating;
--  exiba apenas os valores de custo de
-- substituição que estão acima de $3950.50
-- Dê um alias para SUM(replacement_cost)
-- Finalize ordenando os resultados de forma crescente.

    SELECT rating, SUM(replacement_cost) AS soma_de_reparo
    FROM sakila.film
    GROUP by rating
    HAVING soma_de_reparo > 3950.50
    ORDER BY soma_de_reparo;




