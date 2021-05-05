// module
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// file
import logo from "../resource/logo.svg";
// style
const StyledLogo = styled.img`
  width: 128px;
  height: 60px;
  alt: "Ledger application's logo";
`;
// type
type LogoProps = {
  width: number | string;
  height: number | string;
}
// component
export const Logo : React.FC<LogoProps> = (props) => {

  const history = useHistory();
  const onLogoClicked = () => {
    history.push("/");
  };

  const { width, height } = props;

  return (
    <StyledLogo
      src={logo}
      style={{ width, height }}
      onClick={onLogoClicked}
    />
  );
};
export default Logo;
