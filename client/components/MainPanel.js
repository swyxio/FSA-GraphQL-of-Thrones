import React from "react";
import { connect } from "react-redux";
import { Accordion, AccordionItem } from "react-sanfona";
import CustomGraphiQL from "./graphql";
import SplitterLayout from "react-splitter-layout";
import styled from "styled-components";
import fetch from "isomorphic-fetch";
import md from "react-markings";
import { correctAnswer } from "../store";
const checkIfCorrectAnswer = (response, answer) => Object.keys(answer).every();

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
          <Accordion openNextAccordionItem style={accordionstyle}>
            <AccordionItem title={"🐉 Story"} slug={0} key={0} expanded>
              <StyledAccordionItemHeader>
                {gamestate.levelInfo.title}
              </StyledAccordionItemHeader>
              <div>
                {md([gamestate.levelInfo.story])}
                {gamestate.currentLevel === 0 &&
                  <pre style={Hodoreastereggstyle}>
                    <code>
                      {Hodoreasteregg}
                    </code>
                  </pre>}
              </div>
            </AccordionItem>
            <AccordionItem title={"👩‍🎓 Instructions"} slug={2} key={2}>
              <StyledAccordionItemHeader>
                {gamestate.levelInfo.realsubTitle}
              </StyledAccordionItemHeader>
              <blockquote>
                {md([gamestate.levelInfo.instructions])}
              </blockquote>
            </AccordionItem>
            <AccordionItem title={"🤼 Community"} slug={3} key={3}>
              Steve Jobs agile affordances user story sticky note prototype
              pivot thought leader ideate food-truck. Entrepreneur ideate
              SpaceTeam waterfall is so 2000 and late ideate earned media
              minimum viable product ideate venture capital food-truck workflow
              actionable insight minimum viable product. Bootstrapping Steve
              Jobs co-working entrepreneur minimum viable product minimum viable
              product intuitive thinker-maker-doer ideate big data moleskine.
              Moleskine human-centered design cortado engaging workflow long
              shadow actionable insight bootstrapping.
            </AccordionItem>
            <AccordionItem title={"🐛 Report a Bug"} slug={4} key={4}>
              Steve Jobs agile affordances user story sticky note prototype
              pivot thought leader ideate food-truck. Entrepreneur ideate
              SpaceTeam waterfall is so 2000 and late ideate earned media
              minimum viable product ideate venture capital food-truck workflow
              actionable insight minimum viable product. Bootstrapping Steve
              Jobs co-working entrepreneur minimum viable product minimum viable
              product intuitive thinker-maker-doer ideate big data moleskine.
              Moleskine human-centered design cortado engaging workflow long
              shadow actionable insight bootstrapping.
            </AccordionItem>
          </Accordion>
          <CustomGraphiQL fetcher={graphQLFetcher(handleCorrectAnswer)} />
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
