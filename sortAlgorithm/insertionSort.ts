/*
 * @Author: ran
 * @Date: 2022-01-16 14:43:53
 * @LastEditors: ran
 * @LastEditTime: 2022-01-16 15:03:36
 */
const arr = [1,4,54,5423,65,7,765,897,43,654,432,3,445,32,5,7,2,4,5,654,7,5]

const insertionSort = (arr:Array<number>) => {
    const len = arr.length
    for(let i = 1; i < len; i++){
        let preIndex = i - 1
        let current = arr[i]
        while(preIndex >= 0 && arr[preIndex] > current){
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }
        arr[preIndex+1] = current
    }
    return arr
}
const res = insertionSort(arr)
export default insertionSort
console.log(res)