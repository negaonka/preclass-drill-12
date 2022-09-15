function callbackFunction(arr, func) {
  const result = arr.map((i) => {
    return func(i);
  });
  return result;
}

module.exports = callbackFunction;
