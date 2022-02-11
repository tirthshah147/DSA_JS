// function countNaturalSum(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i;
//     }

//     // console.log(sum);
//     return sum;
// }

// let time1, time2;

// time1 = Date.now();
// countNaturalSum(10000000000);
// time2 = Date.now();
// console.log(`${(time2 - time1)/1000} for V1`)


// function countNaturalSumV2(n){

//     let sum = (n * (n+1))/2;
//     // console.log(sum);
//     return sum;

// }
// time1 = Date.now();
// countNaturalSumV2(10000000000);
// time2 = Date.now();
// console.log(`${(time2 - time1)/1000} for V2`)

// Big O Notation = Time Complexity
// Better -> faster time to execute & alsp its' using lesser space





// function countNaturalSum(n){
//     let sum = 0; //1
//     let sum2 = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i;  //5
//     }
//     // console.log(sum);
//     return sum;
// }

// n = 5
// n operations
// Time Complexity = O(n)



// function countNaturalSumV2(n){

//     let sum = (n * (n+1))/2;
//     // console.log(sum);
//     return sum;

// }

// n = 1000000, 1000000000000000000000

// 3 operations
// Time complexity = O(3) -> O(1)



// function killTirth(n){
//     for (let index = 0; index < n; index++) {
//         console.log("Tirth is killed!");
//     }

//     for (let index = 0; index < n; index++) {
//         console.log("Tirth is murdered!");
//     }
// }

// killTirth(5);
// Time complexity = O(2n)



// function killTirth(n){
//     for (let index = 0; index < 4; index++) {
//         console.log("Tirth is killed!");
//     }
// }

// killTirth(5);
// Time complexity = O(4)


// function killTirth(n){
//     for (let index = 0; index < n; index++) {
//         for (let index2 = 0; index2 < n; index2++) {
//             console.log("Tirth is killed!");   
//         }
//     }
// }

// killTirth(5);
// Time complexity = O(n^2)

// let arr1 = [1,2,3,4,5] //5
// let arr2 = [1,2,3,4,5,6,7,8,9,10] //10



// function killTirth(arr1,arr2){
//     for (let index = 0; index < arr1.length; index++) {
//         for (let index2 = 0; index2 < arr2.length; index2++) {
//             console.log("Tirth is killed!");   
//         }
//     }
// }

// killTirth(arr1,arr2); //50
// Time complexity = O(n * m) 


//Rules considering dependency on input

// 1. Iterating thru a loop -> O(n)
// 2. iterating over a same loop/collection with nested loop/collection -> O(n^2)
// 3. Iterating over a different loop/collection with nested loop/collection -> O(n * m)

//Simplify calculation of calculating Big O Notation
// O(1000) -> O(1)
// O(2n) -> O(n)
// O(n/2) -> O(n)
// O(2n^2) -> O(n^2)
// O(n + 1) -> O(n)
// O(n^2 + n + 1) -> O(n^2)
// O(1000n + 1) -> O(n)
// O(1000n^2 + 250000000n + 2600000000000000) -> O(n^2)




// function killTirth(n){
//     for (let index = 0; index < Math.max(3,n); index++) {
//         console.log("Tirth is killed!"); 
//     }
// }

// Time complexity -> O(n)


// var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
//problem : find out whether 10 exists in my arr1 or not

// for (let index = 0; index < arr1.length; index++) {
//     if (arr1[index] === 10) {
//         return true
//     }
// }

//Time complexity is O(n)
//Time complexity O(logn)

//search is for 10   //4 operations
// is the number 5 is 10? no
// is the number 8 is 10? no
// is the number 9 is 10? no
// is the number 10 is 10? yes


// //search is for 20
// is the number 10 is 20? no
// is the number 15 is 20? no
// is the number 18 is 20? no
// is the number 18 is 20? no
// is the number 19 is 20? no



//Space complexity
// var x = [1,2,3,4,5]

// arrays, objects O(n)

// var str = "Tirth";
// O(n)


// function reversingStr(str){
//     //your code here!
    // let reverseStr = str.split('').reverse().join('');
    // return reverseStr;
    
//     let reverseStr = '';
//     for (let index = str.length - 1; index >= 0; index--) {
//         reverseStr = reverseStr + str[index]
//     }

//     return reverseStr;

// }


// 'mom' -> 'mom'


// function isPalindrome(str){
//     //reverse str
//     // let reverseStr = str.split('').reverse().join('');
//     // //compare with original
//     // if (reverseStr === str) {
//     //     return true
//     // }

//     // return false

//     return str.split('').reverse().join('') === str;
// }

//reversing an integer 
//123456 -> 654321
//-123456 -> -654321

// function reverseInt(n){
//     let reversedint = parseInt(n.toString().split('').reverse().join(''));
//     if (n < 0) {
//         reversedint = reversedint * -1;
//     }

//     return reversedint;
// }





