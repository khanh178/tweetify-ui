import React from "react";
import { RobotOutlined } from "@ant-design/icons";
import { Space } from "antd";
import styled from "styled-components";

function DegenLogo() {
  return (
    <WithSpace align="center">
      <RobotOutlined style={{ fontSize: "32px" }} />
      <LogoText>Degen Tweet Bot</LogoText>
    </WithSpace>
  );
}

const WithSpace = styled(Space)`
  color: white;
  span {
    vertical-align: middle;
  }
`;

const LogoText = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export default DegenLogo;
