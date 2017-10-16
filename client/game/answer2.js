const answer = {
  Book: {
    NumberOfPages: 368,
    ReleaseDate: "2015-10-06T00:00:00"
  }
};

module.exports = {
  title: "LEARN: Just the One please",
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
  answer: answer
};
