// [1,3,5,6]

// [1,3,2,5,6,7,8,9,10]

//step 1 - start from 0 
//step 2 - compare index value to index + 1 value
//step 3 - if index value > index + 1 value, then swap
//step 4 - else do nothing increase the index
//step 5 - repeat with ending = ending - 1


// function bubbleSort(array){
//     for i -> 0 to arrayLength
//         for j -> 0 to (arrayLength - i)
//           if array[j] > array[j+1]
//                 swap(array[j], array[j+1])
// }


// function bubbleSort(array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.length - i; j++) {
//             if (array[j] > array[j+1]) {
//                 var temp = array[j];
//                 array[j] = array[j+1];
//                 array[j+1] = temp;
//             }
            
//         }
        
//     }

//     console.log("Sorting array is",array);
// }

// bubbleSort([1,10,8,4,9])



// [1,3,2]
// temp = 2






// 0

// 0
// to
// 5 - 0

// arraylength = 7
// var array = [1,4,2,3,5,10,6];

// for (let j = 0; j < array.length - 1; j++) {
//     console.log(j);
// }




//Selection sort
// for i = 0 -> arrayLength
//     min = i
//     for j = i + 1 -> arraylength
//         if array[j] < array[min]
//             min = j
    
//     min != i
//         swap(array[i], array[min])


// function selectionSort(array){
//     for (let i = 0; i < array.length; i++) {
//         let min = i;
//         for (let j = i+1; j < array.length; j++) {
//             if (array[j] < array[min]) {
//                 min = j
//             }
            
//         }
    
//         if (min != i) {
//             let temp = array[i];
//             array[i] = array[min];
//             array[min] = temp
//         }
        
//     }
// }



// i = 0
// [0,5,2,4,1]

// i = 0;
// 1 2 3 4

// i = 1
// 2 3 4

// i = 2
// 3 4

// i = 3
// 4

// i = 4

//insertion sort

