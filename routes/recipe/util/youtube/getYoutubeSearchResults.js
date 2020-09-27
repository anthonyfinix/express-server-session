const axios = require("axios");

module.exports = async ({
  nextPageToken = "",
  part = "snippet",
  q = "",
  maxResults = 5,
  key = process.env.YOUTUBE_KEY,
  type = "",
}) => {
  return await axios({
    method: "GET",
    url: "https://www.googleapis.com/youtube/v3/search",
    params: { part, q, maxResults, key, nextPageToken, type },
  })
    .then((response) => response.data)
    .catch((error) => {
      return { error };
    });
};
