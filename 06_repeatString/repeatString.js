const repeatString = function(string, num) {
  let count = 0;
  let repeatedString = "";

  if (num < 0) {
    return "ERROR";
  }

  while (count < num) {
    repeatedString += string;
    count++;
  }
  return repeatedString
};
// Do not edit below this line
module.exports = repeatString;
