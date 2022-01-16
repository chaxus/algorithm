/*
 * @Author: ran
 * @Date: 2022-01-16 22:58:24
 * @LastEditors: ran
 * @LastEditTime: 2022-01-16 23:42:31
 */
import search from '../algorithm/search-binary.ts'

describe("Binary search", () => {
  it("Finds the target in the array, returning the index if the target value exists, or -1 otherwise", () => {
    const nums = [-1,0,3,5,9,12]
    const target = 9
    const output = 4
    expect(search(nums, target)).toEqual(output);
  });
});
