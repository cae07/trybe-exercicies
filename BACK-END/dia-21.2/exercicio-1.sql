-- 1. Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total
-- de pagamentos feitos até o momento por um determinado customer_id .

USE sakila;
DELIMITER $$

CREATE FUNCTION TotalDePagtoDeUmCustomerAteMomento(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE pagto_total INT;
    SELECT COUNT(pay.payment_id)
    FROM sakila.payment AS pay
    WHERE pay.customer_id = id
    INTO pagto_total;
    RETURN pagto_total;
END $$

DELIMITER ;

