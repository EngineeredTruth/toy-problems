select c.customer_id ,
       c.email,
       count(1) as "payments_count",
       sum(p.amount::float) as "total_amount"
   from customer as c
   inner join payment as p
           on c.customer_id = p.customer_id
group by c.customer_id, c.email
order by "total_amount" desc
limit 10
