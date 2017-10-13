const { makeExecutableSchema } = require("graphql-tools");
const {
  Character,
  CharacterType,
  CharacterResolver,
  AllCharactersResolver
} = require("./Character");
const {
  House,
  HouseType,
  AllHousesResolver,
  HouseResolver
} = require("./House");
const { Book, BookType, AllBooksResolver, BookResolver } = require("./Book");

const Query = `
  type Query {
    allHouses(Name: String): [House]
    House(Id: Int): House
    allCharacters(Name: String): [Character]
    Character(Id: Int): Character
    allBooks(Name: String): [Book]
    Book(Id: Int): Book
    Hodor: String
  }
`;
const SchemaDefinition = `
  schema {
    query: Query
  }
`;

// Define your types here.
const typeDefs = [SchemaDefinition, Query, CharacterType, BookType, HouseType];

const resolvers = {
  Query: {
    allHouses: AllHousesResolver,
    House: HouseResolver,
    allBooks: AllBooksResolver,
    Book: BookResolver,
    allCharacters: AllCharactersResolver,
    Character: CharacterResolver,
    Hodor: () => "Hodor"
  },
  House,
  Book,
  Character
};

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
