'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.hasTable('astro_obj').then(function(exists) {
    if (!exists) 
      return knex.schema.createTable('astro_obj', function(t) {
        t.increments('id').primary();
        t.string('name', 128);
        t.float('ra', 7, 3);
        t.float('dec', 7, 3);
        t.integer('astro_class');
        t.string('link', 2048);
      });
    } else {
      return new Error("The astro_obj table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('astro_obj').then(function(exists) {
    if (exists) {
       eturn knex.schema.dropTable('astro_obj');
    }
  });
  
};
