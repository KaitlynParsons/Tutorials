const { ApolloServer } = require("apollo-server");
const SessionAPI = require("./datasources/sessions");

const typeDefs = require("./schema.js");

const resolvers = require("./resolvers.js");

const dataSources = () => ({
  sessionApi: new SessionAPI()
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // introspection: true,
  // playground: true,
});

server.listen({ port: process.env.port || 4000 }).then((url) => {
  console.log(`GraphQL running at ${url.port}`);
});
