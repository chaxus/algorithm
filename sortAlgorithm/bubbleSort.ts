/*
 * @Author: ran
 * @Date: 2022-01-16 14:43:53
 * @LastEditors: ran
 * @LastEditTime: 2022-01-16 17:55:31
 */
const arr = [
  1, 4, 54, 5423, 65, 7, 765, 897, 43, 654, 432, 3, 445, 32, 5, 7, 2, 4, 5, 654,
  7, 5,
];
const bubbleSort = (arr: Array<number>) => {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (arr[j] > arr[j + 1]) {
        let a = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = a;
      }
    }
  }
};
export default bubbleSort;
bubbleSort(arr);
console.log(arr);
