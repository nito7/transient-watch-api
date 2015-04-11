'use strict';

exports.up = function(knex, Promise) {
  
  return knex.schema.hasTable('watch').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('watch', function(t) {
        t.increments('id').primary();
        t.float('mjd', 9, 3);
        t.integer('astro_obj_id').references('id').inTable('astro_objs');
        t.float('flux_rate', 5, 2);
      });
    } else {
      return new Error("The watch table already exists");
    }
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.hasTable('watch').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('watch');
    }
  });
  
};
