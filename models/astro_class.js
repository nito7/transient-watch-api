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



/*---------- ここにメソッド記述 ----------*/

function index () {

}




/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: AstroClass,
  methods: {
    index: index
  }
}