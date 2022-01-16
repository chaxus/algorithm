/*
 * @Author: ran
 * @Date: 2022-01-16 22:25:37
 * @LastEditors: ran
 * @LastEditTime: 2022-01-17 00:04:08
 */
// 二分查找
const nums = [-1,0,3,5,9,12]
const target = 9
const search = (nums:Array<number>, target:number) => {
    const size = nums.length
    let l = size - 1, r = 0; 
    while(l >= r){
        const mid = Math.floor((l - r) / 2) + r
        if(nums[mid] === target) return mid
        if(nums[mid] > target){
            l = mid - 1
        }else{
            r = mid + 1
        }
    }
    return -1
};

search(nums,target)
export default search