import React from 'react';
import { Layout, Form, Input, Checkbox, Button, Row, Col, Typography } from "antd";
import 'antd/dist/antd.css';
import { green } from '@ant-design/colors';
import { FacebookFilled, GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title } = Typography;

export default function Login() {

  return (
    <Content className="login-content">
    <Row justify="center">
      <Col xs={24} sm={22} md={10} lg={8} xl={8} >
      <Title level={2}>SIGN IN</Title>
      <Row justify="center" gutter={[8, 24]}>
        <Col xs={22} sm={22} md={12} lg={12} xl={12}>
        <Button className="facebook-btn btn" icon={<FacebookFilled />}>
          Facebook
        </Button>
        </Col>
        <Col xs={22} sm={22} md={12} lg={12} xl={12} >
        <Button  className="google-btn btn" icon={<GoogleOutlined />}>
          Google
        </Button>
        </Col>
      </Row>
      <Form
      name="basic"
      >
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

        <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit" className="submit-button">
            Sign In
          </Button>
        </Form.Item>
      </Form>
      </Col>
    </Row>

    <style jsx>
      {
        `
          .login-content {
            padding: 100px;
          }

          .submit-button {
            background-color: ${green.primary};
            border-color: ${green.primary};
          }

          .btn {
            width: 100%;
            color: white;
          }
          .facebook-btn {
            background-color: #3b5998;
            border-color: #3b5998;
          }

          .facebook-btn:hover {
            background-color: #324b81;
            border-color: #324b81;
            color: white;
          }

          .google-btn {
            background-color: #DB4437;
            border-color: #DB4437;
          }

          .google-btn:hover {
            color: white;
            background-color: #c23124;
            border-color: #c23124;
          }

          .login-form-forgot {
            float: right;
          }
        `
      }
    </style>
    </Content>
  );
}