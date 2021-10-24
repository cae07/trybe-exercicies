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




