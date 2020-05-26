import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class RightMenu extends Component {
  render() {
    return(
      <Menu className="top-menu right-menu" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link to={'/'} > Home </Link></Menu.Item>
        <Menu.Item key="2"><Link to={'/login'}>Login</Link></Menu.Item>
        <Menu.Item key="3"><Link to={'/signup'} >SignUp</Link></Menu.Item>
        <Menu.Item key="4"><Link to={'/contact'} >Contact</Link></Menu.Item>
      </Menu>
    );
  }
}