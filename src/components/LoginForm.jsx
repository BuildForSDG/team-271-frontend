import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { layout, tailLayout } from './logincss'

const LoginForm = () => {
  const [loginValues, setLoginValues] = useState({
    username: '',
    password: ''
  });
  const onFinish = () => {
    console.log('Login Values', loginValues);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        value={loginValues.username}
        onChange={(e) => setLoginValues({ ...loginValues, username: e.target.value })}
        rules={[
          {
            required: true,
            message: 'Please input your username!'
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        value={loginValues.password}
        onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
        rules={[
          {
            required: true,
            message: 'Please input your password!'
          }
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
