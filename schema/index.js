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
const {
  Interaction,
  InteractionCharacter,
  InteractionType,
  AllInteractionCharactersResolver,
  InteractionCharacterResolver,
  InteractionResolver
} = require("./asoiaf-interactions");
const { Book, BookType, AllBooksResolver, BookResolver } = require("./Book");

const Query = `
  # More datasets collated at https://www.reddit.com/r/freefolk/comments/769hav/game_of_thrones_datasets/
  type Query {
    allHouses(Name: String): [House]
    House(Id: Int!): House
    allCharacters(Name: String): [Character]
    Character(Id: Int!): Character
    allBooks(Name: String): [Book]
    Book(Id: Int!): Book
    allInteractionCharacters(Name: String): [InteractionCharacter]
    InteractionCharacter(Id: String!): InteractionCharacter
    Interaction: Interaction
    Hodor: String
  }
`;
const SchemaDefinition = `
  schema {
    query: Query
  }
`;

// Define your types here.
const typeDefs = [
  SchemaDefinition,
  Query,
  CharacterType,
  BookType,
  HouseType,
  InteractionType
];

const resolvers = {
  Query: {
    allHouses: AllHousesResolver,
    House: HouseResolver,
    allBooks: AllBooksResolver,
    Book: BookResolver,
    allCharacters: AllCharactersResolver,
    Character: CharacterResolver,
    allInteractionCharacters: AllInteractionCharactersResolver,
    InteractionCharacter: InteractionCharacterResolver,
    Interaction: InteractionResolver,
    Hodor: () => "Hodor"
  },
  House,
  Book,
  Character,
  InteractionCharacter,
  Interaction
};

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
