const charactersdata = require("./characters.json");

const CharacterResolver = () => charactersdata;

const Character = `
  type Character {
    Id: ID!
    Name: String
    IsFemale: Boolean
    Culture: String
    Titles: [String]
    Aliases: [String]
    Born: String
    Died: String
    Father: String
    Mother: String
    Spouse: String
    Children: [String]
    Allegiances: [String]
    Books: [Int]
    PovBooks: [String]
    PlayedBy: [String]
    TvSeries: [String]
  }
`;
module.exports = { Character, CharacterResolver };
