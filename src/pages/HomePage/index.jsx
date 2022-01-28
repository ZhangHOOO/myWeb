import React, { Component } from "react";
import { Menu, Layout } from "antd";
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
// const { SubMenu } = Menu;
import GameList from "./components/GameList";
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
        <Sider width={300}>
          <Menu
            onClick={this.handleClick}
            // style={{ width: 256 }}
            mode="inline"
            selectedKeys={[current]}
          >
            <Menu.Item key="cosplay">角色扮演</Menu.Item>
            <Menu.Item key="actionGame">动作游戏</Menu.Item>
            <Menu.Item key="gunfightGame">枪战游戏</Menu.Item>

            {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu> */}
          </Menu>
        </Sider>
        <Content style={{ margin: "0 16px" }}>
          <GameList></GameList>
        </Content>
      </Layout>
    );
  }
}

export default HomePage;
