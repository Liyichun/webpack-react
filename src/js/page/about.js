//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/about.less");
require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../css/common/font-awesome.css");
require("../../../node_modules/bootstrap/dist/js/bootstrap.min.js");

var Header = require('../components/header/index.js');
new Header("g-hd");
$('#about').html('这是一个关于webpack构建工程的栗子');