const ftoc = function(fahr, cel) { // [°C] = ([°F] − 32) × 5⁄9
  celsius = Math.round((fahr - 32) * (5/9) * 10) / 10;
  return celsius;
};

const ctof = function(cel, fahr) { // [°F] = [°C] × 9⁄5 + 32	
  fahrenheit = Math.round((cel * (9/5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
