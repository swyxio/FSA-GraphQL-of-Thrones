const { find, filter } = require("lodash");
const charactersdata = require("./characters.json");
const housesdata = require("../House/houses.json");

// const AllCharactersResolver = () => charactersdata;
const AllCharactersResolver = (_, { Name }) => {
  if (Name)
    return filter(charactersdata, char =>
      caseinsensitiveIncludes(char.Name, Name)
    );
  return charactersdata;
};

const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());
// http://dev.apollodata.com/tools/graphql-tools/resolvers.html

const CharacterResolver = (obj, { Id }) => {
  if (Id) return find(charactersdata, { Id: Id });
  return;
};

// resolve inbound from others
const Character = {
  // House: (house, arg) => {
  //   return charactersdata[house.Founder - 1];
  // },
  Spouse: char => find(charactersdata, { Id: char.Spouse }),
  Father: char => find(charactersdata, { Id: char.Father }),
  Mother: char => find(charactersdata, { Id: char.Mother }),
  Allegiances: char =>
    filter(housesdata, potentialhouse =>
      char.Allegiances.includes(potentialhouse.Id)
    ),
  Children: char =>
    filter(charactersdata, potentialchild =>
      char.Children.includes(potentialchild.Id)
    )
};

const CharacterType = `
  # Character data from API of Ice and Fire https://github.com/joakimskoog/AnApiOfIceAndFire
  type Character {
    Id: ID
    Name: String
    IsFemale: Boolean
    Culture: String
    Titles: [String]
    Aliases: [String]
    Born: String
    Died: String
    Father: Character
    Mother: Character
    Spouse: Character
    Children: [Character]
    Allegiances: [House]
    Books: [Int]
    PovBooks: [String]
    PlayedBy: [String]
    TvSeries: [String]
  }
`;
module.exports = {
  Character,
  CharacterType,
  CharacterResolver,
  AllCharactersResolver
};
