import React from 'react';
import { Layout, Form, Input, Checkbox, Button, Row, Col, Typography, Divider, Select } from "antd";
import 'antd/dist/antd.css';
// import '../index.scss';
import { 
  FacebookFilled, 
  GoogleOutlined,
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined
} from '@ant-design/icons';
const { Content } = Layout;
const { Title } = Typography;
const { Option } = Select;

export default function SignupLayout() {

  return (
    <Content className="sigup-content">
        <Row justify="center">
      <Col xs={24} sm={22} md={10} lg={8} xl={8} >
      <Title level={2}>SIGN UP</Title>
      <Row justify="center" gutter={[8, 24]}>
        <Col xs={22} sm={22} md={12} lg={12} xl={12}>
        <Button data-testid="facebook-btn" className="facebook-btn btn" icon={<FacebookFilled />}>
          Facebook
        </Button>
        </Col>
        <Col xs={22} sm={22} md={12} lg={12} xl={12} >
        <Button  className="google-btn btn" icon={<GoogleOutlined />}>
          Google
        </Button>
        </Col>
      </Row>
      <Divider>OR</Divider> 
      <Form
      name="basic"
      >
        <Row justify="center" gutter={[8]}>
        <Col xs={22} sm={22} md={12} lg={12} xl={12}>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="First Name" />
          </Form.Item>
        </Col>
        <Col xs={22} sm={22} md={12} lg={12} xl={12}>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Last Name" />
          </Form.Item>
        </Col>
        </Row>
        
        <Form.Item
        name="email"
        rules={[
          {type: 'email', message: 'The input is not valid E-mail!',},
          {required: true, message: 'Please input your E-mail!',},
        ]}
        >
          <Input prefix={<MailOutlined className="mail-item-icon" />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Confirm your password!' }]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className="submit-button">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      </Col>
    </Row>
    </Content>
  );
}