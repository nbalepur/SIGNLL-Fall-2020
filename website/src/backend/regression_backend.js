import * as tf from "@tensorflow/tfjs";

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

export const linreg = (data, degrees) => {
  let sample_size = data.length;

  let input = tf.ones([1, sample_size]);

  let input_output = buildInputOutput(data);
  let x = input_output.x;
  let y = input_output.y;

  for (let deg = 1; deg < degrees + 1; deg++) {
    let col = tf.tensor2d(x, [1, sample_size]);
    col = tf.pow(col, deg);
    input = input.concat(col);
  }

  let output = tf.tensor2d(y, [1, sample_size]);

  let A1 = tf.matMul(tf.transpose(input), input);
  let A = invertMatrix(A1).then((arr) => console.log(arr));

  console.log(A);
};

// calculate the determinant of a matrix m
function det(m) {
  return tf.tidy(() => {
    const [r, _] = m.shape;
    if (r === 2) {
      const t = m.as1D();
      const a = t.slice([0], [1]).dataSync()[0];
      const b = t.slice([1], [1]).dataSync()[0];
      const c = t.slice([2], [1]).dataSync()[0];
      const d = t.slice([3], [1]).dataSync()[0];
      let result = a * d - b * c;
      return result;
    } else {
      let s = 0;
      let rows = [...Array(r).keys()];
      for (let i = 0; i < r; i++) {
        let sub_m = m.gather(
          tf.tensor1d(
            rows.filter((e) => e !== i),
            "int32"
          )
        );
        let sli = sub_m.slice([0, 1], [r - 1, r - 1]);
        s += Math.pow(-1, i) * det(sli);
      }
      return s;
    }
  });
}

// the inverse of the matrix : matrix adjoint method
function invertMatrix(m) {
  return tf.tidy(() => {
    const d = det(m);
    if (d === 0) {
      return;
    }
    const [r, _] = m.shape;
    let rows = [...Array(r).keys()];
    let dets = [];
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < r; j++) {
        const sub_m = m.gather(
          tf.tensor1d(
            rows.filter((e) => e !== i),
            "int32"
          )
        );
        let sli;
        if (j === 0) {
          sli = sub_m.slice([0, 1], [r - 1, r - 1]);
        } else if (j === r - 1) {
          sli = sub_m.slice([0, 0], [r - 1, r - 1]);
        } else {
          const [a, b, c] = tf.split(sub_m, [j, 1, r - (j + 1)], 1);
          sli = tf.concat([a, c], 1);
        }
        dets.push(Math.pow(-1, i + j) * det(sli));
      }
    }
    let com = tf.tensor2d(dets, [r, r]);
    let tr_com = com.transpose();
    let inv_m = tr_com.div(tf.scalar(d));
    return inv_m;
  });
}
