// module
import React from "react";
import { Typography } from "antd";
// type
const { Title } = Typography;
// component
export function Logo() {
  return (
    <Title
      level={3}
      ellipsis={false}
      style={{
        alignSelf: "center",
        color: "rgb(140, 140, 140)",
      }}
    >
      Ledger
    </Title>
  );
}
