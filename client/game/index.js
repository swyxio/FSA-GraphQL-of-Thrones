// import schema from '../../schema/Book'
const HodorWorld = {
  title: "Hodor World",
  realsubTitle: "Make Your First Query",
  character: "Hodor",
  docsLink: "http://graphql.org/learn/",
  text:
    "Hodor hodor hodor hodor Hodor hodor hodor Hodor. Hodor hodor hodor Hodor hodor hodor Hodor hodor hodor Hodor. Hodor hodor Hodor hodor hodor Hodor.",
  answer: {
    Hodor: "Hodor"
  }
};

const LearningFields = {
  title: "Winter Is (Never) Coming",
  realsubTitle: "Make a query on specific fields",
  character: "GRRM",
  docsLink: "http://graphql.org/learn/queries/#fields",
  text:
    "Help me figure out when I should publish the Winds Of Winter. Can you get me a list of my books with their titles and release date?",
  answer: require("./answer1")
};

const LastBook = {
  title: "Just the One please",
  realsubTitle: "Pass an argument when making a query",
  character: "GRRM",
  docsLink: "http://graphql.org/learn/queries/#arguments",
  text:
    "OK that's way too many books. Can you just get me the pagelength and Release Date of the last book?",
  answer: require("./answer2")
};

const GraphicNovel = {
  title: "Maybe I should Draw?",
  realsubTitle: "Learn to alias query results",
  character: "GRRM",
  docsLink: "http://graphql.org/learn/queries/#aliases",
  text:
    "Ok I've written a few chapters. Now I feel like drawing. Can you figure out the ISBN of my last two Graphic Novels? Oh, also could you name them HedgeKnight1 and HedgeKnight2 please.",
  answer: require("./answer3")
};

export default [HodorWorld, LearningFields, LastBook, GraphicNovel];
