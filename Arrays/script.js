// const arr1=[1,2,3,4];
// const arr2=[1,2,3,4];

// console.log(arr1===arr2);

// let arr3=arr1;

// console.log(arr1===arr3);

// function addition(a, b) {
    
// }

// const sum = (a,b) => {
// console.log("i am sum");
// }

// const sum2 = (a,b) => {
//     console.log("i am sum2");
// }


// addition(sum, sum2);

// const arr = [1,2,3];
// console.log(arr);

// console.log(arr.push(100));
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// arr1 = [1,2,3,4,5,6,7,8,9];

// console.log(arr1.slice(4,7));

// const slicedArray= arr1.slice(3);
// console.log(slicedArray);

// const splicedArray= arr1.splice(4,2);
// console.log(splicedArray);

// console.log(arr1)

// arr3=[62,91,44,46,28];
// console.log(arr3, "array without sorting");

// const sortedArray=arr3.sort();
// console.log(arr3,"sorted array ");

// arr4= [1,20,300,8,100000,6];

// let arrayWithoutLexicographycallySorted=arr4.sort((a,b) => a-b);
// let arrayWithoutLexicographycallyDisendingSorted=arr4.sort((a,b)=>b-a);
// console.log(arrayWithoutLexicographycallySorted,arrayWithoutLexicographycallyDisendingSorted);

// let array =[1,23,4,55,6];

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(i,'for loop');
// }

// for(let item of array){
//     console.log(item,'for of');
// }

// ------------array callBack function---------------------------

// const arr = [5,8,99,100,240,6,93,64];

// for (const iterator of arr) {
// console.log(iterator);
// }

// function yogeshWants(iteam,index,arr){
//     console.log(iteam,index,arr, "yogesh want");
// }

// arr.forEach(yogeshWants);

// const arr2=[1,2,3,4,5];

// function mayankWants(iteam){
//     console.log(iteam,);
// }

// arr2.forEach(mayankWants);

// const arr = [1,2,3,4,6,7,8,9];

// function double(item){
//     return item*2;

// }
// const newArray = [];
// const mappedArray= arr.map( (item,index,array)=>{
//     arr*2;
//     newArray.push(arr);
//     return newArray;
// })
// console.log(newArray,"pushedArray");
// console.log(mappedArray,"mappedArray");

// let arr1 =[82,54,99,32,23];

// const filterdArray = arr1.filter((item) =>{
// if(item%2===0){
//     return true;
// }
// else{
//     return false;
// }
// });
// console.log(arr1,"original Array");
// console.log(filterdArray,"filterd Array");

// let arr =[1,2,3];

// const newFilterdArray=arr.filter((item) =>{
// if(item%2===0){
//     return 
// }else{
//     return 
// }
// });

// const arr =[12,32,434,5546,66,67,7];
// const lastIndex = arr.findLastIndex((itam,index,arr) =>{
//     return itam===660;
// })
// console.log(lastIndex);

// let arr =[1,2,3,4,5,6,7,8,9];
// const answer = arr.reduce((previousValue, currentValue, index, array)=>{
// return previousValue+currentValue;
// },0);
// console.log(answer,'total value');

// let arr = [1,2,3,4,5];

// let arr = ['a','b','c','d'];
// console.log(arr.copyWithin(0,1,2));

const arr1= ['a','b','c'];
const arr2 =['d','e','f'];

const obj = {
    name:"yogesh",
    class:"fsd"
}


console.log(JSON.stringify(obj));

console.log(arr1.toString());
console.log(JSON.stringify(arr2));

