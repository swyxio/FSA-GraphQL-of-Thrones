import React from "react";

export default props =>
  <div>
    <a
      target="_blank"
      href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fgraphql-of-thrones.herokuapp.com&via=swyx&text=TIL%20GraphQL%20is%20so%20simple%20even%20Jon%20Snow%20knows%20it%21&hashtags=GraphQL%2CGoT"
    >
      {props.text || "Tweet"}
    </a>
  </div>;

// http://tech.cymi.org/tweet-intents
