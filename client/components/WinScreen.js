import React from "react";
import TweetButton from "./TweetButton";

const WinScreenStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
};
const WinMsgStyle = {
  height: "100px",
  margin: "0 auto"
};
class WinScreen extends React.Component {
  render() {
    return (
      <div style={WinScreenStyle}>
        <div style={WinMsgStyle}>You win at life!</div>
      </div>
    );
  }
}

export default WinScreen;
