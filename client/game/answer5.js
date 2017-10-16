const answer = {
  HedgeKnight1: {
    Name: "The Hedge Knight",
    Country: "United States",
    MediaType: "Graphic Novel",
    NumberOfPages: 164
  },
  HedgeKnight2: {
    Name: "The Sworn Sword",
    Country: "United States",
    MediaType: "Graphic Novel",
    NumberOfPages: 152
  }
};

module.exports = {
  title: "Doing it Myself with: Variables",
  realsubTitle: "Use variables like a sane person would",
  character: "GRRM",
  customgraphiql: {
    custvariables: `{\n  "requestedName": "Game"\n}`
  },
  instructions: `Georgie is trying to take you out of the equation! Look out for any assassins/newborn smoke monsters!

  What we are doing here is simple. Instead of creating a new query string every time (which you have been doing up til now), we will just set up a query string that accepts **variables** and works from that.

  First thing to do is bring up the Query Variables panel. You'll find it chilling at the bottom left of the GraphiQL of Thrones Screen.



  For more, check out: http://graphql.org/learn/queries/#variables`,
  story: `Thanks for setting up those fragments, they're going to be very handy.
  
  But I don't want to keep bothering you to help me set up these requests every time I need something done. 
  Is there a way I can just give you just an Id and a number and you set up the query to work for me?
  `,
  answer: answer
};
