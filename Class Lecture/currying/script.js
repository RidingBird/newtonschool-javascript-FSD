// let previousVal = 0;

// function sum(a){
//   previousVal +=a;
//   return previousVal
// }

// // const sum1 = sum(1);
// // const sum2= sum(2);
// // const sum3 = sum(3);

// console.log(sum(1));
// console.log(sum(2));
// console.log(sum(3));


function sum (a, b){
    const innerSum = a+b;
    return function(a, b){
        innerSum +=a+b;
        return function(a){
            return innerSum+=a;
        }
    }
}

console.log(sum(1,2)(3,4)(5));
