import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Footer from "./Footer";

const { Header, Footer: AntFooter, Sider, Content } = Layout;

const index = ({children}) => {
  return (
    <Layout>
      <Header>
          <Navbar />
      </Header>
      <Content style={{ padding: '0 50px' }}>
          {children}
      </Content>
      <AntFooter>
          <Footer />
      </AntFooter>
    </Layout>
  );
};

export default index;
