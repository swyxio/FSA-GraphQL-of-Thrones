const { find, filter } = require("lodash");
const episodes = require("./episodes.json");
const locations = require("./locations.json");

const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());

const AllTVEpisodesResolver = (_, { Name }) => {
  if (Name)
    return filter(episodes, int => caseinsensitiveIncludes(int.Name, Name));
  return episodes;
};

const TVEpisodeResolver = (_, { CharacterId }) => {
  if (CharacterId) return find(episodes, { Id: CharacterId });
  return;
};

const AllTVLocationsResolver = (_, { Name }) => {
  if (Name)
    return filter(locations, int => caseinsensitiveIncludes(int.Name, Name));
  return locations;
};

const TVLocationResolver = (_, { CharacterId }) => {
  if (CharacterId) return find(locations, { Id: CharacterId });
  return;
};

// resolve inbound from others
const TVEpisode = {
  Locations: episode =>
    filter(locations, loc => episode.episodeId == loc.episodeId)
};
const TVLocation = {
  Episodes: location =>
    filter(episodes, ep => location.episodeId == ep.episodeId)
};

const TVEpisodeLocationType = `
  # Episode-Location data from https://github.com/mneedham/neo4j-got
  type TVEpisode {
    episodeId: ID!
    season: Int
    episode: Int
    title: String
    Locations: [TVLocation]
  }

  # Episode-Location data from https://github.com/mneedham/neo4j-got
  type TVLocation {
    episodeId: Int
    locationId: String
    locationName: String
    actor: String
    Episodes: [TVEpisode]
  }
`;

module.exports = {
  TVEpisodeLocationType,
  AllTVEpisodesResolver,
  TVEpisodeResolver,
  AllTVLocationsResolver,
  TVLocationResolver,
  TVEpisode,
  TVLocation
};
