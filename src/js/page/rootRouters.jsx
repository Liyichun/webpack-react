import React, {PropTypes, Component} from 'react';

import { Router, Route,IndexRedirect,IndexRoute, hashHistory } from 'react-router'
import Home from './home.jsx'
import App from './index.jsx'
import Apps from './index.js'


class RootRouters extends Component {

    render() {
        return (
            <Router history = {hashHistory} >
                <Route path ="/" component={Apps} >
                    <IndexRoute component={Home}/>
                    <Route path ="app" component={App} />
                </Route>
            </Router>
        );
    }
}

export default RootRouters;