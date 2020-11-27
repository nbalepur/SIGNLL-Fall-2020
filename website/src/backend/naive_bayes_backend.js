import { likelihoods } from "./storage/naive_bayes_storage.js";

/**
 * Parses the tweet accordingly
 * @param {String} tweet user input tweet
 */
export const processTweet = (tweet) => {
  tweet = tweet.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
  return tweet.split(" ");
};

export const predictTweet = (tweet) => {
  // process tweet
  let processed_tweet = processTweet(tweet);

  // initialize variables
  let likelihood_sum = 0;
  let words = [];
  let likelihood_list = [];

  for (var word_num = 0; word_num < processed_tweet.length; word_num++) {
    // get likelihood
    let likelihood = likelihoods[processed_tweet[word_num]];

    // null and undefined edge case
    if (likelihood === null || likelihood === undefined) {
      likelihood = 0;
    }

    // add to list
    words.push(processed_tweet[word_num]);
    likelihood_list.push(likelihood);

    // increment sum
    likelihood_sum += likelihood;
  }

  // return object with needed items
  return {
    likelihood: likelihood_sum,
    pred_author: likelihood_sum > 0 ? "Kanye" : "Biden",
    words: words,
    word_likelihoods: likelihood_list,
  };
};
