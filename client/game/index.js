// import schema from '../../schema/Book'
const HodorWorld = {
  title: "Hodor World",
  realsubTitle: "Make Your First Query",
  character: "Hodor",
  instructions:
    "Welcome! Hodor has helpfully given you the answer above so you just need to type it in to the panel on the right (Just under 'GraphQL of Thrones'). This is how you make requests in GraphQL! For more, check out <http://graphql.org/learn/>",
  story: `
  Hodor hodor hodor hodor Hodor hodor hodor Hodor. Hodor hodor hodor Hodor hodor hodor Hodor hodor hodor Hodor.

  > Hodor hodor hodor Hodor hodor hodor Hodor hodor hodor Hodor. Hodor hodor hodor Hodor hodor hodor Hodor hodor hodor Hodor. Hodor hodor hodor Hodor hodor hodor Hodor hodor hodor Hodor.

  - Hodor hodor hodor Hodor hodor hodor Hodor hodor hodor Hodor.
  - Hodor hodor hodor Hodor HODOR.
  - Hodor hodor hodor Hodor HODOR!!

  Hodor:
  `,
  answer: {
    Hodor: "Hodor"
  }
};

const LearningFields = {
  title: "Winter Is (Never) Coming",
  realsubTitle: "Make a query on specific fields",
  character: "GRRM",
  instructions: `Now it's getting serious: 
    
    1. Query all the books (the collection named allBooks)
    2. You will see some (not all) the Books fields autopopulate. Refine your query to only the requested fields. 
    
    This is how frontend devs can use GraphQL to tailor responses to exactly what they need, while backend devs just worry about getting the data and agreeing on the schema (more on that later).

    For more, check out: <http://graphql.org/learn/queries/#fields>
    `,
  story:
    "Help me figure out when I should publish the Winds Of Winter. Can you get me a list of my books with their titles and release date?",
  answer: require("./answer1")
};

const LastBook = {
  title: "Just the One please",
  realsubTitle: "Pass an argument when making a query",
  character: "GRRM",
  instructions: `You're already getting productive with GraphQL! Sometimes you will need to pass an argument, often when requesting one specific thing in a collection of things. 
  
  If the collection is set up for you to do so, you can supply the parameters for this. 
  
    
    1. Hit "< Docs" on the far right to open up the Documentation Explainer and drill into the root Query to see the kinds of arguments accepted. Looks like Books takes an Id!
    2. We haven't seen this Id field before, but it's there for every Book. Query "allBooks" (like you did before) for Id's and note the last Id
    3. Now clear your query and start again, querying "Books" instead of "allBooks". 
    4. How do you pass the Id argument in? If I was requesting Book 14, like this: "Books(Id: 14)"
    5. Refine your Query to return only the requested fields :) You already know how to do that.

    For more, check out: <http://graphql.org/learn/queries/#arguments>
    `,
  story:
    "OK that's way too many books. Can you just get me the pagelength and Release Date of ONLY the last book?",
  answer: require("./answer2")
};

const GraphicNovel = {
  title: "Maybe I should Draw?",
  realsubTitle: "Learn to alias query results",
  character: "GRRM",
  instructions: "http://graphql.org/learn/queries/#aliases",
  story:
    "Ok I've written a few chapters. Now I feel like drawing. Can you figure out the ISBN of my last two Graphic Novels? Oh, also could you name them HedgeKnight1 and HedgeKnight2 please.",
  answer: require("./answer3")
};

export default [HodorWorld, LearningFields, LastBook, GraphicNovel];
