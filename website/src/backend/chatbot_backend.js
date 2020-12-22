import * as tf from "@tensorflow/tfjs";

import {
  chatbot_theta_one,
  chatbot_theta_two,
  all_words,
  tags,
  responses,
} from "./storage/chatbot_storage.js";

import TacoBellLogo from "../images/TacoBellLogo.svg";

import { MessageBox } from "react-chat-elements";

import { maps_api_key } from "./storage/api_key.js";

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

export const getReply = (index, prob) => {
  let tag = tags[index];

  let replies = prob >= 0.25 ? responses[tag] : responses.noresponse;
  let reply = replies[Math.floor(Math.random() * replies.length)];

  let messages = [];
  messages.push(
    <MessageBox
      position={"left"}
      type="text"
      avatar={TacoBellLogo}
      status={"read"}
      date=""
      text={reply}
    />
  );

  if (prob >= 0.25 && tag === "directions") {
    messages.push(
      <MessageBox
        type="location"
        avatar={TacoBellLogo}
        status={"read"}
        date=""
        apiKey={maps_api_key}
        data={{
          latitude: 40.1058536,
          longitude: -88.2421052,
          staticUrl:
            "https://maps.googleapis.com/maps/api/staticmap?center=40.1058372,-88.2421052&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Tlabel:C%7C40.1058372,-88.2421052&key=" +
            maps_api_key,
        }}
      />
    );
  }

  return messages;
};
