'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('astro_class').then(function(exists) {
    if (!exists) 
      return knex.schema.createTable('astro_class', function(t) {
        t.increments('id').primary();
        t.string('name', 128);
      });
    } else {
      return new Error("The astro_class table already exists");
    }
  });
  
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('astro_class').then(function(exists) {
    if (exists) {
       eturn knex.schema.dropTable('astro_class');
    }
  });
  
};
