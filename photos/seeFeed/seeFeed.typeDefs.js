const typeDefs = `#graphql
type Query {
  seeFeed(offset: Int!): [Photo]
}

`;
export default typeDefs;
