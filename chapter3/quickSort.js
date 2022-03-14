function quickSort(arr, p, r) {
  if(p >= r) {
    return arr;
  }
  const q = partition(arr, p, r);
  quickSort(arr, p, q - 1);
  quickSort(arr, q + 1, r);
}

function partition(arr, p, r) {
  let q = p;
  for(let u = p; u < r - 1; u++) {
    if(arr[u] <= arr[r]) {
      swap(arr, u, q);
      q++;
    }
  }
  swap(arr, q, r);
  return q;
}

function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const arr = [1, 3, 6, 5, 4, 2, 8, 7, 9, 0];

quickSort(arr, 0, 9);

console.log(arr);
