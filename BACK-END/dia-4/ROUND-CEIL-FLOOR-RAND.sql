-- gere um valor aleatório entre 15 e 20 
SELECT ROUND(15 + (RAND() * 5));

-- exiba o valor arredondado de 15.7515971 com uma precisão
-- de 5 casas decimais
SELECT ROUND(15.7515971, 5);

--  valor aproximado para baixo de 39.494
SELECT FLOOR(39.494);

-- Qual é o valor aproximado para cima DE 85.234%
SELECT CEIL(85.234);