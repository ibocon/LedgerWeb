// module
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
// source
import { Logo } from "src/app/component";
import { selectSidebarCollapsed } from "src/app/feature/interfaceFeature";
// style
const StyledMenu = styled(Menu.Item)`
  font-size: 16px;
`;
// component
let logoAlign: "left" | "center" = "left";
let logoIndent = 24;
let logoWidth = 128;
export function Sider(props: {}) {
  const sidebarCollapsed = useSelector(selectSidebarCollapsed);
  if (sidebarCollapsed) {
    logoAlign = "center";
    logoIndent = 0;
    logoWidth = 50;
  } else {
    logoAlign = "left";
    logoIndent = 24;
    logoWidth = 128;
  }

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={sidebarCollapsed}
      width="260px"
    >
      <div
        style={{
          marginTop: "12px",
          marginLeft: `${logoIndent}px`,
          textAlign: logoAlign,
        }}
      >
        <Logo width={logoWidth} />
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
        <StyledMenu key="1" icon={<UserOutlined />}>
          History
        </StyledMenu>
        <StyledMenu key="2" icon={<VideoCameraOutlined />}>
          Incomes &amp; Expenses
        </StyledMenu>
        <StyledMenu key="3" icon={<UploadOutlined />}>
          Assets &amp; Liabilities
        </StyledMenu>
      </Menu>
    </Layout.Sider>
  );
}
export default Sider;
