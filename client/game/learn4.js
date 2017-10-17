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
  title: "LEARN: Keeping DRY",
  realsubTitle: "Define reusable query fragments",
  character: "GRRM",
  customgraphiql: {
    custquery: `
# please edit the below example query/fragment to answer the question!
{
  Book(Id:3) {
    ...usefulFields
  }
}
fragment usefulFields on Book {
  Name
  Country
  Publisher
}
    `
  },
  instructions: `So the solution to the last task was a little repetitive. We needed the same fields for both requests. Is there a way to reuse query fragments?

Funny you should ask! Define a subset of fields you care about based on the core schemas made available to you. You should be able to see the full schemas on the far right panel under Documentation Explorer.

This is called a **fragment**! Define it like so outside of the scope of your Query object:

    fragment usefulFields on Book {
      Name
      Country
      Publisher
    }

and use the fragments with the **spread operator**:

    Book(Id:3) {
      ...usefulFields
    }

Great. Now try returning the Name, Country, MediaType, and NumberOfPages of the two Hedge Knight Graphic books (Id 4 and 6). Practice using fragments!

Hint: remember to alias as HedgeKnight1 and HedgeKnight2.

  For more, check out: http://graphql.org/learn/queries/#fragments`,
  story: `I'm a putz. I need way more than just the ISBN of those two Graphic Novels.

Can you also get the Name, Country, MediaType, and NumberOfPages for HedgeKnight1 and HedgeKnight2?

Also, I'm probably gonna need those four **useful fields** of information a lot, you might want to save the query somehow or you're gonna have a looot of typing to do!`,
  answer: answer
};
