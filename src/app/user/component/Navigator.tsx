// module
import React from "react";
// style
// component
export function Navigator(props: { text: string; link: React.ReactNode }) {
  return (
    <div
      style={{
        alignSelf: "center",
        display: "flex",
      }}
    >
      <p
        style={{
          // Layout
          alignSelf: "center",
          marginBottom: "0px",
          marginRight: "8px",
          // Text
          lineHeight: 1.32,
          color: "rgb(126, 126, 126)",
          fontSize: "14px",
        }}
      >
        {props.text}
      </p>
      {props.link}
    </div>
  );
}
export default Navigator;
