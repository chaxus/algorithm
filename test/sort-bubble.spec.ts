/*
 * @Author: ran
 * @Date: 2022-01-17 00:18:59
 * @LastEditors: ran
 * @LastEditTime: 2022-01-17 00:20:12
 */
import bubbleSort from "../algorithm/sort-bubble";

describe("Bubble sort", () => {
  it("Bubble sort", () => {
    const arr = [
      1, 4, 54, 5423, 65, 7, 765, 897, 43, 654, 432, 3, 445, 32, 5, 7, 2, 4, 5,
      654, 7, 5,
    ];
    const output = [
      1, 2, 3, 4, 4, 5, 5, 5, 7, 7, 7, 32, 43, 54, 65, 432, 445, 654, 654, 765,
      897, 5423,
    ];
    expect(bubbleSort(arr)).toEqual(output);
  });
});
