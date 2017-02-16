//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/index.less");
require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../css/common/font-awesome.css");
require("../../../node_modules/bootstrap/dist/js/bootstrap.min.js");


var Header = require('../components/header/index.js');
new Header("g-hd");
$('.g-bd').append('<p class="text">这是由js生成的一句话。</p>');

//增加事件
$('.btn').click(function() {
	require.ensure(['../components/dialog/index.js'], function(require) {
		var Dialog = require('../components/dialog/index.js');
		new Dialog();
	});
});