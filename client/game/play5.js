const answer = {
  allTVBetrayals: [
    {
      Victim: "Tyrion",
      RelationshipOfPerpToVictim: "Ally",
      PerpGainReasoning: "Power",
      ImmediateConsequence: "Tyrion arrested by Catelyn"
    },
    {
      Victim: "Ned Stark",
      RelationshipOfPerpToVictim: "Ally",
      PerpGainReasoning: "Power",
      ImmediateConsequence: "Power Change, new King"
    },
    {
      Victim: "Ros",
      RelationshipOfPerpToVictim: "Boss",
      PerpGainReasoning: "Revenge",
      ImmediateConsequence: "Killed by King Geoffrey"
    },
    {
      Victim: "Varys",
      RelationshipOfPerpToVictim: "Ally",
      PerpGainReasoning: "Revenge",
      ImmediateConsequence: "Killed by King Geoffrey"
    },
    {
      Victim: "Joffrey",
      RelationshipOfPerpToVictim: "Ally",
      PerpGainReasoning: "Power",
      ImmediateConsequence: "Tyrion is imprisoned"
    },
    {
      Victim: "Lysa",
      RelationshipOfPerpToVictim: "Friend",
      PerpGainReasoning: "Power",
      ImmediateConsequence: "Power Change- Petyr is Lord of the Vale"
    }
  ]
};

module.exports = {
  title: "PLAY: What Honor Demands",
  realsubTitle: "Use variables like a sane person would",
  character: "Sansa",
  characterpic:
    "https://images-na.ssl-images-amazon.com/images/M/MV5BNjAwMjE2NDExNF5BMl5BanBnXkFtZTcwODAwODg4OQ@@._V1._SX100_SY140_.jpg",
  mission:
    "With the supplied Query Variable **$Accused**, check **allTVBetrayals** for **Perpetrator**s matching that name and return their **Victim**, **RelationshipOfPerpToVictim**, **PerpGainReasoning**, and **ImmediateConsequence**. You can use a fragment but it is optional.",
  link: "http://graphql.org/learn/queries/#variables",
  customgraphiql: {
    custvariables: `{
  "Accused": "Petyr"
}`,
    custquery: `
# no help for you here. figure out how to set up the query yourself.
# Hint: it takes in a variable, looks like a function...














# DO NOT EDIT Query Variables below
    `
  },
  instructions: `What the Mission says. Petyr has plenty of betrayals...
  `,
  story: `
  "You stand accused of murder. You stand accused of treason."
  
  "How do you answer these charges... Lord Baelish?"
  
  _An audible gasp._
  
  "My sister asked you a question."

  "Lady Sansa, forgive me I'm a bit confused."

  "Which charges confuse you?"

  _Good thing Bran has GraphQL. Look up all of Petyr's Betrayals with his name as a Perpetrator and serve up a cold dish of Revenge._
  `,
  answer: answer
};
