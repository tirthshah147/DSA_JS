// [1,4,2,3,5]

// Sandeep told me find 4 in array
// found the 4 so i returned 1
// if not found then i want to return -1


// var arr = [1,2,3,4,5]



// function linearSearch(arr, key){

//     //if number is found return the index
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] === key) {
//             return index
//         }  
//     }

//     return -1

//     //else return -1
// }


// console.log(linearSearch(arr, 2)) //-1


// arr = [1,2,3,4]
// return arr -> [2, 3, 4, 5]



// function addOne(arr){
//     for (let index = 0; index < arr.length; index++) {
//         arr[index] = arr[index] + 1
//     }

//     return arr
// }

// console.log(addOne([1,4,6,10]))

// return [2,5,7,11]



// arr = [1,5,4]
// function sumAddingOne(arr){
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum = sum + 1 + arr[index]
//     }

//     return sum;
// }

// sumAddingOne([1,5,4])
// sum = 0;

// sum = 0 + 1 + 1
// sum = 2;

// sum = 2 + 1 + 5 
// sum = 8

// sum= 8 + 1 +  4
// sum = 13




// str = "What"
// str = "what"
// str = ""

// function vowels(str){

// }


// function multiply(arr){

// }

//Binary search



// function linear(arr, key){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === key){
//             return i
//         }
//     }
// return -1

// }


//binary search requires sorted array for seaching




function binarySearch(listData, value){
    var low = 0;
    var high = listData.length - 1;


    //set mid
    while(low <= high){
        var mid = Math.floor((low + high)/2);
        if (value === listData[mid]) {
            return mid;
        }else if (value > listData[mid]) {
            low = mid + 1
        }else{
            high = mid - 1
        }
    }

    console.log("Element not found");
    return -1;
    
}

console.log(binarySearch([1,2,3,4,6,7,10,15,29,30], 0));





