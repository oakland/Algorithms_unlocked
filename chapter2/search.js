function linearSearch(arr, x) {
  let answer = -1;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === x) {
      answer = i;
    }
  };
  return answer;
}

function betterLinearSearch() {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === x) {
      return i;
    }
  };
  return -1;
}

function sentinelLinearSearch(arr, x) {
  const last = arr[arr.length - 1];
  arr[arr.length - 1] = x;
  let i = 0;
  while(arr[i] !== x) {
    i++
  };
  arr[arr.length - 1] = last;
  if(i < n || arr[arr.length - 1] === x) {
    return i;
  }
  return -1;
}
