import React, { Component } from "react";
import { connect } from "react-redux";
import { Router } from "react-router";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import history from "./history";
import { Main, Login, Signup, UserHome, SidebarContent } from "./components";
import { me } from "./store";
import Sidebar from "react-sidebar";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

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

    // this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    // this.renderPropNumber = this.renderPropNumber.bind(this);
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
    const { isLoggedIn } = this.props;

    // <Switch>
    //   {/* Routes placed here are available to all visitors */}
    //   <Route path='/login' component={Login} />
    //   <Route path='/signup' component={Signup} />
    // </Switch>
    // {
    //   isLoggedIn &&
    //     <Switch>
    //       {/* Routes placed here are only available after logging in */}
    //       <Route path='/home' component={UserHome} />
    //     </Switch>
    // }
    // {/* Displays our Login component as a fallback */}
    // <Route component={Login} />

    //
    // <Route path="/home" component={UserHome} />

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
      <Router history={history}>
        <Sidebar {...sidebarProps}>
          <Main>
            <Route
              path="/"
              render={() => <UserHome menuButtonClick={this.menuButtonClick} />}
            />
          </Main>
        </Sidebar>
      </Router>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

export default connect(mapState, mapDispatch)(Routes);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
