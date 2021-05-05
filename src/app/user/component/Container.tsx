// module
import React from "react";
import styled from "styled-components";
import { Layout } from "antd";
// source
import { BreakPointType } from "@ledger-component/styled";
// style
const StyledLayout = styled(Layout)`
  // layout
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 300px;
  width: ${BreakPointType.Small}px;
  min-height: 600px;
  // padding
  padding-top: 48px;
  padding-left: 40px;
  padding-bottom: 36px;
  padding-right: 40px;
  // border
  box-sizing: border-box;
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
  // background
  background-color: rgb(255, 255, 255);
  // media
  @media (max-width: ${BreakPointType.Small}px) {
    width: 100vw;
    height: 100vh;
    align-items: stretch;
    justify-content: stretch;
  }
`;
// component
export function Container(props: { children: React.ReactNode }) {
  return <StyledLayout>{props.children}</StyledLayout>;
}
export default Container;
