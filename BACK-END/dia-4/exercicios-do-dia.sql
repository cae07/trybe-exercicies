-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales )
-- e internacionais ( international_sales ) de cada filme.
SELECT P.title, B.domestic_sales, B.international_sales
FROM Pixar.Movies P
INNER jOIN Pixar.BoxOffice B
ON P.id = B.movie_id;

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






