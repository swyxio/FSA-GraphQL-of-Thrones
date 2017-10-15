import React from "react";
import { connect } from "react-redux";
import gamedata from "../game";

const styles = {
  sidebar: {
    width: 256,
    height: "100%"
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none"
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575"
  },
  content: {
    padding: "16px",
    height: "100%",
    backgroundColor: "white"
  }
};

class SidebarContent extends React.Component {
  render() {
    const style = this.props.style
      ? { ...styles.sidebar, ...props.style }
      : styles.sidebar;

    const links = gamedata.map((singlegame, ind) =>
      <a key={ind} style={styles.sidebarLink}>
        {ind}. {singlegame.title}
      </a>
    );

    return (
      <div title="Menu" style={style}>
        <div style={styles.content}>
          <a href="index.html" style={styles.sidebarLink}>
            Home
          </a>
          <a href="responsive_example.html" style={styles.sidebarLink}>
            Responsive Example
          </a>
          <div style={styles.divider} />
          {links}
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
  return {};
};

export default connect(mapState, mapDispatch)(SidebarContent);
