const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
};

const arr = [4, 22, -6, 10, 5, 12];
console.log(insertionSort(arr));
