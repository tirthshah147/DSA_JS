//factorial
// 1 * 2 * 3 * 4 * 5

// function fact(n){
//     var answer = 1;
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index]; 
//     }
//     return answer
// }


// function fact(n){
//     var answer = 1;
//     for(let i=n;i>=1;i--){
//       answer = answer * i;
//     }
//     console.log(answer)
// }

// fact(5);


// function fact2(n){
    
//     //exit condition
//     if (n === 1 || n === 0) {
//         return 1
//     }else{
//         if (n < 0) {
//             console.log("Bhai tu maar khaega!")
//             return;
//         }
//         return n * fact2(n-1)
//     }
//     // Recursive call to the same function
    
// }

// console.log(fact2(0));

// fact2(0) //0

// fact2(n) =  n * fact2(n-1)
// 5

// 5 * 4 * 3 * 2 * 1


   
    


// 120
//     5 * 24
//         4 * 6
//             3 * 2
//                 2 * 1
//                     // 1 * fact2(0) //return 1



     

        




// function sing(){
//     console.log('I am siinging');
// }

// function dance(){
//     console.log('I am dancing');
// }

// function fun(){
//     sing();
//     console.log('I am doing fun');
//     dance();
// }

// fun();



//Global context


// function showing(){
//     for (let index = 0; index < 5; index++) {
//         console.log("I am hero number 1");
        
//     }
// }

// let num = 0;
// function showing2(){
//     console.log(num);
//     console.log("I am hero number 1");
//     num ++;

//     //EXIT CONDITION
//     if (num === 5) {
//         return;
//     }
    
//     //function calling itself
//     showing2();
// }

// showing2();




         
              
                    

    
    //I am hero number 1
    // showing2();
    //     showing2();
    //             showing2();
    //                 showing2();
    //                      showing2();

// showing2();
// showing2();
// showing2();
//Global Context


// function showing(){
//     //exit condition
//     //fucntion calling same function //action
// }

// showing();

// function multiply(arr,n){
//     var product = 1;
//     for (let index = 0; index < n; index++) {
//         product = product * arr[index];
//     }
//     return product;
// }

// multiply([1,2,3,4,5,7],5)



// function multiply2(arr,n){
//     if (n <= 0) {
//         return 1
//     }else{
//         return arr[n - 1] * multiply2(arr, n-1)
//     }
// }

// arr = []
// n = 0




// arr = [1,2,3,4,5]
// n = 5

// multiply2(arr,n)

// arr[4] * multiply2(arr, 4)
//          arr[3] * multiply2(arr, 3)
//                   arr[2] * multiply2(arr, 2)
//                            arr[1] * multiply2(arr, 1)
//                                     arr[0] * multiply2(arr, 0) //n = 0
               

// <3 hrs
//sorry u r doing somrthing wrong

// minimum 6 hrs


// Solve React theory questions & make project (to get familiar with all the topics mentioned inside QnA pdf)
// Solve JS theory (to get familiar with all the topics mentioned inside QnA pdf)
// DSA 1 Lectures revise
// Mocks going on
// Solve DSA 1 assignment
// Solve React JS Assignment

// JS Medium not cleared (till this weekend)
// React Project - 2 hrs / 30 mins
// Solve JS theory (to get familiar with all the topics mentioned inside QnA pdf) - 3 hrs / 2 hrs
// DSA Revision / DSA Assingment - 1 hr / 30 mins



// JS Medium clear but React Easy not cleared
// Solve React theory questions (to get familiar with all the topics mentioned inside QnA pdf) 3 hrs (2 hrs)
// Make React Projects 2 hrs (30 mins)
// Solve React JS Assignment
// DSA Revision / DSA Assingment 1 hr (30 mins)


//React Easy & JS Medium Cleared but React Medium not cleared
// Solve React theory questions (to get familiar with all the topics mentioned inside QnA pdf) 2 hrs 
// Make React Projects 3 hrs
// Solve React JS Assignment
// DSA Revision / DSA Assingment 1hr


//React Medium & JS Medium cleared
// Solve React theory questions (to get familiar with all the topics mentioned inside QnA pdf) 1 hrs
// JS Revision 0.5 hr
// Make React Projects 3.5 hrs
// DSA Revision / DSA Assingment 1hr
// P1. JS Hard
// P2. React Hard
// P3. JS Challenge
// P4. React Challenge



// arr = [1,2,3,4,5]
// n = 3

// answer shud be : 3 * 2 * 1 = 6 //solve without recursion

//db
// const dogBreed = {
//     alberian : ['kaka','baba'],
//     pompom : {
//         popo : ['kom','bom','mom'],
//         chika : ['bika','mika','vaka'],
//         itsu : {
//             shitzu : ['mina','tina','bina'],
//             bitsu : ['papa','mama']
//         }
//     },
//     don : {
//         pizza : ['cheese','butter','garlic'],
//         burger : ['pepsi','soda','alcohol'],
//     },
// }

// Pseudo code
// get all the keys of this object dogBreed
// Loop on all the keys and then check value of that key is array or not
// if it's an array then push array into final array

// if it's not an array then repeat the process

// const getAllSubBreeds = (breedObj, arr = []) => {
//     Object.keys(breedObj).forEach(key => {
//         if (Array.isArray(breedObj[key])) {
//             return breedObj[key].forEach(subbreed => {
//                 arr.push(subbreed)
//             })
//         }

//         getAllSubBreeds(breedObj[key], arr)

//     });

//     return arr;
// }

// breedObj[key] is not an array it will be the object

// f(n)
// Trick to hack recursion problems
//Step 1. Get your function work for f(1) //base consition or exit condition
//step 2. Assume f(n-1) is working
//Step 3. Implement recursive function thinking how u can solve f(n) using f(n-1)



// function sum(arr,n){
//    if (n <= 0) {
//        return 1
//    }else{
//         return arr[n-1] + sum(arr, n-1)
//    }

// }


// [1,2,3,4,5]
// 3

// 1 + 2 + 3

// sum(arr,3)

// [1,2,3,4,5]
// n = 4

//sum(arr, n-1)






























