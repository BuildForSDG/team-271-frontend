import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class CollapsedMenu extends Component {
  render() {
    return(
      <Menu className="top-menu" mode="vertical" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to={'/'} className="nav-link"> Home </Link></Menu.Item>
        <Menu.Item key="2"><Link to={'/login'} className="nav-link">Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to={'/signup'} className="nav-link">SignUp</Link></Menu.Item>
        <Menu.Item key="4"><Link to={'/contact'} className="nav-link">Contact</Link></Menu.Item>
      </Menu>
    );
  }
}