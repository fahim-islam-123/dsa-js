const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

const arr = [-6, 4, 5, 10, 12, 22]; // array must be sorted for binary search
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 14));
