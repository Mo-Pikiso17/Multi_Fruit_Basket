create table multi_fruit_basket(
    id serial not null primary key,
    name text not null
);

INSERT INTO multi_fruit_basket(name)VALUES ('Apple');
INSERT INTO multi_fruit_basket(name)VALUES ('Orange');
INSERT INTO multi_fruit_basket(name)VALUES ('Peach');

create table multi_fruit_item(
  id serial not null primary key,
  fruit_name text not null, 
  quantity int not null, 
  price decimal (10,2) not null,
  multi_fruit_basket_id int,
  FOREIGN KEY(multi_fruit_basket_id) REFERENCES multi_fruit_basket(id)
);

-- Jonagold apple, Cameo apple, Empire apple
-- Blood orange, Valencia orange,Naval orange
-- Nectarine, Flat peach

