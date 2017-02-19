import React from 'react';
import ReactDOM from 'react-dom';
//引入css
require("../../css/lib/reset.css");
require("../../css/common/global.css");
require("../../css/common/grid.css");
require("../../css/page/list.less");
require("../../../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../../css/common/font-awesome.css");



class List extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		//JSX here!
		return (

			<Header />
		)
	}
};

ReactDOM.render(<List />, document.getElementsByClassName('g-hd'));