import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.jsx';
import App from './index.jsx';
import RootRouters from './rootRouters.jsx'
import {browserHistory } from 'react-router'

ReactDOM.render(
    <RootRouters history={browserHistory} />,
    document.getElementById('test')
);

module.exports = {
    Home,
    App,
    RootRouters
};