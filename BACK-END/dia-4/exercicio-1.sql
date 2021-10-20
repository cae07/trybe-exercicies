-- escreva querys
-- exibir trybe em caixa alta
SELECT UCASE('trybe');
-- transforme a frase
-- 'Você já ouviu falar do DuckDuckGo?' para
-- 'Você já ouviu falar do google?'
SELECT REPLACE('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'google');
-- quantos caracteres tem 'uma frase qualquer'
SELECT CHAR_LENGTH('uma frase qualquer');
-- extrair palavra javascript da frase
-- 'A linguagem JavaScript está entre as mais usadas'
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
 -- tudo em caixa baixa
 SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');