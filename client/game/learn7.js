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

  For more, check out: http://graphql.org/learn/queries/#mutations`,
  story: `Give us your feedback!

  Here we will show you how to do **mutations**, which are the last piece of the puzzle in CRUD operations with GraphQL.

  Mutations involve side effects so in a sense they combine all the functionalities of PUT, POST, and DELETE from REST. 
  
  What they are allowed to do is defined by the backend.

  To pass this test, simply create a new comment with **CommenterName** "NewGraphQLUser" and **Comment** {your feedback for us, whatever you have!}!
  `,
  answer: answer
};
