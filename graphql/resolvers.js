module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionApi.getSessions(args);
    },
    sessionsById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionApi.getSessionsById(id);
    },
  },
};
