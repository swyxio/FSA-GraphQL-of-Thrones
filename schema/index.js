const { makeExecutableSchema } = require("graphql-tools");
const { Character, CharacterResolver } = require("./Character");
const { House, HouseResolver } = require("./House");
const { Book, BookResolver } = require("./Book");

const Query = `
  type Query {
    allHouses: [House]
    allCharacters: [Character]
    allBooks: [Book]
    Hodor: String
  }
`;
const SchemaDefinition = `
  schema {
    query: Query
  }
`;

// Define your types here.
const typeDefs = [SchemaDefinition, Query, Character, Book, House];

const resolvers = {
  Query: {
    allHouses: HouseResolver,
    allBooks: BookResolver,
    allCharacters: CharacterResolver,
    Hodor: () => "Hodor"
  }
};

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });

//   `
//   type Link {
//     id: ID!
//     url: String!
//     description: String!
//   }
// `
// const links = [
//   {
//     id: 1,
//     url: "http://graphql.org/",
//     description: "The Best Query Language"
//   },
//   {
//     id: 2,
//     url: "http://dev.apollodata.com",
//     description: "Awesome GraphQL Client"
//   }
// ];
// allLinks: () => links, // resolver
