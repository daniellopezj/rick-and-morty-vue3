const BasePrefix = '/api';
const BaseCharacter = `${BasePrefix}/character`;

const ApiRoutes = {
  Characters: {
    FetchMany: BaseCharacter,
    ShowOne: (id: string) => `${BaseCharacter}/${id}`,
  },

};

export default ApiRoutes;
