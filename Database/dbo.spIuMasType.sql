create proc [dbo].[spIuMasType](@masid int=0,@typeid int=0,@title varchar(300),@desc varchar(300),@isactive bit)
as
begin 
if not exists(select * from [dbo].[mas_01] where masid=@masid)
begin
insert into [dbo].[mas_01](typeid,verno,title,[desc],isactive) values(@typeid,1,@title,@desc,@isactive)
end
else
begin
update [dbo].[mas_01] set [typeid]=(case when @typeid=0 then [typeid] else @typeid end),[title]=@title,[desc]=@desc where [masid]=@masid
end
end