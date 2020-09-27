const axios = require("axios"),
getYoutubeSearchResults = require("./getYoutubeSearchResults");
const { response } = require("express");

module.exports = async () => {
  let params = {
    maxResults: 50,
    type: "video",
    q: "kerala Recipe",
  };
  try {
    let intResponse = await getYoutubeSearchResults(params);
    //   get total result
    let items = intResponse.items;
    params.nextPageToken = intResponse.nextPageToken;
    let noOfRequests = Math.round(pageInfo.totalResults / params.maxResults);
    //   set a loop for and get next page token and ids
    for (i = 0;i <= noOfRequests;i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          addYoutubeIdsToDB(items)
          .then(()=>getYoutubeSearchResults(params))
          .then((response)=>{
            if(response.error) resolve()
            params.nextPageToken = response.nextPageToken;
            items = response.items;
            resolve();
          })
        }, 60000);
      });
    }
    return noOfRequests;
  } catch (error) {
    return error;
  }
};
