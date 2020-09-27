const { Recipe } = require("../../modals");
const { getYoutubeVideoDetails } = require("./util/youtube");

module.exports = async (req,res) => {
  let ids = await Recipe.find({});
  let youtubeIds = "";
  ids.forEach((item) => {
    youtubeIds += `${item.youtubeId},`;
  });
  let youtubevideoDetails = await getYoutubeVideoDetails(youtubeIds);
  console.youtubevideoDetails;
  res.json(youtubevideoDetails);
};
