'use strict';

exports.up = function(knex, Promise) {

  return knex.schema.hasTable('lightcurve').then(function(exists) {
    if (!exists) 
      return knex.schema.createTable('lightcurve', function(t) {
        t.increments('id').primary();
        t.integer('astro_obj_id');
        t.integer('satellite_id');
        t.integer('band_id');
        t.float('mjd', 9, 3);
        t.float('flux', 7, 3);
        t.float('err', 7, 3);
      });
    } else {
      return new Error("The lightcurve table already exists");
    }
  });
  
};

exports.down = function(knex, Promise) {
  
  return knex.schema.hasTable('lightcurve').then(function(exists) {
    if (exists) {
       eturn knex.schema.dropTable('lightcurve');
    }
  });
};
