const answer = {
  allBooks: [
    {
      ISBN: "978-0976401100",
      Name: "The Hedge Knight",
      Country: "United States",
      MediaType: "Graphic Novel",
      NumberOfPages: 164
    },
    {
      ISBN: "978-0785126508",
      Name: "The Sworn Sword",
      Country: "United States",
      MediaType: "Graphic Novel",
      NumberOfPages: 152
    },
    {
      ISBN: "978-0765360267",
      Name: "The Mystery Knight",
      Country: "United States",
      MediaType: "Paperback",
      NumberOfPages: 416
    },
    {
      ISBN: "978-0765332066",
      Name: "The Princess and the Queen",
      Country: "United States",
      MediaType: "Hardcover",
      NumberOfPages: 784
    },
    {
      ISBN: "978-0345537263",
      Name: "The Rogue Prince",
      Country: "United States",
      MediaType: "Hardcover",
      NumberOfPages: 832
    },
    {
      ISBN: "978-0553805444",
      Name: "The World of Ice and Fire",
      Country: "United States",
      MediaType: "Hardcover",
      NumberOfPages: 336
    },
    {
      ISBN: "978-0345533487",
      Name: "A Knight of the Seven Kingdoms",
      Country: "United States",
      MediaType: "Hardcover",
      NumberOfPages: 368
    }
  ]
};

module.exports = {
  title: "LEARN: Directives",
  realsubTitle: "Toggling fields on and off",
  character: "GRRM",
  characterpic: "GRRM",
  mission: `run the query for all books with the word "the" in the title, and show their **ISBN** along with **usefulFields** using the **showISBN** variable.
    `,
  link: "http://graphql.org/learn/queries/#directives",
  customgraphiql: {
    custvariables: `{
  "requestedName": "Game",
  "skipReleaseDate": true,
  "showISBN": true
}`,
    custquery: `
# try running this example
query ($requestedName: String, $skipReleaseDate: Boolean!) {
  allBooks(Name: $requestedName) {
    ISBN @skip(if: $skipReleaseDate)
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
  instructions: `Toggling fields on and off?? 

  At this point you might want to reach for a new API endpoint, or to mess with the resolver in the backend, but that would be the old way of doing things.

  We don't like that, do we? Nope!

  GraphQL allows you to modify queries with **directives**. These can be defined on the backend, but GraphQL comes with two inbuilt directives:

  - **@include(if: Boolean)** Only include this field if the argument is true.
  - **@skip(if: Boolean)** Skip this field if the argument is true. (opposite of **@include**)

  Directives can be tacked on after literally any field to turn them dynamic based on Variables that you supply. These Variables then become required, hence you need to add a **!** suffix after their type when declaring your query.

  We have set you up with an example usage with the **skipReleaseDate** variable. Try running this, then try flipping **skipReleaseDate** to false (the GraphiQL UI is overeager here, just type the first letter).
  `,
  story: `Sweet, sweet. You have been most useful.

  I have one last thing to ask. Can you let me toggle on or off showing ISBN fields with another one of these nifty **variable** things? Sometimes I need them, most of the time I don't, I'd like to control that please!  

  Show me what that looks like for all books with the word "the" in the title, and show me their **ISBN** along with **usefulFields**.
  `,
  answer: answer
};
