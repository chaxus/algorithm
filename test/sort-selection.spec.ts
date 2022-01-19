/*
 * @Author: ran
 * @Date: 2022-01-17 21:17:25
 * @LastEditors: ran
 * @LastEditTime: 2022-01-17 21:17:26
 */
import selectionSort from "../algorithm/sort-merge";

describe("selection sort", () => {
  it("selection sort", () => {
    const arr = [
      1, 4, 54, 5423, 65, 7, 765, 897, 43, 654, 432, 3, 445, 32, 5, 7, 2, 4, 5,
      654, 7, 5,
    ];
    const output = [
      1, 2, 3, 4, 4, 5, 5, 5, 7, 7, 7, 32, 43, 54, 65, 432, 445, 654, 654, 765,
      897, 5423,
    ];
    expect(selectionSort(arr)).toEqual(output);
  });
});