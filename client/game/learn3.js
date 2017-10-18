const answer = {
  HedgeKnight1: {
    ISBN: "978-0976401100"
  },
  HedgeKnight2: {
    ISBN: "978-0785126508"
  }
};

module.exports = {
  title: "LEARN: A Query by any other Alias",
  realsubTitle: "Learn to alias query results",
  character: "GRRM",
  characterpic:
    "http://vixenvarsity.com/wp-content/uploads/2014/06/George-RR-Martin.jpg",
  mission:
    "Return the **NumberOfPages** and **ReleaseDate** for the two **Book**s that have **MediaType** of Graphic Novel and **alias** them to **HedgeKnight1** and **HedgeKnight2** in order",
  link: "http://graphql.org/learn/queries/#aliases",
  instructions: `Let's start exploring some of the unique benefits of GraphQL. Since you are simply specifying the shape of the response you want, you can query multiple versions of the same type of thing in a single request.

However, when the data comes back, its key is by default the same as its type. What happens when you try to request two different books? Would it look like this?

    Book: {
      NumberOfPages: 368,
      ReleaseDate: "2015-10-06T00:00:00"
    },
    Book: {
      NumberOfPages: 694,
      ReleaseDate: "1996-08-01T00:00:00"
    }

GraphQL responses have to be a valid JSON object and this is invalid because of the duplicate key. Try it out!

The error message says: **Fields \"Book\" conflict because they have differing arguments. Use different aliases on the fields to fetch both if this was intentional.**

So what are these things called aliases? Simply ways to name your requests, which are basically function calls! For example:

    book1: Book(Id: 4) {
      NumberOfPages
      MediaType
    }
    book2: Book(Id: 5) {
      NumberOfPages
      MediaType
    }

Look at the results coming back. Not an error anymore! Progress!

Now iterate on your query using all your knowledge so far to answer the question: What are the ISBNs of George R. R. Martin's two Hedge Knight Graphic Novels? Alias them as HedgeKnight1 and HedgeKnight2.

Hint: Use **allBooks** and find their Id's first!`,
  story: `Ok I've written a couple chapters. Thats enough for the year.
    Now I feel like drawing. Can you figure out the ISBN of my last two Graphic Novels?
    Oh, also could you name them HedgeKnight1 and HedgeKnight2 please.`,
  answer: answer
};
