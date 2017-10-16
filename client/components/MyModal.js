import React from "react";
import { connect } from "react-redux";
import Modal from "react-modal";
import { openModal, closeModal } from "../store";
import md from "react-markings";

class MyModal extends React.Component {
  render() {
    const { openModal, closeModal, modalstate, gamestate } = this.props;
    // <button onClick={openModal}>Open Modal</button>
    const showVictory = (
      <p>
        Correct! Level {gamestate.currentLevel} cleared! Feel free to play
        around some more, and you can hit <b>Next</b> when you are ready to
        proceed.
      </p>
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
                : md([gamestate.levelInfo.story])}
            </div>
          </div>
          <div>
            <button onClick={closeModal} className="modal__button">
              Ok, got it!
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
    closeModal() {
      dispatch(closeModal());
    }
  };
};

export default connect(mapState, mapDispatch)(MyModal);