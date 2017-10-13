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
          <h1>
            Level {gamestate.currentLevel}: {gamestate.levelInfo.title}
          </h1>
          <blockquote>
            {gamestate.levelInfo.text}
          </blockquote>
        </div>
        <CustomGraphiQL fetcher={graphQLFetcher(handleCorrectAnswer)} />
        <div style={{ height: "100px", display: "flex" }}>
          <div style={{ flex: 1 }}>
            Current Level: {gamestate.currentLevel}
          </div>
          <div style={{ flex: 1 }}>
            Completed Levels: {JSON.stringify(gamestate.completedLevels)}
          </div>
          <div style={{ flex: 1 }}>
            <button
              disabled={!gamestate.correctAnswer}
              onClick={() => wonLevel(gamestate.currentLevel)}
            >
              {gamestate.correctAnswer
                ? "Success! Click to Proceed"
                : "Please solve before proceeding"}
            </button>
          </div>
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
