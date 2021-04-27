const { gql } = require("apollo-server");

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      startsAt: String
      endsAt: String
      room: Room
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionById(id: ID): SessionOrError
    speakers: [Speaker]
    speakerById(id: ID): Speaker
  }
  input SessionInput {
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
    level: String
    favourite: Boolean
  }
  type Session {
    id: ID!
    title: String!
    description: String
    startsAt: String
    endsAt: String
    room: Room
    day: String
    format: String
    track: String
      @deprecated(
        reason: "Too many sessions do not fit into a single track, we will be migrating to a tags based system in the future..."
      )
    level: String
    speakers: [Speaker]
    favourite: Boolean
  }
  type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
  }
  type Mutation {
    toggleFavouriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
  }
  enum Room {
    EUROPA
    SOL
    SATURN
  }
  type Error {
    code: String,
    message: String,
    token: String
  }
  union SessionOrError = Session | Error
`;
