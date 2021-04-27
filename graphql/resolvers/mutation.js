module.exports = {
  toggleFavouriteSession: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.toggleFavouriteSession(id);
  },
  addNewSession: (parent, { session }, { dataSources }, info) => {
    return dataSources.sessionAPI.addNewSession(session);
  },
};
