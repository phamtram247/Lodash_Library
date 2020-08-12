const _ = {
  clamp(num, lower, upper) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue
  },
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      var temp;
      temp = end;
      end = start;
      start = temp;
    }
    var isInRange = 
    true;
    if (start <= number && number < end) {
      isInRange = true;
    } else {return false;}
    return isInRange
  },
  words(string) {
    const words = string.split(' ');
    return words;
  },
  pad(string, length) {
    if (length < string.length) {
      return string
    }
    const startPaddingLength = Math.floor((length - string.length) / 2);
    var endPaddingLength = length - string.length - startPaddingLength;
    var paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    return paddedString;
  },
  has(object, key) {
    var hasValue = object[key];
    if (hasValue != undefined) {
      return true
    } else {return false}
    return hasValue
    },
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject = {originalValue : key};
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateValue = predicate(value);
      if (predicateValue === true)
        {
          return key;
        }
      return undefined;
    }
  },
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    let droppedArray = array.slice(n);
    return droppedArray;
  },
  dropWhile(array, predicate) {
    function cb(element, index) {
      return !predicate(element, index, array);
    }
    let dropNumber = array.findIndex(cb);
    const droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
};




// Do not write or modify code below this line.
module.exports = _;