import React, { Component } from "react";
import { Layout } from "antd";

import IframeContent from "./components/IframeContent";
import SiderTree from "./components/SiderTree";

import "./index.css";
const { Content, Sider } = Layout;
class HomePage extends Component {
  state = {
    current: "cosplay",
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;

    return (
      <Layout style={{ minHeight: "100vh", padding: "10px 20px" }}>
        <Sider className="site-layout-background">
          <SiderTree></SiderTree>
        </Sider>
        <Content style={{ margin: "0 16px" }}>
          <IframeContent></IframeContent>
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
