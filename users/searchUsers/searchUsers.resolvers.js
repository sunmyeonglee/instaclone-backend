import client from "../../client.js";

export default {
  Query: {
    searchUsers: async (_, { keyword }) =>
      client.user.findMany({
        where: {
          username: {
            startsWith: keyword.toLowerCase(),
          },
        },
      }),
  },
};
