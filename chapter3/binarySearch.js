function binarySearch(arr, x) {
  let p = 0;
  let r = arr.length - 1;
  while(p <= r) {
    let q = Math.floor((p + r) / 2);
    if(arr[q] === x) {
      return q;
    } else {
      if(arr[q] > x) {
        r = q - 1;
      } else {
        p = q + 1;
      }
    }
  }
  return -1;
}

function recursiveBinarySearch(arr, n, x) {
  function search(arr, p, r, x) {
    if(p > r) {
      return -1;
    }

    const q = Math.floor((p + r) / 2);
    if(arr[q] === x) {
      return q;
    } else {
      if(arr[q] > x) {
        search(arr, p, q - 1, x);
      } else {
        search(arr, q + 1, r, x);
      }
    }
  }

  search(arr, 1, n, x);
}
