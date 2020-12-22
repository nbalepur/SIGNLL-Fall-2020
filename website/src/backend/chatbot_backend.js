import * as tf from "@tensorflow/tfjs";

import {
  chatbot_theta_one,
  chatbot_theta_two,
  all_words,
} from "./storage/chatbot_storage.js";

export const processWords = (input) => {
  input = input.replace(/[.,/#!$%^&?.!*;:{}=\-_`~()]/g, "").toLowerCase();
  return input.split(" ");
};

export const buildBag = (words) => {
  let bag = [];

  for (let word_index = 0; word_index < all_words.length; word_index++) {
    let word = all_words[word_index];
    bag.push(words.includes(word) ? 1 : 0);
  }

  return bag;
};

export const predictIntent = (text_input) => {
  // process the text input and create the bag of words
  let cleaned_words = processWords(text_input);
  let bag = [buildBag(cleaned_words)];

  // process inputs
  let inputs = tf.tensor2d(bag);
  inputs = tf.tensor2d([[1]]).concat(inputs, 1);

  // compute hidden layer values
  let hidden_layer = tf.matMul(inputs, tf.transpose(chatbot_theta_one));
  hidden_layer = tf.mul(-1, hidden_layer);
  hidden_layer = tf.pow(Math.E, hidden_layer);
  hidden_layer = tf.add(1, hidden_layer);
  hidden_layer = tf.div(1, hidden_layer);

  // process hidden layer
  hidden_layer = tf.tensor2d([[1]]).concat(hidden_layer, 1);

  // compute output layer
  let output_layer = tf.matMul(hidden_layer, tf.transpose(chatbot_theta_two));
  output_layer = tf.mul(-1, output_layer);
  output_layer = tf.pow(Math.E, output_layer);
  output_layer = tf.add(1, output_layer);
  output_layer = tf.div(1, output_layer);

  return output_layer;
};
