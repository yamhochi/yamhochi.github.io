create table route_1_flip as
SELECT path, st_linemerge(st_union(geom)) as geom, sum(cost) as sumcost, sum(st_length(geom)) as sumlen, st_astext(st_linemerge(st_union(geom))) as wkt
FROM flip1
group by path
