'use strict';

const assert = require('assert');
const MultiFruitB = require('../multiFruit');
const pg = require("pg");
const Pool = pg.Pool;


let useSSL = false;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:moddy123@localhost:5432/fruitbase';

const pool = new Pool({
    connectionString,
    ssl: useSSL

});

// DATABASE TEST
describe('The basic database for fruit_basket', function () {

    let multiFruitB = MultiFruitB(pool);


    beforeEach(async function () {
        // clean the tables before each test run
        // await pool.query("DELETE FROM fruit_basket;");
        // await pool.query("delete from categories;");
        // await pool.query("INSERT INTO fruit_basket(fruit_name, quantity, price)VALUES($1, $2, $3)", ['Apple', 3, 2]);
    });


    after(function () {
        pool.end();
    })

});

