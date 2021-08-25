create database decisions;

\c decisions;

create table if not exists person (
  id serial primary key,
  name text not null
);

create table if not exists options (
  id serial primary key,
  person_id integer not null,
  each_option text not null,
  rating integer not null,
  constraint valid_number
    check (rating <= 10 AND rating > 0)
);