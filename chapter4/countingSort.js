function countKeysEqual(arr, n, m) {
  let equal = Array.from({length: m}).fill(0);
  for(let i = 0; i < n; i++) {
    const key = arr[i];
    equal[key]++;
  }
  return equal;
}

function countKeysLess(equal, m) {
  const less = Array.from({length: m});
  less[0] = 0;
  for(let j = 1; j < m; j++) {
    less[j] = less[j - 1] + equal[j - 1];
  }
  return less;
}

function rearrange(arr, less, n, m) {
  let B = Array.from({length: n});
  let next = Array.from({length: m});

  for(let j = 0; j < m; j++) {
    next[j] = less[j];
  }
  for(let i = 0; i < n; i++) {
    const key = arr[i];
    const index = next[key];
    B[index] = arr[i];
    next[key]++;
  }
  return B;
}

const arr = [0, 3, 1, 1, 0, 2, 3, 5, 2, 4, 5];
const m = 6;
const equal = countKeysEqual(arr, arr.length, m);
const less = countKeysLess(equal, m)
rearrange(arr, less, arr.length, m);

