// module
import React from "react";
import styled from "styled-components";
// style
const StyledLabel = styled.label`
  color: rgb(146, 146, 146);
`;
// component
export function Label(props: { children: React.ReactNode }) {
  return <StyledLabel>{props.children}</StyledLabel>;
}
export default Label;
