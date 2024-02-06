const arr1 = [30, 40,50,65,70];
const arr2 = [6,15,19,27,33];


function mergeArr(arr1,arr2){
    const newSortedArr = [...arr1, ...arr2].sort((a,b)=>a-b);
    return newSortedArr;
}

const output = mergeArr(arr1, arr2);
console.log('output', output);
