"use client";
import { SideMenuForAdmin } from "@/components/ui/DashboardSideMenu/DashboardSideMenu";
import MyDrawer from "@/components/ui/MyDrawer/MyDrawer";
import { ContextProvider } from "@/lib/providers/MyContextProvider";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import React, { useContext, useState } from "react";

const { Header, Sider, Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(ContextProvider);

  const windowWidth = context ? context.windowWidth : undefined;
console.log(windowWidth);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="h-screen">
      <Sider className="hidden md:block h-screen" trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <SideMenuForAdmin />
        {/* <SideMenuForTrainer /> */}
        {/* <SideMenuForTrainee /> */}
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            className="hidden md:block"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <MyDrawer title="Menu" className="block md:hidden ">
            <div className="h-full bg-[#001529] pt-5">

          <SideMenuForAdmin />
            </div>
          </MyDrawer>
        </Header>
        <Content
        className="overflow-x-hidden "
          style={{
            margin: "24px 16px",
            // padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
