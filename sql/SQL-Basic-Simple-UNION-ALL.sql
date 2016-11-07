--my solution
select 'US' as location, * from ussales
where price > 50.00
union all
select 'EU', * from eusales
where price > 50.00;

--best practices
SELECT 'US' as location, *
  FROM ussales
  WHERE price > 50
UNION ALL
SELECT 'EU' as location, *
  FROM eusales
  WHERE price > 50
