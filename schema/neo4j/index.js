const { find, filter } = require("lodash");
const episodes = require("./episodes.json");
const locations = require("./locations.json");
const Betrayalsdata = require("./TVBetrayals.json");

const caseinsensitiveIncludes = (bigstring, substring) =>
  bigstring.toLowerCase().includes(substring.toLowerCase());

const AllTVEpisodesResolver = (_, { Title }) => {
  if (Title)
    return filter(episodes, int => caseinsensitiveIncludes(int.title, Title));
  return episodes;
};

const TVEpisodeResolver = (_, { CharacterId }) => {
  if (CharacterId) return find(episodes, { Id: CharacterId });
  return;
};

const AllTVLocationsResolver = (_, { Name }) => {
  if (Name)
    return filter(locations, int =>
      caseinsensitiveIncludes(int.locationName, Name)
    );
  return locations;
};

const TVLocationResolver = (_, { CharacterId }) => {
  if (CharacterId) return find(locations, { Id: CharacterId });
  return;
};

// resolve inbound from others
const TVEpisode = {
  Locations: episode =>
    filter(locations, loc => episode.episodeId == loc.episodeId),
  Betrayals: episode =>
    filter(
      Betrayalsdata,
      bet => episode.episode == bet.EpisodeId && episode.season == bet.SeasonId
    )
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
    Betrayals: [TVBetrayal]
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

const AllTVBetrayalsResolver = (_, { Betrayal, Perpetrator, Victim }) => {
  if (Betrayal)
    return (
      console.log(Betrayal) ||
      filter(Betrayalsdata, bet =>
        caseinsensitiveIncludes(bet.Betrayal, Betrayal)
      )
    );
  if (Perpetrator)
    return filter(Betrayalsdata, bet =>
      caseinsensitiveIncludes(bet.Perpetrator, Perpetrator)
    );
  if (Victim)
    return filter(Betrayalsdata, bet =>
      caseinsensitiveIncludes(bet.Victim, Victim)
    );
  return Betrayalsdata;
};

const TVBetrayalResolver = (_, { Id }) => {
  if (Id) return find(Betrayalsdata, { Id: Id });
  return;
};

// resolve inbound from others
const TVBetrayal = {
  // PrecededById: Betrayal => find(Betrayalsdata, { Id: Betrayal.PrecededById }),
  // FollowedBy: Betrayal => find(Betrayalsdata, { Id: Betrayal.FollowedBy })
  TVEpisode: bet =>
    find(
      episodes,
      ep => ep.episode == bet.EpisodeId && ep.season == bet.SeasonId
    )
};

const TVBetrayalType = `
  # Betrayal data from Vengage https://venngage.com/blog/game-of-thrones-infographic/
  type TVBetrayal {
    Betrayal: String
    SeasonId: Int
    EpisodeId: Int
    TVEpisode: TVEpisode
    Perpetrator: String
    PerpRole: String
    PerpHouse: String
    PerpGender: String
    Victim: String
    RelationshipOfPerpToVictim: String
    VictimRole: String
    VictimHouse: String
    VictimGender: String
    PerpGainReasoning: String
    ImmediateConsequence: String
    Deaths: String
    Geography: String
    Impact: Int
    Notes: String
  }
`;

module.exports = {
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
};
