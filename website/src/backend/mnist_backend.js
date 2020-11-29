import * as tf from "@tensorflow/tfjs";

import { mnist_one, mnist_two, test_input } from "./storage/mnist_storage.js";

export const initializeArray = (size, val) => {
  var arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = val;
    }
  }
  return arr;
};

/**
 * Hopefully parses the data correctly
 * @param {Object} data contains the canvas info
 */
export const processData = (data) => {
  let cleaned_data = initializeArray(28, 0.0);

  for (var line = 0; line < data.length; line++) {
    let points = data[line].points;
    for (var point_num = 0; point_num < points.length; point_num++) {
      let point = points[point_num];
      let new_y = Math.floor(point.y / 14);
      let new_x = Math.floor(point.x / 14);
      cleaned_data[new_y][new_x] = 1.0;

      if (new_y - 2 >= 0) {
        cleaned_data[new_y - 2][new_x] = 0.5;
      }
      if (new_y - 1 >= 0) {
        cleaned_data[new_y - 1][new_x] = 1.0;
      }

      if (new_x - 2 >= 0) {
        cleaned_data[new_y][new_x - 2] = 0.5;
      }
      if (new_x - 1 >= 0) {
        cleaned_data[new_y][new_x - 1] = 1.0;
      }

      if (new_y + 2 < 28) {
        cleaned_data[new_y + 2][new_x] = 0.5;
      }
      if (new_y + 1 < 28) {
        cleaned_data[new_y + 1][new_x] = 1.0;
      }

      if (new_x + 2 < 28) {
        cleaned_data[new_y][new_x + 2] = 0.5;
      }
      if (new_x + 1 < 28) {
        cleaned_data[new_y][new_x + 1] = 1.0;
      }
    }
  }

  var str = "";
  for (var row = 0; row < 28; row++) {
    for (var col = 0; col < 28; col++) {
      str += cleaned_data[row][col] + " ";
    }
    str += "\n";
  }

  console.log(str);
  return cleaned_data;
};

export const predictNum = (data) => {
  // process inputs
  let inputs = tf.tensor2d(processData(data));
  inputs = tf.reshape(inputs, [1, 784]);
  inputs = tf.tensor2d([[1]]).concat(inputs, 1);

  // compute hidden layer values
  let hidden_layer = tf.matMul(inputs, tf.transpose(mnist_one));
  hidden_layer = tf.mul(-1, hidden_layer);
  hidden_layer = tf.pow(Math.E, hidden_layer);
  hidden_layer = tf.add(1, hidden_layer);
  hidden_layer = tf.div(1, hidden_layer);

  // process hidden layer
  hidden_layer = tf.tensor2d([[1]]).concat(hidden_layer, 1);

  // compute output layer
  let output_layer = tf.matMul(hidden_layer, tf.transpose(mnist_two));
  output_layer = tf.mul(-1, output_layer);
  output_layer = tf.pow(Math.E, output_layer);
  output_layer = tf.add(1, output_layer);
  output_layer = tf.div(1, output_layer);

  return output_layer.array();
};
