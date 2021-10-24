-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales )
-- e internacionais ( international_sales ) de cada filme.
SELECT M.title, B.domestic_sales, B.international_sales
FROM Pixar.Movies M
INNER jOIN Pixar.BoxOffice B
ON M.id = B.movie_id;

-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas
-- para cada filme que possui um número maior de vendas internacionais ( international_sales )
-- do que vendas nacionais ( domestic_sales ).
SELECT P.title, B.international_sales FROM Pixar.Movies AS P
INNER JOIN Pixar.BoxOffice AS B
ON P.id = B.movie_id
WHERE B.domestic_sales < B.international_sales;

-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes
-- e sua avaliação ( rating ) em ordem decrescente.
SELECT P.title, B.rating FROM Pixar.Movies P
INNER JOIN Pixar.BoxOffice B
ON P.id = B.movie_id
ORDER BY B.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas,
-- mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão
-- em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	theater.*, movies.*
FROM Pixar.Theater AS theater
LEFT JOIN Pixar.Movies AS movies
ON theater.id = movies.theater_id
ORDER BY movies.title;

-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados
-- dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas
-- que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT
	theater.*, movies.*
FROM Pixar.Theater AS theater
RIGHT JOIN Pixar.Movies AS movies
ON theater.id = movies.theater_id
ORDER BY theater.name;

-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN,
-- que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
-- utilizando INNER JOIN
SELECT M.title, B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE B.rating > 7.5;

-- Utilizando SUBQUERY
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN,
-- que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT rating,
(SELECT title FROM Pixar.Movies
WHERE id = Pixar.BoxOffice.movie_id) AS Titulo
FROM Pixar.BoxOffice
WHERE Pixar.BoxOffice.rating > 7.5;


-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN,
-- que retornem as avaliações dos filmes lançados depois de 2009.
-- utilizando INNER JOIN

SELECT M.title, B.rating
FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON M.id = B.movie_id
WHERE M.year > 2009;

-- usando SUBQUERY
SELECT title,
	(
    SELECT rating
    FROM Pixar.BoxOffice
    WHERE Pixar.Movies.id = movie_id
    ) AS B
FROM Pixar.Movies
WHERE year > 2009;




-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.




