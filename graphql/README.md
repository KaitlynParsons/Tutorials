# GraphQL API with Apollo Server
Tutorial from PluralSight to build a GraphQL API with the Apollo Server library.

## Requirements
- Node.js (node --version)
- npm (npm --version)
- docker desktop (docker & docker-compose)

## Setup
- docker-compose up

- url will be located at: http://localhost:4000

## Sample Query
```graphql
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
```
