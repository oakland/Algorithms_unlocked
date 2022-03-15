function reallySimpleSort(arr, n) {
  let k = 0;
  for(let i = 0; i < n; i++) {
    if(arr[i] === 1) {
      k++
    };
  };
  for(let i = 0; i < k; i++) {
    arr[i] = 1;
  }
  for(let i = k; i < n; i++) {
    arr[i] = 2;
  };
  return arr;
}

const arr = [1, 2, 1, 2, 1, 2, 1, 2];
reallySimpleSort(arr, arr.length);
