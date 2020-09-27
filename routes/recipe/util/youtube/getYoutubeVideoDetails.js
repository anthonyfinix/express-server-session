const axios = require("axios");
module.exports = (ids) => {
  return axios({
    method:'GET',
    url:'https://www.googleapis.com/youtube/v3/videos',
    params: {
      part: "snippet",
      id: ids,
      key: process.env.YOUTUBE_KEY,
    },
  })
    .then((response) => response.data);
};
