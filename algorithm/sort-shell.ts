/*
 * @Author: ran
 * @Date: 2022-01-16 14:43:53
 * @LastEditors: ran
 * @LastEditTime: 2022-01-17 22:49:26
 */
// 希尔排序
// 插入排序的改进版，也称为缩小增量排序
const arr = [1,4,54,5423,65,7,765,897,43,654,432,3,445,32,5,7,2,4,5,654,7,5]
const shellSort = (arr:Array<number>) => {
    const len = arr.length;
    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
        for (let i = gap; i < len; i++) {
            let j = i;
            const current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                 arr[j] = arr[j - gap];
                 j = j - gap;
            }
            arr[j] = current;
        }
    }
    return arr;
}
export default shellSort



