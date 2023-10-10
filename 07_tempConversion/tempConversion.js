const convertToCelsius = function(f) {
  let r = (f - 32) * (5/9);
  r = Math.round(r * 10) / 10;
  return r
};

const convertToFahrenheit = function(c) {
  let r = c * (9/5) + 32;
  r = Math.round(r * 10) / 10;
  return r
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
