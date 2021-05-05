// module
import React from "react";
import { Layout } from "antd";
import styled from "styled-components";
// source
import { BreakPointType } from "@ledger-component/styled";
import { Header } from "./Header";
import { Sider } from "./Sider";
import { AddRecordMenu } from "./AddRecordMenu";
// style
const StyledContent = styled(Layout.Content)`
  background-color: rgb(255, 255, 255);
  margin: 24px 18px;
  padding: 24px;
  min-height: 600px;
`;
// component
export function BoardPage() {
  return (
    <Layout style={{ minWidth: BreakPointType.Small }}>
      <Sider />
      <Layout style={{ backgroundColor: "rgb(235,235,235)" }}>
        <Header />
        <StyledContent></StyledContent>
      </Layout>
      <div style={{ position: "fixed", bottom: 15, right: 15 }}>
        <AddRecordMenu />
      </div>
    </Layout>
  );
}
export default BoardPage;
