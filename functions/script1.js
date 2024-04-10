// // // // // function mult(a,b){

// // // // //    const ans=a*b;
// // // // //   return ans;
// // // // // }

// // // // // console.log(mult(2,2), "console mult");

// // // // // function sum(a,b){
// // // // //    return a+b;
// // // // // }

// // // // // const answerSum=sum(19,30);
// // // // // console.log(answerSum,"ansSum debug");

// // // // // let a=function(a,b){
// // // // //     return a+b;
// // // // // }

// // // // // function sum(a, b) {
// // // // //   return a + b;
// // // // // }
// // // // // console.log(sum(1));


// // // // // function student(name, classes, quality, stream, ...otherInformations) {
// // // // // console.log(otherInformations);
// // // // //   console.log(name, classes, quality,stream);
// // // // // }

// // // // // student("yogesh","12","good","PCM","i have laptop","i can drive","i do coding","i have gun");

// // // // let Gs={
// // // //   marks : 90,
// // // //   valueParsent :"90%",
// // // // }
// // // // let GK={
// // // //    marks:80,
// // // //    valueParsent: "80%",
// // // // }

// // // // function sum(sub1, sub2){
   
// // // //    sub1.marks =60;
// // // //    sub2.marks =50;
    
// // // //    const marks1 = sub1.marks;
// // // //    const marks2 = sub2.marks;

// // // //    return marks1 + marks2;
// // // // }
// // // // console.log(sum(Gs, GK));

// // // // spread opreater take all thhe values inside the object and spread

// // // const arr=[1,2,3,4,5,6,7,8,9]
// // // const copyArr =[...arr]

// // // console.log(arr);
// // // console.log(copyArr);
// // // console.log(arr===copyArr);

// // const math ={
// //     marks: 100,
// //     grade: "A+",
// // }

// // const mathCopy ={
// //     ...math,
// // }

// // console.log(math===mathCopy);


// // const copymath = JSON.parse(JSON.stringify(math));
// //  console.log(math);
// //  console.log(copymath);

// //  console.log(math===copymath);
 
// // const sumFunctionExpressionArreow = (a,b) => {
// //     returtn a + b;
// // }
// // console.log(sumFunctionExpressionArreow(1,2));

// // // Difference 1 Argument

// // function abc(a,b){
// //     const args = arguments;

// //     console.log(arguments, "argument debug");
// //     console.log(a, arguments[0]);
// //     console.log(a, arguments[1]);
// // }

// // abc(1000,-1);

// // const abcArrow = (a,b) => {
// //     const arg = arguments;
// // console.log(a,b);
// // console.log(arguments);
// // }
// // abcArrow(1,1);

// // const param1 = {
// //     marks: 1,
// // }

// // const param2 ={
// //     marks: 2,
// // }

// // function sum(obj1, obj2){
// //     console.log(obj1);
// //     console.log(obj2);
// // return obj1.marks+obj2.marks;
// // }

// // console.log(sum(param1,param2));

// // function outer(){
// //     const inner = function(){
// //         console.log("hey i am from inner functio");
// //     }
// //     return inner;
// // }
// // console.log(outer);

// function add(x,y){

//     return x + y;
// } 

// function sub(x,y){
//     return x - y;
// }
// function mult(x,y){
//     return x * y;
// }

// function loggingFunction (fn, x, y){
//     console.log(`%c ${x}, ${y} DEBUG`,"color:red");
//     return fn(x,y);
// }

// const addAnswer = loggingFunction(add,3,4);
// console.log(addAnswer);
// const subAnswer = loggingFunction(sub,3,4);
// console.log(subAnswer);
// const multAnswer = loggingFunction(mult,3,4);
// console.log(multAnswer);

// function greeting(fn){
//     fn();
// }

// const ridingHelloCallBackFunction = function(){
//     console.log("Hello from RidingBird");
// }

// const RidingBird = (() =>{
//     console.log("Hello from RidingBird");
// })
// console.log();

//---------DEFALT PARAMETER------------------

//if in argument we do not provide the value as parameter 
//so we can have a defalt value

function sum(a=0,b=1){
    return a+b;
}
const result = sum(10);

//if i give some parameter to element then it will take our value
//or this way we can have a defalt value





