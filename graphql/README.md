# GraphQL API with Apollo Server
Tutorial from PluralSight to build a GraphQL API with the Apollo Server library.

## Requirements
- Node.js (node --version)
- npm (npm --version)

## Setup
- From the data/speakers directory: npm install && npm start
- npm install

- ## Run Locally
  - npm start

- # Run in Docker
  - `docker build . -t <your name>/graphql`
  - `docker run -p 4000:4000 -d <you name>/graphql`

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
