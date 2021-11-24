-- 2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada
-- em uma string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da 
-- categoria selecionada. Use as tabelas film , film_category e category para montar essa procedure.

USE sakila;
DELIMITER $$;

CREATE PROCEDURE ExibeInfoDoFilme(IN categoria VARCHAR(50))

BEGIN
	SELECT film.film_id, film.title, category.category_id, category.name
    FROM film AS film
    INNER JOIN film_category AS film_category
    INNER JOIN category AS category
    ON film.film_id = film_category.film_id
    AND film_category.category_id = category.category_id
	WHERE category.name = categoria;
END $$;

DELIMITER ;
    