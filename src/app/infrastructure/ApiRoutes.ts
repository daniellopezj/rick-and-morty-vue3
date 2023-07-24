const BasePrefix = '/api';
const BaseCharacters = `${BasePrefix}/characters`;

const ApiRoutes = {

  Characters: {
    FetchMany: BaseCharacters,
    ShowOne: (id: string) => `${BaseCharacters}/${id}`,
  },

};

export default ApiRoutes;
