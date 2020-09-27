const Recipe = require("../../../../modals/recipes");
module.exports = async (ids) => {
  ids.forEach((video) => {
    Recipe({
      youtubeId: video.id.videoId,
      addedOn: Date.now(),
    }).save();
  });
};
