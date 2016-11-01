select * from departments
where exists
  (select *
  from sales
  where departments.id=sales.department_id
  and price>98)
