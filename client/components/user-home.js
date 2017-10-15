import React from "react";
import PropTypes from "prop-types";
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
// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     gamestate: state.gamestate
//   };
// };
// /**
//  * CONTAINER
//  */
// const mapDispatch = dispatch => {
//   return {
//     wonLevel(level) {
//       dispatch(wonLevel(level));
//     },

//     resetLevels(e) {
//       e.preventDefault();
//       dispatch(resetLevels());
//     },

//     gotoLevel(e, level) {
//       e.preventDefault();
//       dispatch(gotoLevel(level));
//     },

//     handleCorrectAnswer(x) {
//       dispatch(correctAnswer());
//       return x;
//     }
//   };
// };

// export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
