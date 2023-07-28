import client from "../../client.js"

export default {
  Query: {
    searchUsers: async (_, { keyword,lastId }) => {
      const users = await client.user
      .findMany({ 
        where: { username: { startsWith: keyword.toLowerCase() } },
        take: 2,
        skip: lastId ? 1 : 0,
        ...(lastId && { cursor: { id: lastId }})
      })
      return users
    }

  }
}