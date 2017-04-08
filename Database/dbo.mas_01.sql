CREATE TABLE [dbo].[mas_01]
(
	[id] [uniqueidentifier] DEFAULT (newid()),
	[masid] [int] IDENTITY(1,1) primary key,
	[typeid] [tinyint] NULL,
	[linkid] [tinyint] NULL,
	[verno] [tinyint] NULL,
	[title] [varchar](300) NOT NULL,
	[desc] [varchar](500) NULL,
	[modified] [datetime] NULL,
	[isactive] [bit] DEFAULT ((1)),
	[isdelete] [bit] DEFAULT ((0))
)



--insert into mas_01(verno,title,[desc],isactive) values(1,'Academic Year','Academic Year',1),(1,'Institution','Institution',1),(1,'School','School',1),
--(1,'Building','Building',1),(1,'Class','Class',1),(1,'Section','Section',1),(1,'Role','Role',1),(1,'Workflow','Workflow',1),(1,'Language','Language',1),
--(1,'Country','Country',1),(1,'State','State',1),(1,'City','City',1),(1,'Blood Group','Blood Group',1),(1,'Religion','Religion',1),(1,'Caste','Caste',1),
--(1,'Term','Term',1),(1,'Gender','Gender',1),(1,'Salut','Salut',1),(1,'Nationality','Nationality',1),(1,'Identity','Identity',1),
--(1,'Relationship','Relationship',1),(1,'Marital Status','Marital Status',1),(1,'Action','Action',1),(1,'Status','Status',1),(1,'Department','Department',1),
--(1,'Module','Module',1),(1,'Part','Part',1)

--insert into mas_01(verno,typeid,title,[desc],isactive) values(1,26,'Control Panel','Control Panel',1) -- module
--insert into mas_01(verno,typeid,title,[desc],isactive) values(1,27,'Master','Master',1) -- part
--insert into mas_01(verno,typeid,title,[desc],isactive) values(1,27,'User','User',1) -- part

--insert into mas_01(verno,typeid,title,[desc],isactive) values(1,23,'Created','Created',1) -- action
