import * as tf from "@tensorflow/tfjs";

export const linCostDerivative = (predicted, actual, inputs, m) => {
  let diff = tf.sub(predicted, actual);
  let grad = tf.matMul(tf.transpose(inputs), diff);
  return tf.mul(1 / m, grad);
};

export const buildInputOutput = (data) => {
  let x = [];
  let y = [];

  for (let pointIndex = 0; pointIndex < data.length; pointIndex++) {
    let point = data[pointIndex];
    x.push(point.x);
    y.push(point.y);
  }

  return { x: x, y: y };
};

export const createInputs = (degrees, x, sample_size) => {
  let input = tf.ones([1, sample_size]);

  for (let deg = 1; deg < degrees + 1; deg++) {
    let col = tf.reshape(x, [1, sample_size]);
    col = tf.pow(col, deg);

    input = input.concat(col);
  }

  return input;
};

export const linreg = (data, degrees) => {
  let sample_size = data.length;

  let input_output = buildInputOutput(data);
  let x = tf.tensor(input_output.x);
  let y = input_output.y;

  let input = createInputs(degrees, x, sample_size);

  let output = tf.tensor2d(y, [sample_size, 1]);

  let thetas = tf.randomUniform([degrees + 1, 1], -1, 1);

  input = tf.transpose(input);

  for (let itr = 0; itr < 10000; itr++) {
    let pred_y = tf.matMul(input, thetas);
    let grad = linCostDerivative(pred_y, output, input, sample_size);

    thetas = tf.sub(thetas, tf.mul(0.0001, grad));
  }

  let new_x = tf.linspace(-10, 10, 100);
  let new_input = createInputs(degrees, new_x, 100);

  let new_y = tf.matMul(tf.transpose(new_input), thetas);

  return tf.transpose(tf.stack([tf.reshape(new_x, [100, 1]), new_y], 1));
};
