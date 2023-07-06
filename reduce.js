function reduce(arr, callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : arr[0];
    const startIndex = initialValue !== undefined ? 0 : 1;
    for (let i = startIndex; i < arr.length; i++) {
      acc = callback(acc, arr[i]);
    }
    return acc;
}