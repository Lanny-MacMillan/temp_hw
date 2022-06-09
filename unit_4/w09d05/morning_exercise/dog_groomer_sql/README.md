![](/ga_cog.png)

---
Title: DogGroomerSQL <br>
Type: Homework <br>
Created By: Hunter Wallen<br>

---


## Setup

1. Create a new database called `DogGroomer`, connect to it, and run the following code (given to you in the `schema.sql` file inside of the `groomer_seed_data` directory):
	- Note: You can run this .sql file using `psql <db_name> -f <path_to_file>`

```sql
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
```
1. In terminal, connect to your `DogGroomer` database
1. Once inside the psql database (you'll know you're in the right one if your terminal says `DogGroomer=#`), copy and paste the seed data from `dogs.sql`, `groomers.sql` and `owners.sql` into your terminal.
1. Query for `*` in each of the three tables to make sure the data was inputted correctly.

## Activity

- In the `answers.sql` file you will find a series of challenges. Below them, type the appropriate SQL command to access the data requested.
- You must complete at least 8 of the provided challenges for a completion on this assignment.

---

#### Heads Up!

Some of the Data in the tables is in the form of an array! Check out the [PostgreSQL Docs](https://www.postgresql.org/docs/9.1/arrays.html) about arrays before you start!


#### Hungry For More?

- Use joins to solve the appropriate questions.
