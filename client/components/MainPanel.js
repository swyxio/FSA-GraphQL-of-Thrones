import React from "react";
import { connect } from "react-redux";
import { Accordion, AccordionItem } from "react-sanfona";
import CustomGraphiQL from "./graphql";
import SplitterLayout from "react-splitter-layout";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import md from "react-markings";
import { correctAnswer, openModal } from "../store";

// const checkIfCorrectAnswer = (response, answer) =>
// Object.keys(response).includes("addComment") || Object.keys(answer).every();

const graphQLFetcher = handleCorrectAnswer => graphQLParams => {
  // console.log("graphQLParams", graphQLParams);
  return fetch(window.location.origin + "/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(graphQLParams)
  })
    .then(response => response.json())
    .then(x => {
      // console.log("response", x.data);
      // console.log("correctAnswer", localcurrentanswer);
      // include special hack for open ended addComment responses
      const addComment =
        x.data.addComment &&
        x.data.addComment.CommenterName == "NewGraphQLUser";
      if (addComment || _.isEqual(localcurrentanswer, x.data)) {
        // console.log("****_.isEqual(correctAnswer, x.data)");
        return handleCorrectAnswer(x);
      }
      return x;
    });
};

let localcurrentanswer = {};
const Hodoreasteregg = `

{
  Hodor
}


`;
const Hodoreastereggstyle = {
  background: "#152b39",
  color: "white",
  paddingLeft: "50px"
};
class MainPanel extends React.Component {
  // https://github.com/daviferreira/react-sanfona
  render() {
    const { gamestate, handleCorrectAnswer } = this.props;
    const accordionstyle = {
      background: "#d4d5d6",
      color: "rgb(32, 64, 86)"
    };
    localcurrentanswer = gamestate.levelInfo.answer;
    return (
      <div style={{ flex: 1, display: "flex" }}>
        <SplitterLayout
          primaryIndex={1}
          percentage
          primaryMinSize={20}
          secondaryMinSize={10}
          secondaryInitialSize={33}
        >
          <Accordion allowMultiple activeItems={[0, 1]} style={accordionstyle}>
            <AccordionItem title={"🐉 Story"} slug={0} key={0} expanded>
              <StyledAccordionItemHeader>
                {gamestate.levelInfo.title}
              </StyledAccordionItemHeader>
              <div>
                {md([gamestate.levelInfo.story])}
                {gamestate.currentLevel === 1 &&
                  <pre style={Hodoreastereggstyle}>
                    <code>
                      {Hodoreasteregg}
                    </code>
                  </pre>}
              </div>
              <StyledAccordionItemHeader>Your Task</StyledAccordionItemHeader>
              <div>
                {md([gamestate.levelInfo.mission])}
                <hr />
                If you need help, please see the Instructions below.
              </div>
            </AccordionItem>
            <AccordionItem
              title={"👩‍🎓 Instructions"}
              slug={2}
              key={2}
              expanded
            >
              <StyledAccordionItemHeader>
                {gamestate.levelInfo.realsubTitle}
              </StyledAccordionItemHeader>
              <div>
                {md([gamestate.levelInfo.instructions])}
              </div>
            </AccordionItem>
            {gamestate.levelInfo.link &&
              <AccordionItem title={"📓 Read the docs "} slug={3} key={3}>
                For more, please read{" "}
                <a href={gamestate.levelInfo.link} target="_blank">
                  {gamestate.levelInfo.link}
                </a>!
              </AccordionItem>}
            <AccordionItem title={"🤼 Community"} slug={4} key={4}>
              We have yet to build out the community feature. In the meantime,
              please just yell at
              <a href="http://twitter.com/swyx">@swyx on Twitter</a>!
            </AccordionItem>
            <AccordionItem title={"🐛 Report a Bug"} slug={5} key={5}>
              <div>
                We have yet to build out good bug reporting. In the meantime,
                please file an issue at
                <a href="https://github.com/sw-yx/FSA-GraphQL-of-Thrones/issues">
                  our Github page
                </a>
                or yell at
                <a href="http://twitter.com/swyx">@swyx on Twitter</a>!
              </div>
            </AccordionItem>
          </Accordion>
          <CustomGraphiQL
            fetcher={graphQLFetcher(handleCorrectAnswer)}
            customgraphiql={gamestate.levelInfo.customgraphiql}
            currentLevel={gamestate.currentLevel}
          />
        </SplitterLayout>
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
    handleCorrectAnswer(x) {
      dispatch(correctAnswer());
      dispatch(openModal());
      return x;
    }
  };
};

export default connect(mapState, mapDispatch)(MainPanel);

const StyledAccordionItemHeader = styled.div`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: .75rem;
  font-weight: bold;
  color: #34b3a0;
  line-height: 1.4;
  margin-bottom: .3125rem;
  text-transform: uppercase;
`;
