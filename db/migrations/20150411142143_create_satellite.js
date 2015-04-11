'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('satellite').then(function(exists) {
    if (!exists) 
      return knex.schema.createTable('satellite', function(t) {
        t.increments('id').primary();
        t.string('text', 64);
      });
    } else {
      return new Error("The satellite table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('satellite').then(function(exists) {
    if (exists) {
       eturn knex.schema.dropTable('satellite');
    }
  });
};
