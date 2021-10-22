SELECT * FROM sakila.film;
-- exiba o id do filme , o título e uma coluna extra
-- chamada 'conheço o filme?' 
SELECT film_id, title,
	IF(title = 'ACE GOLDFINGER', 'já assisti a esse filme', 'não conheço o filme')
    AS 'conheço o filme?'
FROM sakila.film;

--  exiba o título , a classificação indicativa
--  e uma coluna extra que vamos chamar de 'público-alvo'
-- de acordo com especificações
SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
	ELSE 'Proibido para menores de idade'
END AS público_alvo
FROM sakila.film;