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



/*---------- ここにメソッド記述 ----------*/

function index () {

}

function show () {

}




/*---------- 公開メソッドの指定 ----------*/

module.exports = {
  model: Watch,
  methods: {
    index: index,
    show:  show
  }
}