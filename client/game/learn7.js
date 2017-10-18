const answer = {
  addComment: {
    CommenterName: "NewGraphQLUser",
    Comment: "test",
    Timestamp: "Wed Oct 18 2017 11:43:29 GMT-0400 (EDT)"
  }
};

module.exports = {
  title: "LEARN: Mutations",
  realsubTitle: "Creating, updating, or deleting information",
  character: "GRRM",
  characterpic:
    "http://vixenvarsity.com/wp-content/uploads/2014/06/George-RR-Martin.jpg",
  mission: `To pass this test, simply create a new comment with **CommenterName** "NewGraphQLUser" and **Comment** {your feedback for us, whatever you have!}!
    `,
  link: "http://graphql.org/learn/queries/#mutations",
  customgraphiql: {
    custquery: `
# uncomment this to check your mutation result
# query {
#   Comments {
#     CommenterName
#     Comment
#     Timestamp
#   }
# }

# you should only have one operation 
# (query or mutation) running at a time
# so comment this out if you run a query
mutation {
  addComment(comment: "Hello") {
    CommenterName
    Comment
    Timestamp
  }
}
    `
  },
  instructions: `You can run the code as set up for you, but you can also play around with the fields as we have set them up for you!
  `,
  story: `Give us your feedback!

  Here we will show you how to do **mutations**, which are the last piece of the puzzle in CRUD operations with GraphQL.

  Mutations involve side effects so in a sense they combine all the functionalities of PUT, POST, and DELETE from REST. 
  
  What they are allowed to do is defined by the backend.
  `,
  answer: answer
};
