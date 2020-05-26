import React, { Component } from 'react';
import { Layout, Menu, Typography, Button, Drawer } from 'antd';
import Login from './pages/login';
import SignUp from './pages/signup';
import Home from './pages/home';
import RightMenu from './components/menu';
import CollapsedMenu from './components/collapsedMenu';
import { MenuFoldOutlined } from '@ant-design/icons';
import 'bootstrap';
import './app.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const { Header, Footer, Content } = Layout;
const { Title, Paragraph } = Typography;

export default class App extends Component {

    state = {
      current: 'mail',
      visible: false
    }

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };

    onClose = () => {
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <Router>    
          <Layout>
          <Header className="app-header">
            <nav className="app-nav">
              <div className="logo">
                <Link to={'/'} > Wonya </Link>
              </div>
              <div className="menuContainer">
                <div className="rightMenu">
                <RightMenu />
                </div>               
                <Button 
                className="barsMenu" 
                type="default" 
                onClick={this.showDrawer} 
                icon={<MenuFoldOutlined />}/>
                <Drawer
                  title="Wonya"
                  placement="right"
                  closable={true}
                  onClose={this.onClose}
                  visible={this.state.visible}
                >
                  <CollapsedMenu />
                </Drawer>
              </div>

            </nav>
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
}
