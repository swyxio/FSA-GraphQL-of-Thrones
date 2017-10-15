import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import fetch from "isomorphic-fetch";
import { wonLevel, resetLevels, gotoLevel, correctAnswer } from "../store";
import _ from "lodash";
import Header from "./Header";
import Footer from "./Footer";
import MainPanel from "./MainPanel";

const checkIfCorrectAnswer = (response, answer) => Object.keys(answer).every();
let localcurrentanswer = {};
const graphQLFetcher = handleCorrectAnswer => graphQLParams => {
  // console.log("graphQLParams", graphQLParams);
  return fetch(window.location.origin + "/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  })
    .then(response => response.json())
    .then(x => {
      console.log("response", x.data);
      console.log("correctAnswer", localcurrentanswer);
      console.log("handleCorrectAnswer", handleCorrectAnswer);
      if (_.isEqual(localcurrentanswer, x.data)) {
        console.log("****_.isEqual(correctAnswer, x.data)");
        return handleCorrectAnswer(x);
      }
      return x;
    });
};
/**
 * COMPONENT
 */
class UserHome extends React.Component {
  render() {
    const {
      gamestate,
      handleCorrectAnswer,
      wonLevel,
      menuButtonClick
    } = this.props;
    localcurrentanswer = gamestate.levelInfo.answer;
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Header />
        <MainPanel graphQLFetcher={graphQLFetcher(handleCorrectAnswer)} />
        <Footer menuButtonClick={menuButtonClick} />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    gamestate: state.gamestate
  };
};
/**
 * CONTAINER
 */
const mapDispatch = dispatch => {
  return {
    wonLevel(level) {
      dispatch(wonLevel(level));
    },

    resetLevels(e) {
      e.preventDefault();
      dispatch(resetLevels());
    },

    gotoLevel(e, level) {
      e.preventDefault();
      dispatch(gotoLevel(level));
    },

    handleCorrectAnswer(x) {
      dispatch(correctAnswer());
      return x;
    }
  };
};

export default connect(mapState, mapDispatch)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
