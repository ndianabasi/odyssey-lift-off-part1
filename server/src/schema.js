import { gql } from "apollo-server";

const typeDefs = gql`
  # Schema definitions go here

  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in minutes"
    length: Int
    "The number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track or a module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Tracks!]!
  }
`;

export default typeDefs;
