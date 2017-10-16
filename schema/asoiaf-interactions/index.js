const { find, filter } = require("lodash");
const inodes = require("./BookInteractions-Nodes.json");
const iedges = require("./BookInteractions-Edges.json");

const AllInteractionCharactersResolver = (_, { Name }) => {
  if (Name)
    return filter(inodes, int => caseinsensitiveIncludes(int.Name, Name));
  return inodes;
};

const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());

const InteractionCharacterResolver = (_, { CharacterId }) => {
  if (CharacterId) return find(inodes, { Id: CharacterId });
  return;
};

const InteractionResolver = (_, { CharacterId }) => {
  if (CharacterId) return find(iedges, { Id: CharacterId });
  return;
};

// resolve inbound from others
const InteractionCharacter = {
  Interactions: char => filter(iedges, edge => char.Id == edge.Source)
};
const Interaction = {
  // PrecededById: Interaction => find(Interactionsdata, { Id: Interaction.PrecededById }),
  // FollowedBy: Interaction => find(Interactionsdata, { Id: Interaction.FollowedBy })
  Source: raction => find(inodes, { Id: raction.Source }),
  Target: raction => find(inodes, { Id: raction.Target })
};

const InteractionType = `
  # Character Interaction Node data from https://github.com/mathbeveridge/asoiaf
  type InteractionCharacter {
    Id: String!
    Name: String
    Interactions: [Interaction]
  }

  # Character Interaction Edge data from https://github.com/mathbeveridge/asoiaf
  type Interaction {
    Source: InteractionCharacter
    Target: InteractionCharacter
    Type: String
    Id: ID!
    weight: Int
  }
`;

module.exports = {
  Interaction,
  InteractionCharacter,
  InteractionType,
  AllInteractionCharactersResolver,
  InteractionCharacterResolver,
  InteractionResolver
};
