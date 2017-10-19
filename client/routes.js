import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import history from "./history";
import {
  Main,
  Login,
  Signup,
  UserHome,
  SidebarContent,
  WinScreen,
  Landing
} from "./components";
import Sidebar from "react-sidebar";

// https://github.com/react-ga/react-ga
var ReactGA = require("react-ga");
ReactGA.initialize("UA-79238211-5");

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

/**
 * COMPONENT
 */
class Routes extends Component {
  constructor(props) {
    super(props);
    //https://github.com/balloob/react-sidebar/blob/master/example/src/index.js#L101
    this.state = {
      docked: false,
      open: false,
      transitions: true,
      touch: true,
      shadow: true,
      pullRight: false,
      touchHandleWidth: 20,
      dragToggleDistance: 30
    };

    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({ open: open });
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    console.log("******hi");
    this.onSetOpen(!this.state.open);
  }

  render() {
    var sidebarContent = <SidebarContent />;
    const sidebarProps = {
      sidebar: sidebarContent,
      docked: this.state.docked,
      sidebarClassName: "custom-sidebar-class",
      open: this.state.open,
      touch: this.state.touch,
      shadow: this.state.shadow,
      pullRight: this.state.pullRight,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
      onSetOpen: this.onSetOpen
    };
    return (
      <Router history={history} onUpdate={logPageView}>
        <Switch>
          <Route path="/greatsuccess" component={WinScreen} />
          <Route
            path="/learn"
            render={() =>
              <Sidebar {...sidebarProps}>
                <Main>
                  <UserHome menuButtonClick={this.menuButtonClick} />
                </Main>
              </Sidebar>}
          />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {};
// };

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me());
//     }
//   };
// };

// export default connect(mapState, mapDispatch)(Routes);
export default Routes;
