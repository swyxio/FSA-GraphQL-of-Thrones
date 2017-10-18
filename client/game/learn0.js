module.exports = {
  title: "LEARN: Welcome!",
  realsubTitle: "Orientation",
  customgraphiql: {
    custquery: `{
  ThingsJonSnowKnows

  #Click in here and hit ⌘ + Enter
}`
  },
  character: "GRRM",
  story: `This is a little playground we've set up for you to learn GraphQL. 
  
  It makes use of a little component called **GraphiQL** to help you mock up GraphQL queries.

  The left panel is the **Query Editor**, where you can put in your queries (and other things). 

  On the right there is a blank panel, which will give you the responses from your queries.

  **Your task is to make the queries that will give the correct responses we are looking for.**

  Once you're comfortable, select the **Query Editor** and hit ⌘ + Enter to run the query and continue to the next level.
  
  We will alternate between PLAY and LEARN modes:
  
  - LEARN introduces new concepts in a serious manner
  - PLAY gives you a chance to apply this while roleplaying as a Game of Thrones character!
  `,
  instructions: `
  We will alternate between PLAY and LEARN modes. LEARN introduces new concepts in a serious manner, while in PLAY you get a chance to apply this while roleplaying as a Game of Thrones character.
  `,
  answer: {
    ThingsJonSnowKnows: []
  }
};
