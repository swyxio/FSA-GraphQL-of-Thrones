const answer = {
  allBooks: [
    {
      Name: "A Game of Thrones",
      ReleaseDate: "1996-08-01T00:00:00"
    },
    {
      Name: "A Clash of Kings",
      ReleaseDate: "1999-02-02T00:00:00"
    },
    {
      Name: "A Storm of Swords",
      ReleaseDate: "2000-10-31T00:00:00"
    },
    {
      Name: "The Hedge Knight",
      ReleaseDate: "2005-03-09T00:00:00"
    },
    {
      Name: "A Feast for Crows",
      ReleaseDate: "2005-11-08T00:00:00"
    },
    {
      Name: "The Sworn Sword",
      ReleaseDate: "2008-06-18T00:00:00"
    },
    {
      Name: "The Mystery Knight",
      ReleaseDate: "2011-03-29T00:00:00"
    },
    {
      Name: "A Dance with Dragons",
      ReleaseDate: "2011-07-12T00:00:00"
    },
    {
      Name: "The Princess and the Queen",
      ReleaseDate: "2013-12-03T00:00:00"
    },
    {
      Name: "The Rogue Prince",
      ReleaseDate: "2014-06-17T00:00:00"
    },
    {
      Name: "The World of Ice and Fire",
      ReleaseDate: "2014-10-28T00:00:00"
    },
    {
      Name: "A Knight of the Seven Kingdoms",
      ReleaseDate: "2015-10-06T00:00:00"
    }
  ]
};

module.exports = {
  title: "LEARN: Winter Is (Never) Coming",
  realsubTitle: "Make a query on specific fields",
  character: "GRRM",
  characterpic:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/George_R._R._Martin_by_Gage_Skidmore_2.jpg/220px-George_R._R._Martin_by_Gage_Skidmore_2.jpg",
  mission:
    "Return the **Name** and **ReleaseDate** for the collection **allBooks**.",
  link: "http://graphql.org/learn/queries/#fields",
  instructions: `Now it's getting serious: 
    
1. Query all the books (the collection named allBooks)
2. You will see some (not all) the Books fields autopopulate. Refine your query to only the requested fields. 
    
This is how frontend devs can use GraphQL to tailor responses to exactly what they need, while backend devs just worry about getting the data and agreeing on the schema (more on that later).

Hint: the two fields you are looking for in the schema are **Name** and **ReleaseDate**. See the **Documentation Explorer** on the far right to explore all the fields available to you.
    `,
  story: `Help me figure out when I should publish the Winds Of Winter. 
    
Can you get me a list of my books with their titles and release date?`,
  answer: answer
};
