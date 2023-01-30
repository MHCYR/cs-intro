/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  // code goes here
  if (nums.length < 2) return nums;

  const spliceIdx = Math.floor(nums.length / 2);
  const firstPart = nums.slice(0, spliceIdx);
  const secondPart = nums.slice(spliceIdx);

  const firstSorted = mergeSort(firstPart);
  const secondSorted = mergeSort(secondPart);

  return merge(firstSorted, secondSorted);
};

const merge = (firstArr, secondArr) => {
  console.log(firstArr, secondArr);
  const idx = 0;
  const sortedArr = [];
  while (firstArr.length && secondArr.length) {
    if (firstArr[idx] < secondArr[idx]) {
      sortedArr.push(firstArr.shift());
    } else {
      sortedArr.push(secondArr.shift());
    }
  }
  sortedArr.concat(firstArr);
  sortedArr.concat(secondArr);
};
// unit tests
// do not modify the below code
test.skip("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
