//JS uses merge sort
// [1,4,2,5,10,8,3]
// [1,4,2] [5,10,8,3]
// [1] [4,2]   [5,10] [8,3] 
// [1] [4] [2] [5] [10] [8] [3]


// [1,2,3,4,5,8,10]
// [1,2,4]     [3,5,8,10]
// [1] [2,4]   [5,10]   [3,8]
// [1] [4] [2] [5] [10] [8] [3]


//step 1. find mid
//let's split our arrays into 2



//exit condition -> f(0)
// if (array.length <= 1) {
//     return array
// }

// [5,3,2]
// [5] [3,2]
// [5] [3] [2]

// [2,3,5]    //f([5],[2,3])
// [5] [2,3] //f(n-1)
// [5] [3] [2]
//assume f(n-1) is done
//how u can make f(n) work using f(n-1)

const merge = (leftArr, rightArr) => {
    const outputArr = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length){
       const leftElement = leftArr[leftIndex];
       const rightElement = rightArr[rightIndex];

       if (leftElement < rightElement) {
           outputArr.push(leftElement);
           leftIndex++
       }else{
           outputArr.push(rightElement);
           rightIndex++
       }

    }

    return [...outputArr, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]

    

}



const mergeSort = (array) => {
    if (array.length <= 1) {
        return array
    }

    const midIndex = Math.floor(array.length/2);
    const leftArr = array.slice(0,midIndex);
    const rightArr = array.slice(midIndex);

    return merge(mergeSort(leftArr),mergeSort(rightArr))

}


console.log(mergeSort([3,7,1,9]))

// [3,1,7,4,10,8]
// [3,1,7] [4,10,8]
// [3] [1,7]
// [3] [1]  [7]


// outputArr = [1,2,3,5,9]

// [1,5,9]     [2,3] 

// leftIndex = 0;
// rightIndex = 1;

// outputArr = [1,2]
// [1,2] [3,4,6]

// leftIndex = 2;
// rightIndex = 0;




// [1,2,3,4,6]



// ...[1,2,3] -> 1,2,3







