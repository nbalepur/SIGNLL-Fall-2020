import { create, all } from "mathjs";

const config = {};
const math = create(all, config);

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
  let data = [];

  for (let deg = 0; deg <= degrees; deg++) {
    let col = [];
    for (let x_itr = 0; x_itr < sample_size; x_itr++) {
      col.push(Math.pow(x[x_itr], deg));
    }
    data.push(col);
  }

  return math.matrix(data);
};

export const linreg = (data, degrees) => {
  let sample_size = data.length;

  let input_output = buildInputOutput(data);
  let x = input_output.x;
  let y = input_output.y;

  let input = math.transpose(createInputs(degrees, x, sample_size));
  let output = math.transpose(math.matrix([y]));

  let A = math.multiply(math.transpose(input), input);
  let B = math.multiply(math.transpose(input), output);

  let thetas = math.multiply(math.inv(A), B);

  let new_x = math.range(-10, 10, 0.1, true);

  let new_input = math.transpose(createInputs(degrees, new_x._data, 201));

  let new_y = math.multiply(new_input, thetas);

  return {
    x: new_x,
    y: new_y,
    thetas: thetas,
  };
};
