import React, { Component } from "react";

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
  let cleaned_data = initializeArray(256, 0.0);

  for (var line = 0; line < data.length; line++) {
    let points = data[line].points;
    for (var point_num = 0; point_num < points.length; point_num++) {
      let point = points[point_num];
      cleaned_data[
        (Math.floor(point.y / 1.5), Math.floor(point.x / 1.5))
      ] = 1.0;
    }
  }

  return cleaned_data;
};

export const predictNum = (data) => {
  let cleaned_data = processData(data);
};
