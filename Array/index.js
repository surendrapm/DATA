// methods to create an array 

const arr = [1,2,3,"Hello",{name:"surendra"},[1,2,3]]

console.log(arr)
const arr2  = new Array()

// how to access first and last element of an array

const firstElement = arr[0]
const arraylength = arr.length;
const lastElement = arr[arraylength-1]
console.log(firstElement,lastElement)

// How to add element to the end of an array

arr.push("pushedElement")
console.log(arr)

// How to remove the last element from an array

arr.pop("pushedElement")
console.log(arr)

//How to add element in first index in array 
arr.unshift(0)  //T.C O(N)
console.log(arr)

//How to remove first element from array
arr.shift(0)
console.log(arr)

//Methods to iterate the array in javascript
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

for(x of arr){
    console.log(x)
}

arr.forEach((x,i)=>{
  console.log(i,x)
})

// Question 1: How do you check if an element exists in an array

const findElement = (arr,target)=>{
      for(x of arr){
         if(JSON.stringify(x) === JSON.stringify(target)){
            return true
         }
      }
      return false
}

const ele = {name:"surendra"}
console.log(findElement(arr,ele))
console.log(arr.includes(1))

//question 2 : find index of target element index in given array

const FindIndex = (arr,target)=>{
  for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
             return i
        }
  }
}


console.log(FindIndex(arr,"Hello"))

//How to delete, add and Update element from specific index

console.log(arr)
//for remove from seletcted index of an array
arr.splice(1,3)
console.log(arr)

//for add from selected index of an array 
arr.splice(1,0,2,3,4,5,6)
console.log(arr)

//for update from selected index of an array 
arr.splice(1,3,7,8,9)
console.log(arr)

//slice Vs splice
 
const subArr = arr.slice(1,4)//(start,end)
// diffrence between slice and splice is splice return modified or 
//updated original array
//but in slice it returns new sub  array
console.log(subArr,arr)


//Copy of array in JS

//shallow copy example
const arrA = arr
arrA.splice(1,2)
console.log(arr)
console.log(arrA)

//o/p
//both original and copied array get update due pointing towards same memory
// [ 1, 9, 5, 6, { name: 'surendra' }, [ 1, 2, 3 ] ]
// [ 1, 9, 5, 6, { name: 'surendra' }, [ 1, 2, 3 ] ]

//Deep copy
//1st way
const arrB = [...arr]
arrB.splice(1,2)
console.log(arr)
console.log(arrB)

//2nd way
const arrC = Array.from(arr)
arrC.splice(3,2)
console.log(arr)
console.log(arrC)


//3rd way
const arrD = arr.concat()
arrD.splice(3,2)
console.log(arr)
console.log(arrD)

//How to add two arrays
//way 1
const newArr = [...arr,...arrD]
console.log(newArr)

//Way 2
const newArr2 = arr.concat(arrC)
console.log(newArr2)

// Question 3 : How can check you give two arrays are equal are not

//way 1
// function checkIsEqualArrays(arr1,arr2){
//    if (arr1.length !== arr2.length){
//         return false
//    }
//    for(let i=0;i<arr1.length; i++){
//       if(arr1[i] !== arr2[i]){
//          return false
//       }
//    }
//    return true

   
// }

//way 2(Js optimal)
function checkIsEqualArrays(arr1,arr2){
   return arr1.length === arr2.length &&  arr1.every((ele,i)=>arr1[i]=== arr2[i])
}

console.log(checkIsEqualArrays([1,2,3],[1,2,4]))


//sorting
//question 4: How to sort an array in ascending and desending order ?

let z = [-5,-4,-9,0,10,6,3]

//assending order
z.sort((a,b)=>a-b)
console.log(z)

//desending order
let y = [10,9,8,7,6,5,20]
y.sort((a,b)=>b-a)
console.log(y)

// Question 4: How to reverse an array?
y.reverse()
console.log(y) 

//map , filter & reduce

//map return new array interating old ones by adding extra logic for each 
//using element of old array
const MapArr = [2,3,4,5,6]
const newMapArr =  MapArr.map((ele,i)=>ele*ele)
console.log(newMapArr)

//Filter

//Filter return new array itertaing over old array to filter by
//applaying extra condtional logic it filters the item and return

const FilterArr = [-1,-2,-3,0,1,2,3,4,5,6]

const storeFiltrered = FilterArr.filter((item)=>item>0)

console.log(storeFiltrered)

//reduce
//reduce function iterates and stores or accumulate iterated
//value based of applied logic and return accumlated value
//real time example 

// E-commerce: When calculating the total price of items in a shopping 
// cart or applying discounts and taxes, reduce() 
// can be used to accumulate the final amount.
let ReduceArr = [1,2,3,4]
let accumulatedAns = ReduceArr.reduce((acc,ele)=>acc+ele)
console.log(accumulatedAns)

//Flat 
// it makes nested sub arrays and empty arrays in plane or linear array

const unflatArr = [10,20,30,40, ,[50,60],[70,80,90]]
const flatArr = unflatArr.flat()
console.log(flatArr)