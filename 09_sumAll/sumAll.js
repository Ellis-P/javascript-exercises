const sumAll = function(int1, int2) {  
  if (int1 < 0 || int2 < 0) {
    return "ERROR";
  } else if (!(Number.isInteger(int1)) || !(Number.isInteger(int2))) {
    return "ERROR";
  } else if (isNaN(int1) || isNaN(int2)) {
    return "ERROR";
  }

  
  let high = int1;
  let low = int2;
  
  if (int1 < int2) {
    high = int2;
    low = int1;
  }

  let count = low;
  let sum = 0;

  while (count <= high) {
    sum += count;
    count++;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
