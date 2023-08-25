//  sum of nth natural number
let sum = 0
function sumofNaturalNumber(num){
    for(let i=0;i<num;i++){
         sum+=i
    }
    return sum
}

console.log(sumofNaturalNumber(10))

// sum of digit number to learn while loop

function sumOfdigit(num){
    let sum = 0 
    while(num>0){
        sum += num%10
        num = Math.floor(num/10)
     }
     return sum
}

console.log(sumOfdigit(1287))

// count the number of digits

function countDigits(num){
  let count = 0
  do{
    count+=1
    num = Math.floor(num/10)
  }while(num>0)
   return count
}

console.log(countDigits(123456789))