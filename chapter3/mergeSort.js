// 下面这种写法看起来好像很繁琐，但是却是归并排序的最原始实现
// 这个排序的实现是让我觉得我之前看的很多实现都不"精确"的原因

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


// 示例：
// const arr = [4, 1, 2, 5, 3, 7, 6, 8];
// mergeSort(arr, 0, 7);
// console.log(arr);

// 上面这种方式是书里给出的正统的写法，相信这也是原始归并排序的实现方式
// 这里值得注意的是：
// 1. merge 的过程是通过下标来进行的，并不是将原数组切分成两个新数组
// 2. merge 的时候通过添加哨兵来防止越界
// 之所以提出这两点，是因为你去搜索 javascript 的实现的时候，无论是百度还是google 的搜索结果
// 大部分的写法都没有展示这两点
// 因此，尽管排序的结果没有问题，但是你却很容易错过对这两个细节的认识和理解
// js 的大部分的实现都和 https://medium.com/analytics-vidhya/implement-merge-sort-algorithm-in-javascript-7402b7271887
// 文章中的实现相同
// 如下：
/*
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];
  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    }else {
      results.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length){
    results.push(arr1[i]);
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
  return results
}

function mergeSort(arr){
  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

这里面的实现通过 slice 将原数组进行了切割，并且通过 push 的方式将元素放入新数组，
而且没有用到哨兵，是通过判断指针是否结束来将最后的元素放入新数组，
这就是为什么我觉得这本书非常好的地方，他是真正还原了算法本来的面目，而刨除了语言的细节
 * */
