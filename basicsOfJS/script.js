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
// // console.log(+marks);
// // console.log(Number(marks));//always use this method

// let num ="19999999";
// console.log(typeof Number(num));
// console.log("18"*"9");
// console.log("18"-"9");
// console.log("18"/"0");
// console.log("18"%"9");
// console.log("18"+"9"); //because string + string = string
// console.log(typeof (Number("1")+Number("4")));

// // ================boolean conversion===================

// console.log(Boolean(100));
// console.log(Boolean(10));
// console.log(Boolean(66));
// console.log(Boolean(0));
// //Boolean(any number ecxept 0) give true

// //string  -->  boolean

// // Boolean("");//false
// // Boolean("gfghdd165654");//true;

// let person = {
//     name: "yogesh gupta",
//     class: 12,
//     "hello world":"hey yogesh"
// }


// // person = null;

// // ====GET

// console.log(person);
// console.log(person["class"]);
// console.log(person.class);


// // ==== edit

// person.class=8;
// person["hello world"]="jai shree Ram"

// console.log(person.class, "edited class");
// console.log(person["hello world"], "edited hello world");

// // // =======delete

// // delete person.class;
// // console.log(person, "person after delete");

// const person2 = person;
// person=null;

// console.log(person, "person");
// console.log(person2, "person2");

// // -----------Array-----------------------------

// let arr =[1, 2, 3, 4, 5];
// console.log(arr);

// let arr1 =[1, "yogesh", 3, "mayank", true];
// console.log(arr1);

// console.log(arr[1], arr1[1], arr1[arr.length-1]);
// console.log(arr.length);

// // arr=null;
// // console.log(arr);

// let newlength=arr1.push("hello");

// console.log(arr1);


// let lastElement = arr1.pop();
// console.log(lastElement);
// console.log(arr1);