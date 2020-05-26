import React, { Component } from 'react';
import { Layout, Form, Input, Checkbox, Button, Row, Col, Typography, Divider } from "antd";
const { Content } = Layout;
const { Title } = Typography;

class Home extends Component {
  render() {
    return (
        <Content>
          <Title>Welcome to Wonya</Title>
        </Content>
    );
  }
}

export default Home