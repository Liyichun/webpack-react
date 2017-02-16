//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/list.less");
require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../css/common/font-awesome.css");
require("../../../node_modules/bootstrap/dist/js/bootstrap.min.js");

var Header = require('../components/header/index.js');
new Header("g-hd");
var html = '';
for(var i=0;i<5;i++){
	html += '<li>列表'+(i+1)+'</li>';
}

$('#list').html(html);