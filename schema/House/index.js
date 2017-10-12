const housesdata = require("./houses.json");

const HouseResolver = () => housesdata;

const House = `
  type Seat {
    name: String
  }
  type House {
    Id: ID!
    Name: String
    Seats: [Seat]
    Region: String
    CoatOfArms: String
    Words: String
    Titles: [String]
    CurrentLord: String
    Founder: String
    Founded: String
    Heir: String
    Overlord: Int
    DiedOut: String
    AncestralWeapons: [String]
    CadetBranches: [String]
  }
`;
module.exports = { House, HouseResolver };
