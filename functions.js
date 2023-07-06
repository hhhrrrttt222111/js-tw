// map
function map(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}


// filter
function filter(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// reduce
function reduce(arr, callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
      acc = callback(acc, arr[i]);
    }
    return acc;
}

  
// foreach
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i]);
    }
  }
  