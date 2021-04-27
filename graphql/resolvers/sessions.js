const _ = require("lodash");
module.exports = {
  async speakers(session, args, { dataSources }) {
    const speakers = await dataSources.speakerApi.getSpeakers(args);
    return speakers.filter((speaker) => {
      return _.filter(session.speakers, { id: speaker.id }).length > 0;
    });
  },
};
