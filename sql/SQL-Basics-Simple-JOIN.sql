SELECT products.*, companies.name
AS company_name
FROM products
JOIN companies
ON company_id = companies.id
