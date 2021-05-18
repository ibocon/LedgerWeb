// module
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// [LEDGER-121] https://github.com/ant-design/ant-design/issues/26136
import { Layout, Menu } from "antd";
import { MenuInfo } from "rc-menu/lib/interface";
import {
  AppstoreOutlined,
  BookOutlined,
  DesktopOutlined,
} from "@ant-design/icons";
// source
import {
  BreakPointType,
  Container,
  DecideBreakPoint,
  IsSmallBreakPoint,
} from "@ledger-component/styled";
import { useSelector } from "react-redux";
import * as ledger from "src/component";
import { Logo } from '../component';
import { selectUserId } from "../feature";
// type
enum MenuKey {
  ledger = "ledger",
  feature = "feature",
  update = "update",
}
// style
const headerHeight = 64;
const headerPadding = 50;
const StyledHeader = styled(Layout.Header)`
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: ${headerHeight}px;
  padding: 0px ${headerPadding}px;
`;
const contentPadding = headerPadding;
const StyledContent = styled(Layout.Content)`
  padding: 0px ${contentPadding}px;
  margin-top: ${headerHeight}px;
  background-color: #ffffff;
`;
// component
export function IntroPage() {
  const userId = useSelector(selectUserId);
  const [menuKey, setMenuKey] = useState<MenuKey>(MenuKey.ledger);
  const [breakWidth, setBreakWidth] = useState<BreakPointType>(
    BreakPointType.Large
  );

  useEffect(() => {
    window.addEventListener("resize", onResized);
    return () => window.removeEventListener("resize", onResized);
  });

  const onResized = () => {
    const newBreakPoint = DecideBreakPoint(window.innerWidth);
    setBreakWidth(newBreakPoint);
    if (newBreakPoint === BreakPointType.XSmall) {
      setMenuKey(MenuKey.ledger);
    }
  };

  const onMenuClick = (e: MenuInfo) => {
    const key = e.key.toString();
    if (
      key === MenuKey.ledger ||
      key === MenuKey.feature ||
      key === MenuKey.update
    ) {
      setMenuKey(key);
    }
  };

  const Menus = (
    <>
      <Menu.Item
        key={MenuKey.ledger}
        icon={<BookOutlined />}
        style={{ float: "left" }}
      >
        Ledger
      </Menu.Item>
      <Menu.Item
        key={MenuKey.feature}
        icon={<AppstoreOutlined />}
        style={{ float: "left" }}
      >
        Features
      </Menu.Item>
      <Menu.Item
        key={MenuKey.update}
        icon={<DesktopOutlined />}
        style={{ float: "left" }}
      >
        Updates
      </Menu.Item>
    </>
  );

  return (
    <Layout>
      <StyledHeader>
        <Container>
          <div style={{ float: "left", margin: "0px 24px 0px 0px" }}>
            <Logo width='128px' height='60px' />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[menuKey]}
            selectedKeys={[menuKey]}
            onClick={onMenuClick}
          >
            {IsSmallBreakPoint(breakWidth) && (
              <Menu.SubMenu title="Menus" style={{ float: "left" }}>
                {Menus}
              </Menu.SubMenu>
            )}
            {BreakPointType.Medium <= breakWidth && Menus}
            {userId == null ? (
              <>
                <Menu.Item style={{ float: "right" }}>
                  <Link to="/user/login">Login</Link>
                </Menu.Item>
                <Menu.Item style={{ float: "right" }}>
                  <Link to="/user/signup">Signup</Link>
                </Menu.Item>
              </>
            ) : (
              <Menu.Item style={{ float: "right" }}>
                <Link to="/board">Board</Link>
              </Menu.Item>
            )}
          </Menu>
        </Container>
      </StyledHeader>
      <StyledContent>
        <Container style={{ marginTop: "32px" }}>
          {menuKey === "ledger" && (
            <div>
              <h1>Ledger application introduction</h1>
              <p>Ledger application 에 대한 소개</p>
            </div>
          )}
          {menuKey === "feature" && (
            <div>
              <h1>Ledger feature introduction</h1>
              <p>Ledger feature 에 대한 소개</p>
            </div>
          )}
          {menuKey === "update" && (
            <div>
              <h1>Ledger update introduction</h1>
              <p>Ledger update 에 대한 소개</p>
            </div>
          )}
          <div>
            <ledger.Button size="small">small</ledger.Button>
            <ledger.Button size="middle">middle</ledger.Button>
            <ledger.Button size="large">large</ledger.Button>
          </div>
          <div>
            <ledger.Button shape='rectangle'>rectangle</ledger.Button>
            <ledger.Button shape='round'>round</ledger.Button>
            <ledger.Button shape='circle'>circle</ledger.Button>
            <ledger.Button size='large' shape='circle'>circle</ledger.Button>
          </div>
        </Container>
      </StyledContent>
    </Layout>
  );
}
export default IntroPage;
