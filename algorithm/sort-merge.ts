/*
 * @Author: ran
 * @Date: 2022-01-16 17:58:54
 * @LastEditors: ran
 * @LastEditTime: 2022-01-16 22:29:56
 */
// 归并排序
const arr = [1,4,54,5423,65,7,765,897,43,654,432,3,445,32,5,7,2,4,5,654,7,5]

const merge = (left:Array<number>, right:Array<number>):Array<number> => {
    const result:Array<number> = []
    while(left.length > 0 && right.length > 0){
        if(left[0] <= right[0]){
            const item = left.shift()
            if(item !== undefined) result.push(item)
        }else{
            const item = right.shift()
            if(item !== undefined) result.push(item)
        }
    }
    while(left.length){
        const item = left.shift()
        if(item !== undefined) result.push(item)
    }
    while(right.length){
        const item = right.shift()
        if(item !== undefined) result.push(item)
    }
    return result;
}

const mergeSort = (arr:Array<number>):Array<number> => {
    const size = arr.length;
    if(size < 2) return arr;
    const middle = Math.floor(size / 2);
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

console.log(mergeSort(arr))
export default mergeSort