require("dotenv").config();
import schema from "./schema";
import { ApolloServer } from "apollo-server";
import { getUser, protectedResolver } from "./users/users.utils";

const PORT = process.env.PORT;
const server = new ApolloServer({
  schema,
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
      protectedResolver,
    };
  },
});

server
  .listen(PORT)
  .then(() => console.log(`🌿 Server is running on http://localhost:${PORT}/`));
