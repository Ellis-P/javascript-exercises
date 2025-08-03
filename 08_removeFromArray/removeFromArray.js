const removeFromArray = function(array, ...items) {
  const arrayCopy = array.slice();

  for (const element of array) {
    if (items.includes(element)) {
      let index = arrayCopy.indexOf(element);
      arrayCopy.splice(index, 1);
    }
  }
  return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
