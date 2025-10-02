const convertToCelsius = function(fahrenheit) {
  return Number(((fahrenheit -32) * 5 / 9).toFixed(1));
  // return +((fahrenheit -32) * 5 / 9).toFixed(1);

   	
};

const convertToFahrenheit = function(celsius) {
  return Number(((celsius * 9 / 5) + 32).toFixed(1));
  // return +((celsius * 9 / 5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
