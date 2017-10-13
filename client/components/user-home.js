import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CustomGraphiQL from "./graphql";
import fetch from "isomorphic-fetch";
import { wonLevel, resetLevels, gotoLevel, correctAnswer } from "../store";
import _ from "lodash";

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
        handleCorrectAnswer();
      }
      return x;
    });
};
/**
 * COMPONENT
 */
class UserHome extends React.Component {
  render() {
    const { gamestate, handleCorrectAnswer, wonLevel } = this.props;
    localcurrentanswer = gamestate.levelInfo.answer;
    return (
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ flex: 1 }}>
          <p>
            Current Level: {gamestate.currentLevel}
            Completed Levels: {JSON.stringify(gamestate.completedLevels)}
          </p>
          <h1>
            {gamestate.levelInfo.title}
          </h1>
          <p>
            {gamestate.levelInfo.text}
          </p>
          {/*JSON.stringify(gamestate)*/}
        </div>
        <CustomGraphiQL fetcher={graphQLFetcher(handleCorrectAnswer)} />
        <div style={{ height: "100px" }}>
          <p>click to proceed</p>
          <button
            disabled={!gamestate.correctAnswer}
            onClick={() => wonLevel(gamestate.currentLevel)}
          >
            correctAnswer
          </button>
        </div>
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

    handleCorrectAnswer() {
      dispatch(correctAnswer());
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
