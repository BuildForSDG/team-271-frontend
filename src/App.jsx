import React, { Component } from 'react';
import { Layout, Menu, Typography } from 'antd';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function App() {
    return (
      <Router>    
        <Layout>
        <Header className="app-header">
          <div className="logo"><Title>WONYA</Title></div>
          <Menu justify="right" className="top-menu" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to={'/'} className="nav-link"> Home </Link></Menu.Item>
            <Menu.Item key="2"><Link to={'/login'} className="nav-link">Login</Link></Menu.Item>
            <Menu.Item key="3"><Link to={'/signup'} className="nav-link">SignUp</Link></Menu.Item>
            <Menu.Item key="4"><Link to={'/contact'} className="nav-link">Contact</Link></Menu.Item>
          </Menu>
        </Header>

        <Layout className="content-layout">
          <Switch>
              <Route path exact='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </Layout>   

        <Footer>
          <Paragraph className="footer-info">  Wonya @2020  </Paragraph>
        </Footer>
      </Layout>
    </Router>
    );
}
