-- use MOD junto com IF para descobrir
-- se 15 é par ou impar, chame a coluna de 'Par ou Ímpar'
-- coloque se é par ou impar
SELECT IF (15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar';

-- cinema comporta 220 pessoas, quantos grupos completos
-- de 12 podemos levar sem ninguem de fora?
SELECT 220 DIV 12 AS 'grupos';

-- existem lugares sobrando? quantos? 
SELECT 220 MOD 18 AS 'Lugares sobrando';