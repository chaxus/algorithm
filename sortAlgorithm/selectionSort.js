const arr = [1,4,54,5423,65,7,765,897,43,654,432,3,445,32,5,7,2,4,5,654,7,5]
const selectionSort = (arr) => {
    const len = arr.length
    for(let i = 0; i < len; i++){
        let min = i
        for(let j = i+1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let a = arr[min]
        arr[min] = arr[i]
        arr[i] = a
    }
}
selectionSort(arr)
console.log(arr)