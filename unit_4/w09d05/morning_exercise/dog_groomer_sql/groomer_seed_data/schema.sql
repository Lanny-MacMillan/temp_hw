drop table if exists dogs;
drop table if exists owners;
drop table if exists groomers;

create table dogs(
	id serial primary key,
	name varchar(255) not null,
	breed varchar(255) not null,
  owner integer,
  groomer integer
);

create table owners(
	id serial primary key,
	name varchar(255) not null,
	groomer integer,
	dogs integer[]
);

create table groomers(
	id serial primary key,
	name varchar(255) not null,
	rate integer not null,
	owners integer[],
	dogs integer[]
);
