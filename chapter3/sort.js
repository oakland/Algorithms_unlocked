function selectionSort(arr) {
  function swap(arr, a, b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  for(let i = 0; i < arr.length - 1; i++) { // 注意这里 i 的精确边界是 i < arr.length - 1，而不是平时的 arr.length
    let smallest = i;
    for(let j = i + 1; j < arr.length; j++) { // 这里的 j 跳出的条件是 j < arr.length
      if(arr[j] < arr[smallest]) {
        smallest = j;
      }
    }
    swap(arr, i, smallest);
  }
  return arr;
}

function insertionSort(arr) {
  for(let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
