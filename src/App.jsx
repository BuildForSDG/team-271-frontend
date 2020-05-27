import React from 'react';
import Login from './components/login';
import { Layout, Typography } from 'antd';
import { orange } from '@ant-design/colors';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout>
      <Header style={{ backgroundColor: orange.primary }}>
        <Title level={2} className="logo">
          WONYA
        </Title>
      </Header>
      <Content>
        <Login />
      </Content>
      <Footer style={{ backgroundColor: orange.primary }}>
        <h3> Wonya @2020 </h3>
      </Footer>
      <style global jsx>
        {`
          .ant-layout-header h2 {
            color: #fff;
            padding-top: 8px;
          }
        `}
      </style>
    </Layout>
  );
}

export default App;
