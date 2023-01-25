import React from "react";
import { Layout, ConfigProvider } from "antd";
import styled from "styled-components";
import DegenLogo from "./layout/logo";
import MainContent from "./layout/MainContent";
import { useRef } from "react";

const { Header, Content } = Layout;

function App() {
  const containerRef = useRef(null);
  return (
    <ConfigProvider
      direction="ltr"
      getPopupContainer={(node) => node?.parentNode}
    >
      <div ref={containerRef}>
        <Layout style={{ minWidth: "100vh", filter: "grayscale(1)" }}>
          <Header>
            <DegenLogo />
          </Header>
          <WrapContent>
            <MainContent />
          </WrapContent>
        </Layout>
      </div>
    </ConfigProvider>
  );
}

const WrapContent = styled(Content)`
  min-height: "100vh";
  padding: 10px;
`;

export default App;
