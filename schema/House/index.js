const { find, filter } = require("lodash");
const housesdata = require("./houses.json");
const charactersdata = require("../Character/characters.json");

const AllHousesResolver = (_, { Name }) => {
  console.log("****", Name);
  if (Name)
    return filter(housesdata, house =>
      caseinsensitiveIncludes(house.Name, Name)
    );
  return housesdata;
};

const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());

const HouseResolver = (_, { Id }) => {
  if (Id) return housesdata[Id - 1];
};

// resolve inbound from others
const House = {
  Founder: (house, arg) => find(charactersdata, { Id: house.Founder }),
  CurrentLord: (house, arg) => find(charactersdata, { Id: house.CurrentLord }),
  Heir: (house, arg) => find(charactersdata, { Id: house.Heir }),
  Overlord: (house, arg) => find(charactersdata, { Id: house.Overlord })
};
const HouseType = `
  type House {
    Id: ID!
    Name: String
    Seats: [String]
    Region: String
    CoatOfArms: String
    Words: String
    Titles: [String]
    CurrentLord: Character
    Founder: Character
    Founded: String
    Heir: Character
    Overlord: Character
    DiedOut: String
    AncestralWeapons: [String]
    CadetBranches: [House]
  }
`;
module.exports = { House, HouseType, AllHousesResolver, HouseResolver };
