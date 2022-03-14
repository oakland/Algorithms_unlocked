function mergeSort(arr, p, r) {
  if(p >= r) {
    return arr;
  }
  const q = Math.floor((p + r) / 2);
  mergeSort(arr, p, q);
  mergeSort(arr, q + 1, r);
  merge(arr, p, q, r);
}

function merge(arr, p, q, r) {
  let B = [];
  let C = [];
  for(let i = p; i <= q; i++) {
    B[i - p] = arr[i];
  }
  for(let j = q + 1; j <= r; j++) {
    C[j - (q + 1)] = arr[j];
  }
  B[q - p + 1] = Infinity;
  C[r - q] = Infinity;

  let m = 0;
  let n = 0;
  let k = p;
  while(k <= r) {
    if(B[m] <= C[n]) {
      arr[k] = B[m]
      m++;
    } else {
      arr[k] = C[n];
      n++;
    }
    k++;
  }
}

// mergeSort([4, 1, 2, 5, 3, 7, 6, 8], 0, 7);
