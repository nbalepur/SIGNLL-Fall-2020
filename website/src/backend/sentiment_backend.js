import { tweet_dict } from "./storage/sentiment_storage.js";

/**
 * Parses the tweet accordingly
 * @param {String} tweet user input tweet
 */
export const processTweet = (tweet) => {
  tweet = tweet.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").toLowerCase();
  return tweet.split(" ");
};

/**
 * Convers the tweet to a numeric value
 * @param {String} tweet user input
 */
export const extractFeatures = (tweet) => {
  // process the tweet and declare variables
  let processed_tweet = processTweet(tweet);
  let tweet_val = [1, 0, 0];
  let sentiment_infos = [];

  // iterate through words
  for (var tweet_num = 0; tweet_num < processed_tweet.length; tweet_num++) {
    // get freqs
    let freqs = tweet_dict[processed_tweet[tweet_num]];
    // continue if not in dictionary
    if (freqs === null || freqs === undefined) {
      freqs = [0, 0];
    }

    // add info object
    sentiment_infos.push({
      word: processed_tweet[tweet_num],
      neg_count: freqs[0],
      pos_count: freqs[1],
    });

    // increment appropriately
    tweet_val[1] += freqs[0];
    tweet_val[2] += freqs[1];
  }

  // return object of data
  return {
    tweet_val: tweet_val,
    sentiment_infos: sentiment_infos,
  };
};

// trained parameter values
const tweet_thetas = [0.000075731086, -0.0091528565, 0.0105108591];

/**
 * Takes the sigmoid of a function
 * @param {float} num numeric input
 */
export const sigmoid = (num) => {
  return 1 / (1 + Math.exp(-1 * num));
};

/**
 * predicts the sentiment of a tweet
 * @param {string} tweet
 */
export const predictSentiment = (tweet) => {
  // gets the value
  let tweet_obj = extractFeatures(tweet);
  let tweet_val = tweet_obj.tweet_val;

  // prediction
  let pred = sigmoid(
    tweet_val[0] * tweet_thetas[0] +
      tweet_val[1] * tweet_thetas[1] +
      tweet_val[2] * tweet_thetas[2]
  );

  // creates sentiment info
  let sentimentInfo = {
    prediction: pred,
    sentiment: pred < 0.5 ? "Negative" : "Positive",
    word_info: tweet_obj.sentiment_infos,
  };

  return sentimentInfo;
};
