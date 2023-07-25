const BasePrefix = '/api';
const BaseCharacter = `${BasePrefix}/character`;
const BaseEpisode = `${BasePrefix}/episode`;
const BaseLocation = `${BasePrefix}/location`;

const ApiRoutes = {
  Characters: {
    FetchMany: BaseCharacter,
    ShowOne: (id: string) => `${BaseCharacter}/${id}`,
    fetchByCharacter: (id: string) => `${BaseCharacter}/${id}`,
  },
  Episode: {
    FetchMany: BaseEpisode,
    ShowOne: (id: string) => `${BaseEpisode}/${id}`,
    fetchByCharacter: (id: string) => `${BaseEpisode}/${id}`,
  },
  Location: {
    FetchMany: BaseLocation,
    ShowOne: (id: string) => `${BaseLocation}/${id}`,
    fetchByCharacter: (id: string) => `${BaseLocation}/${id}`,
  },

};

export default ApiRoutes;
