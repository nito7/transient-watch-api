var Promise     = require('bluebird');
var MyBookshelf = require("../bookshelf");
var astroObj    = require("./astro_obj");

var Watch = MyBookshelf.Model.extend({
  tableName: "watches",
  hasTimestamps: true,
  astroObj: function () {
    return this.belongsTo(astroObj.model);
  }
});

var Watches = MyBookshelf.Collection.extend({
  model: Watch
});

module.exports = {
  model: Watch,
  methods: {

  }
}