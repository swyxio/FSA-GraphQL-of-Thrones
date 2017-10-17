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
const {
  TVEpisodeLocationType,
  AllTVEpisodesResolver,
  TVEpisodeResolver,
  AllTVLocationsResolver,
  TVLocationResolver,
  TVEpisode,
  TVLocation,
  TVBetrayal,
  TVBetrayalType,
  AllTVBetrayalsResolver,
  TVBetrayalResolver
} = require("./neo4j");
const {
  CommentResolver,
  CommentsResolver,
  CommentMutations,
  CommentType
} = require("./Comment");
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
    allTVEpisodes(Title: String): [TVEpisode]
    TVEpisode: TVEpisode
    allTVLocations(Name: String): [TVLocation]
    TVLocation: TVLocation
    allTVBetrayals(Betrayal: String, Perpetrator: String, Victim: String): [TVBetrayal]
    TVBetrayal: TVBetrayal
    # everything following are not serious queries
    Comment: Comment
    Comments: [Comment]
    Hodor: String
    ThingsJonSnowKnows: [String]
  }
`;
const Mutation = `
# this schema allows the following mutation:
# addComment. Must supply a comment String, and optionally CommenterName.
type Mutation {
  addComment (comment: String, CommenterName: String): Comment
}
`;
const SchemaDefinition = `
  # for most of the questions, you will only need to use Query
  schema {
    query: Query
    mutation: Mutation
  }
`;

// Define your types here.
const typeDefs = [
  SchemaDefinition,
  Query,
  Mutation,
  CharacterType,
  BookType,
  HouseType,
  InteractionType,
  TVEpisodeLocationType,
  TVBetrayalType,
  CommentType
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
    allTVEpisodes: AllTVEpisodesResolver,
    TVEpisode: TVEpisode,
    allTVLocations: AllTVLocationsResolver,
    TVLocation: TVLocation,
    allTVBetrayals: AllTVBetrayalsResolver,
    TVBetrayal: TVBetrayal,
    Comments: CommentsResolver,
    Comment: CommentResolver,
    Hodor: () => "Hodor",
    ThingsJonSnowKnows: () => []
  },
  Mutation: {
    addComment: CommentMutations
  },
  House,
  Book,
  Character,
  InteractionCharacter,
  Interaction,
  TVEpisode,
  TVLocation,
  TVBetrayal
};

// Generate the schema object from your types definition.
module.exports = makeExecutableSchema({ typeDefs, resolvers });
