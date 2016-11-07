SELECT RANK() OVER (ORDER BY SUM(points) DESC),
  COALESCE(NULLIF(clan,''), '[no clan specified]') AS clan,
  SUM(points) AS total_points,
  COUNT(*) AS total_people
FROM people
GROUP BY clan
ORDER BY total_points DESC

-- The COALESCE function returns the first of its arguments that is not NULLIF
-- NULLIF function returns a null value if value1 and value 2 are equal otherwise it returns value1
