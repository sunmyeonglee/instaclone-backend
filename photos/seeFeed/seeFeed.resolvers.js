import client from "../../client.js";
import { protectedResolver } from "../../users/users.utils.js";

export default {
  Query: {
    seeFeed: protectedResolver((_, { offset }, { loggedInUser }) =>
      client.photo.findMany({
        take: 2,
        skip: offset,
        where: {
          OR: [
            { user: { followers: { some: { id: loggedInUser.id } } } },
            { userId: loggedInUser.id },
          ],
        },
        orderBy: { createdAt: "desc" },
        // take: 2,
        // skip: lastId ? 1 : 0,
        // ...(lastId && { cursor: { id: lastId } }),
      })
    ),
  },
};
