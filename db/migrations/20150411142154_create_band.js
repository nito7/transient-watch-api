'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('band').then(function(exists) {
    if (!exists) 
      return knex.schema.createTable('band', function(t) {
        t.increments('id').primary();
        t.string('text', 32);
      });
    } else {
      return new Error("The band table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('band').then(function(exists) {
    if (exists) {
       eturn knex.schema.dropTable('band');
    }
  });
  
};
