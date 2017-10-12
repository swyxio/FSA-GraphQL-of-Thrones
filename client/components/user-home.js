import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CustomGraphiQL from "./graphql";
import fetch from "isomorphic-fetch";

function graphQLFetcher(graphQLParams) {
  return fetch(window.location.origin + "/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  })
    .then(response => response.json())
    .then(x => {
      console.log("response", x);
      return x;
    });
}
/**
 * COMPONENT
 */
export const UserHome = props => {
  return (
    <div style={{ minHeight: "500px" }}>
      <CustomGraphiQL fetcher={graphQLFetcher} style={{ height: "500px" }} />
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  // return {
  //   email: state.user.email
  // };
  return {};
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
