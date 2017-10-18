const answer = {
  allBooks: [
    {
      Name: "The Hedge Knight",
      Country: "United States",
      MediaType: "Graphic Novel",
      NumberOfPages: 164
    },
    {
      Name: "The Mystery Knight",
      Country: "United States",
      MediaType: "Paperback",
      NumberOfPages: 416
    },
    {
      Name: "A Knight of the Seven Kingdoms",
      Country: "United States",
      MediaType: "Hardcover",
      NumberOfPages: 368
    }
  ]
};

module.exports = {
  title: "LEARN: Query Variables",
  realsubTitle: "Use variables like a sane person would",
  character: "GRRM",
  characterpic:
    "http://vixenvarsity.com/wp-content/uploads/2014/06/George-RR-Martin.jpg",
  mission:
    "Return the **usefulFields** for **allBooks** that match the **Name** field with your query variable **requestedName** of 'Knight'.",
  link: "http://graphql.org/learn/queries/#variables",
  customgraphiql: {
    custvariables: `{
  "requestedId": 1,
  "requestedName": "Knight"
  
}`,
    custquery: `
query ($requestedId: Int!) {
  Book(Id: $requestedId) {
    ...usefulFields
  }
}

fragment usefulFields on Book {
  Name
  Country
  MediaType
  NumberOfPages
}






# 👇👇👇 pls open up Query Variables below 👇👇👇
    `
  },
  instructions: `Georgie is trying to take you out of the equation! Look out for any assassins/newborn smoke monsters!

  What we are doing here is simple. Instead of creating a new query string every time (which you have been doing up til now), we will just set up a query string that accepts **variables** and works from that.

  First thing to do is bring up the **Query Variables** panel. You'll find it chilling at the bottom left of the GraphiQL of Thrones Screen.

  Now study the example we have set up for you. It takes **requestedId** from **Query Variables** and slots it in to queries that use them.

  Try deleting **requestedId** from anywhere in this example and familiarize yourself with the error messages and what they mean.

  This seems a little extraneous right? It would be if we always interacted with GraphQL in this nice pretty GraphiQL setup, but we don't. 
  
  In real clientside work we would be hitting an API with the query string (the type of strings you've been making up til now) and it would be a hassle to constantly have to recreate (or even interpolate inside) these strings.

  It is much cleaner to just have a standard query string and then supply Query Variables separately like you would in the old REST paradigm. So this is how you do it.

  ---

  To solve the level, edit the example query to query **allBooks** by **Name**. 
  **Name** is an optional parameter we have taught **allBooks** to *resolve* on the backend.
  Don't forget to change the Query Variable accordingly!

  Hint: **Name** is of type **String**, whereas **Id** was of type **Int!** (the **!** denotes a required param)
  
  How would you know that if we hadn't told you? You can always see all the schema setup in the Documentation Explorer panel on the far right.`,
  story: `Thanks for setting up those fragments, they're going to be very handy.
  
  But I don't want to keep bothering you to help me set up these requests every time I need something done. 

  Is there a way I can just give you just a word and you set up the query to give me all books that match that word, with the same **useful fields** from last time?
  `,
  answer: answer
};
