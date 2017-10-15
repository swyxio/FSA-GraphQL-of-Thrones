import React from "react";
import { connect } from "react-redux";
import { Accordion, AccordionItem } from "react-sanfona";
import CustomGraphiQL from "./graphql";
import SplitterLayout from "react-splitter-layout";
import styled from "styled-components";

class MainPanel extends React.Component {
  // https://github.com/daviferreira/react-sanfona
  render() {
    const { gamestate, graphQLFetcher } = this.props;
    const accordionstyle = {
      background: "#d4d5d6",
      color: "rgb(32, 64, 86)"
    };
    return (
      <div style={{ flex: 1, display: "flex" }}>
        <SplitterLayout
          primaryIndex={1}
          percentage
          primaryMinSize={20}
          secondaryMinSize={40}
          secondaryInitialSize={33}
        >
          <Accordion openNextAccordionItem style={accordionstyle}>
            <AccordionItem title={"🐉 Story"} slug={0} key={0} expanded>
              <StyledAccordionItemHeader>
                {gamestate.levelInfo.title}
              </StyledAccordionItemHeader>
              <div>
                {gamestate.levelInfo.text}
              </div>
            </AccordionItem>
            <AccordionItem title={"👩‍🎓 Learn"} slug={2} key={2}>
              <h1>
                Level {gamestate.currentLevel}:
              </h1>
              <blockquote>
                Even though large tracts of Europe and many old and famous
                States have fallen or may fall into the grip of the Gestapo and
                all the odious apparatus of Nazi rule, we shall not flag or
                fail. We shall go on to the end. We shall fight in France, we
                shall fight on the seas and oceans, we shall fight with growing
                confidence and growing strength in the air, we shall defend our
                island, whatever the cost may be. We shall fight on the beaches,
                we shall fight on the landing grounds, we shall fight in the
                fields and in the streets, we shall fight in the hills; we shall
                never surrender, and if, which I do not for a moment believe,
                this island or a large part of it were subjugated and starving,
                then our Empire beyond the seas, armed and guarded by the
                British Fleet, would carry on the struggle, until, in God's good
                time, the New World, with all its power and might, steps forth
                to the rescue and the liberation of the old.
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
          <CustomGraphiQL fetcher={graphQLFetcher} />
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
  return {};
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
