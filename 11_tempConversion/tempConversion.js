const convertToCelsius = function(fTemp) {
  const cTemp = (fTemp - 32) * (5/9);
  return Math.round(cTemp * 10) / 10;
};

const convertToFahrenheit = function(cTemp) {
  const fTemp = ((cTemp * (9/5)) + 32);
  return Math.round(fTemp * 10) / 10;
};

// C to F = ((cTemp * (9/5)) + 32)
// F to C = (fTemp - 32) * (5/9)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
