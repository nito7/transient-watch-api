var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var astroObj    = require("./astro_obj");

var AstroClass = MyBookshelf.Model.extend({
  tableName: "astro_classes",
  hasTimestamps: true,
  astroObjs: function () {
    return this.hasMany(astroObj.model);
  }
});

var AstroClasses = MyBookshelf.Collection.extend({
  model: AstroClass
});

module.exports = {
  model: AstroClass,
  methods: {

  }
}