import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
require("../../css/page/main.less");
import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/search/search.jsx';
import Plist from '../components/plist/plist.jsx';
import Toggle from '../components/toggle/toggle.jsx';
//import RootRouters from './rootRouters.jsx';
//import {browserHistory } from 'react-router'


class App extends React.Component{
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
        return (
            <div>

                <div className="container">
                    <section className="jumbotron">
                        <h3 className="jumbotron-heading">test hello world</h3>
                        <Search sendAction={this.refreshKeyword}/>
                    </section>
                    <Plist keyword={this.state.keyword}/>
                    <Toggle />
                </div>
            </div>
        )
    }
};

export default App;