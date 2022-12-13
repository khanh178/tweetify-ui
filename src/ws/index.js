import { w3cwebsocket as W3CWebSocket } from "websocket";

export const initWS = (props) => {
  const { tweetList, setTweetList } = props;
  console.log("🚀 ~ file: index.js ~ line 5 ~ initWS ~ tweetList", tweetList);

  const client = new W3CWebSocket("ws://127.0.0.1:8000");
  window.webSocketInstance = client;

  client.onopen = () => {
    console.log("WebSocket Client Connected");
  };

  client.onmessage = (message) => {
    console.log("🚀 ~ file: index.js ~ line 11 ~ initWS ~ message", tweetList);
    if (message.data) {
      const data = JSON.parse(message.data);
      if (tweetList.length < 20) {
        const newList = [...tweetList, data];
        setTweetList(newList);
      }
    }
  };

  client.onerror = function () {
    console.log("Connection Error");
  };

  client.onclose = function () {
    console.log("echo-protocol Client Closed");
  };

  return client;
};
