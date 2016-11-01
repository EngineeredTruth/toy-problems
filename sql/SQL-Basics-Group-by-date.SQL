select date(created_at) as day, description, count(date(created_at)) as count from events
where name = 'trained'
GROUP BY DATE(created_at), description
order by DATE(created_at) asc
