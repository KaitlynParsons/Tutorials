# GraphQL API with Apollo Server
Tutorial from PluralSight to build a GraphQL API with the Apollo Server library.

## Requirements
- Node.js (node --version)
- npm (npm --version)

## Setup
- From the data/speakers directory: npm install && npm start
- From the root directory: npm install
- From the root directory: npm start

## Sample Query
`
query {
  sessionById(id:"84473") {
    ...on Session {
      title,
    favourite,
    room,
    track,
    id,
    level,
    speakers{
      name
    }
    }
    ...on Error {
      code,
      message,
      token
    }
  }
  
  sessions(room: EUROPA) {
    title,
    room,
    track,
    id,
    level
  }
}
`