--  treinando inserir dados
--  inserir um novo dado
SELECT * FROM sakila.staff;
INSERT INTO sakila.staff (first_name, last_name, address_id, store_id, active, username)
VALUES ('Carlos', 'Calçolari', 3, 1, 1, 'Caê');
SELECT * FROM sakila.staff;
-- inserir dois novos dados em uma query
INSERT INTO sakila.staff
(first_name, last_name, address_id, store_id, active, username)
VALUES
('Carolina', 'Campos', 3, 2, 1, 'Carol'),
('Wellington', 'Camilo', 4, 1, 1, 'Wellington');
-- selecione os 5 primeiros nomes em 'customer' e cadastrar
-- como atores
INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name
FROM sakila.customer
WHERE customer.first_name <> 'algumVAlor'
ORDER BY customer.first_name
LIMIT 5;
-- VERIFICANDO OS DADOS INSERIDOS 
SELECT * FROM sakila.actor
ORDER BY actor_id DESC
LIMIt 10;
-- insira 3 categorias de uma vez na tabela
SELECT * FROM sakila.category;
INSERT INTO sakila.category (name)
VALUES ('Pornô'), ('Chanchada'), ('animais'), ('mazoquista');
-- Verificando os valores na tabela
SELECT * FROM sakila.category
ORDER BY category_id DESC
LIMIT 4;
-- cadastre uma nova loja
SELECT * FROM sakila.store;
INSERT INTO sakila.store (manager_staff_id, address_id)
VALUES (3, 3), (4, 4);
