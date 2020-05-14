export default {
  storeTweet: (tweet) => {
    return {
      type: "@TWEET/STORE",
      payload: tweet,
    };
  },
};
