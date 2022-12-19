import React, { useState } from "react";
import { Row } from "antd";
import "antd/dist/antd.min.css";
import { PieChartOutlined, HomeOutlined } from "@ant-design/icons";

import { Routes, Route, useNavigate } from "react-router-dom";
import Create from "./Modals/Create/Create";
import Smarthomes from "./Smarhomes/Smarthomes";

import "./Home.scss";

import { Layout, Menu } from "antd";
import Dashboard from "./Dashboard/Dashboard";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const items = [
    getItem(
      <div
        onClick={() => {
          navigate("/");
        }}
      >
        Dashboard
      </div>,
      "1",
      <PieChartOutlined />
    ),
    getItem(
      <div
        onClick={() => {
          navigate("/smarthomes");
        }}
      >
        Smarthomes
      </div>,
      "2",
      <HomeOutlined />
    ),
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Row>
            <Create />
          </Row>
        </Header>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <div style={{ width: "100%" }}>
              <Routes>
                <Route exact path="/" element={<Dashboard />} />

                <Route exact path="/smarthomes" element={<Smarthomes />} />
              </Routes>
            </div>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Chamseddine Bouallegue ©2022
        </Footer>
      </Layout>
    </Layout>
  );
}
