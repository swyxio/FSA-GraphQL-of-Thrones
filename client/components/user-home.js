import React from "react";
import { connect } from "react-redux";
// import { wonLevel, resetLevels, gotoLevel, correctAnswer } from "../store";
import _ from "lodash";
import Header from "./Header";
import Footer from "./Footer";
import MainPanel from "./MainPanel";

/**
 * COMPONENT
 */
class UserHome extends React.Component {
  render() {
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <MainPanel />
        <Footer menuButtonClick={this.props.menuButtonClick} />
      </div>
    );
  }
}

export default UserHome;
