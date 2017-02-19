/**
 * Created by yichli on 2/16/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {IndexLink,Router,Route} from 'react-router' //主页路由
import LoginControl from '../login/login.jsx';

import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap'; // 导航组件

export default class HomeHeader extends React.Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render() {
        return (

            <Navbar fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLink to="/index" activeStyle={{color: '#33e0ff'}}>
                            <LoginControl />
                        </IndexLink>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
            </Navbar>
        )
    }
}

