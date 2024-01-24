// let names = "yogesh gupta";
// let num = 19;
// let num = this is a veriable declaretion
// num = 19 this is a veriable assignment

// console.log(names, num);

//NOTE:
// JS is not a strictly typed language like java.
// const num = 101;
// const commentry = `hey yogesh your score is ${num}`;

// console.log(commentry);

// -----------------------------data type :--------------------------------------------------

// 1.- Number;--------

// let num =1;
// let marks = 12.5;

// console.log(marks);


// 2.- BigInt :-------

// let bigInt = 123456789123456789132465789;

// // 3. - String :-------

// var name = "yogesh gupta";
// let school = "saraswati hr. sec. school";
// let char = "c";
// const score= `i have scord ${bigInt}`;

// // Note:- we dont have charecture like JAVA

// // 4. boolean :----------

// let isNameYogesh= true;
// let isSumHot = false;

// // 5.  Null :-----------

// let age = null;

// // 6. undefine :---------

// let person;

// console.log(person,"person debug");

// -----------------Intersection-------------------

// 1. console.log 


// 2. alerts
// alert("hello how are you");

// -----------------Conversion (Conversion)-----------------

// // rule -1;-

// // string + Number(int)=string;
// // string + Boolean =string
// // Etc.. 
// // string + anything is string;

// let findString= 1+"yogesh";
// var findString2= true+"yogesh";
// console.log(findString,findString2);

// // --------------typeof Keyboard--------------------
// console.log(typeof findString2);

// school=null;
// console.log(typeof school); // it should be null BUT IN JS SO Its answer is "object"

// //--------------typecasting-------------------

// let convert = String(1);
// console.log(typeof convert);

// // --------------number conversion-----------

// 1. string-number to number:----

// const marks ="19";
// console.log(+marks);
// console.log(Number(marks));//always use this method

let num ="19999999";
console.log(typeof Number(num));
console.log("18"*"9");
console.log("18"-"9");
console.log("18"/"0");
console.log("18"%"9");
console.log("18"+"9"); //because string + string = string
console.log(typeof (Number("1")+Number("4")));

// ================boolean conversion===================

console.log(Boolean(100));
console.log(Boolean(10));
console.log(Boolean(66));
console.log(Boolean(0));
//Boolean(any number ecxept 0) give true

//string  -->  boolean

Boolean("");//false
Boolean("gfghdd165654");//true;

