function factorial(n) {
  if(n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function recursiveLinearSearch(arr, n, i, x) {
  if(i > n) {
    return -1;
  } else {
    if(arr[i] === x) {
      return i;
    } else {
      recursiveLinearSearch(arr, n, i+1, x);
    }
  }
}

