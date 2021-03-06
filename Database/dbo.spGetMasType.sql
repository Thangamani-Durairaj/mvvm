create proc [dbo].[spGetMasType](@modid int=0,@masid int=0)
as
begin
if(@modid=0) -- All Types
select a.masid as id,(select title from mas_01 where masid=a.typeid and a.typeid is not null) as t_title,
a.title,a.[desc], (case when a.isactive=1 then 'Yes' else 'No' end) as Active from mas_01 as a where (a.typeid is null or a.typeid=0)
and a.isdelete=0
else if(@modid=1) -- All Type Entries
select a.masid as id,(select title from mas_01 where masid=a.typeid) as t_title,
a.title,a.[desc], (case when a.isactive=1 then 'Yes' else 'No' end) as Active from mas_01 as a where a.typeid is not null and a.typeid<>0
and a.isdelete=0 order by t_title asc
else if(@modid=2) -- Specific Type Entries
select a.masid as id,(select title from mas_01 where masid=a.typeid) as t_title,
a.title,a.[desc], (case when a.isactive=1 then 'Yes' else 'No' end) as Active from mas_01 as a
where a.typeid = @masid and a.isdelete=0
else -- Specific Entry
select a.masid as id,(select title from mas_01 where masid=a.typeid) as t_title,
a.title,a.[desc], (case when a.isactive=1 then 'Yes' else 'No' end) as Active from mas_01 as a
where a.masid = @masid and a.isdelete=0
end