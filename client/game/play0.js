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
  You can see it here named "GraphiQL of Thrones" (because why not?)

  The left panel is the Query Editor, where you can put in your queries (and other things). Tucked at the way at the bottom is the **Query Variables Editor**, which you will only need later.

  On the right there is a blank panel, which will give you the responses from your queries.

  On the far right you can see the Documentation Explorer, which gives you a comprehensive listing of everything you can query for.

  You can resize or minimize these panels as you wish.

  Once you're comfortable with this, select the **Query Editor** and hit ⌘ + Enter to run the query and continue.`,
  instructions: `
  We will alternate between PLAY and LEARN modes. LEARN introduces new concepts in a serious manner, while in PLAY you get a chance to apply this while roleplaying as a Game of Thrones character
  `,
  answer: {
    ThingsJonSnowKnows: []
  }
};
