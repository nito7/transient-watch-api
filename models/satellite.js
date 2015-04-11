var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var lightcurve  = require("./lightcurve");

var Satellite = MyBookshelf.Model.extend({
  tableName: "satellites",
  hasTimestamps: true,
  lightcurves: function () {
    return this.hasMany(lightcurve.model);
  }
});

var Satellites = MyBookshelf.Collection.extend({
  model: Satellite
});

module.exports = {
  model: Satellite,
  methods: {

  }
}