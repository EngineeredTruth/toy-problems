select p.*, count(t.name) as "toy_count" from people as p
join toys as t
on p.id = t.people_id
group by p.id;
