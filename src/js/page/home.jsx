import React from 'react';
import ReactDOM from 'react-dom';
//引入css
import HomeHeader from '../components/header/index.js';
import ModalControl from '../components/modal/modal.jsx';
import CSS3 from './css3test'
import App from './index.jsx';
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/index.less");
require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../css/common/customize.scss");
require("../../css/common/font-awesome.css");
//import RootRouters from './rootRouters.jsx';
//import {browserHistory } from 'react-router'

//增加事件
//$('.btn').click(function() {
//	require.ensure(['../components/dialog/index.js'], function(require) {
//		var Dialog = require('../components/dialog/index.js');
//		new Dialog();
//	});
//});
class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {"keyword": ""};
        this.refreshKeyword = this.refreshKeyword.bind(this);
    }
    refreshKeyword(name) {
        this.setState({"keyword": name});
    }
    render() {
        //JSX here!
        console.log("Home");
        return (
            <div>

                <HomeHeader />
                <ModalControl />
                <CSS3 />
            </div>

        )
    }
}

export default Home;