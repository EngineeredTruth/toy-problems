select p.id, p.name, count(s.sale) as sale_count, rank() over(order by count(s.sale)) as sale_rank
from people as p
join sales as s
on p.id = s.people_id
group by p.id
