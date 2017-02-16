/**
 * Created by yichli on 2/16/17.
 */
//加载模板
var html = require('./tmpl/header.html');

module.exports = function(div) {
    var header = $(html).clone();
    console.log(header);
    console.log(html);
    console.log(div);
    $('.' + div).html(html);
}