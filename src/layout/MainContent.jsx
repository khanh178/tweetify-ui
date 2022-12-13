import { Affix, Row, Col, Space } from "antd";
import React, { useState } from "react";
import NewsContext from "../context/NewsContext";
import TweetNews from "../news-zone/TweetNews";
import PositionTerminal from "../trading-zone/PositionTerminal";

function MainContent() {
  const [tweetList, setTweetList] = useState([]);

  const contextValue = {
    tweetList,
    setTweetList,
  };

  return (
    <NewsContext.Provider value={contextValue}>
      <Row gutter={16}>
        <Col span={16}>
          <TweetNews />
        </Col>
        <Col span={8}>
          <PositionTerminal />
        </Col>
      </Row>
    </NewsContext.Provider>
  );
}

export default MainContent;
