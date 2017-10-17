import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { openModal, closeModal } from "../store";
import md from "react-markings";
import TweetButton from "./TweetButton";
import history from "../history";

class MyModal extends React.Component {
  render() {
    const { openModal, closeModal, modalstate, gamestate } = this.props;
    // <button onClick={openModal}>Open Modal</button>
    const showVictory = (
      <div>
        Correct! Level {gamestate.currentLevel} cleared! Feel free to play
        around some more, and you can hit <b>Next</b> when you are ready to
        proceed.
        <hr />
        <TweetButton text="Tweet your Victory!" />
      </div>
    );
    const customStyles = {
      overlay: {
        backgroundColor: "rgba(0,0,0,0.8)",
        zIndex: 5
      },
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: gamestate.correctAnswer ? "limegreen" : "white"
      }
    };
    return (
      <div>
        <Modal
          isOpen={modalstate}
          style={customStyles}
          contentLabel="GraphQL of Thrones"
          shouldCloseOnOverlayClick={true}
        >
          <div>
            <h2 ref={subtitle => (this.subtitle = subtitle)}>
              {gamestate.levelInfo.title}
            </h2>
            <div>
              {gamestate.correctAnswer
                ? showVictory
                : <div>
                    <h3 style={{ textAlign: "center" }}>
                      {gamestate.levelInfo.character}
                    </h3>
                    <hr />
                    {md([gamestate.levelInfo.story])}
                  </div>}
            </div>
          </div>
          <div>
            <button
              onClick={() => closeModal(gamestate)}
              className="modal__button"
            >
              {gamestate.correctAnswer
                ? "Hit Next to proceed. Got it!"
                : "Shall we begin?"}
            </button>
          </div>
        </Modal>
      </div>
    );
  }
}

// <form>
//   <input />
//   <button>tab navigation</button>
//   <button>stays</button>
//   <button>inside</button>
//   <button>the modal</button>
// </form>
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    modalstate: state.modalstate,
    gamestate: state.gamestate
  };
};
/**
 * CONTAINER
 */
const mapDispatch = dispatch => {
  return {
    openModal() {
      dispatch(openModal());
    },
    closeModal(gamestate) {
      dispatch(closeModal());
      const isLastVictory =
        gamestate.correctAnswer &&
        gamestate.currentLevel == gamestate.totalLevels - 1;
      if (isLastVictory) history.push("/greatsuccess");
    }
  };
};

export default connect(mapState, mapDispatch)(MyModal);
