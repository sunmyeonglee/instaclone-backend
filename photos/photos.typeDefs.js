const typeDefs = `#graphql
  type Photo {
    id: Int!
    user: User!
    file: String!
    caption: String
    hashtags: [Hashtag]
    commentNumber: Int!
    comments: [Comment]
    createdAt: String!
    updatedAt: String!
    likes: Int!
    isMine: Boolean!
    isLiked: Boolean!
  }
  type Hashtag {
    id: Int!
    hashtag: String!
    photos(page: Int!): [Photo]
    totalPhotos: Int!
    createdAt: String!
    updatedAt: String!
  }
  type Like {
    id: Int!
    photo: Photo!
    user: User!
    createdAt: String!
    updatedAt: String!

  }

`;

export default typeDefs;
