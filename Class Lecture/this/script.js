// var obj = {
//     name: "yogesh",

//     func: function(){
//         console.log(`hello guys my name is ${this.name}`)
//     }
// }
// obj.func();
// const funcCopy = obj.func;
// funcCopy();


// let obj2={
// name: "yogesh",
// func: function(){
//     console.log(`hello with obj2 and ${this.rollnumber}`)
// }
// }

// let obj1={
//     name: "mayank",
//     rollnumber: 12,
//     obj2: obj2
// }

// obj1.obj2.func();

// const obj ={
//     name: "yogesh",
//     rollNumber: 47,

//     func: function(a,b){
//         console.log(`hello..${this.name} and rollNoo..${this.rollNumber} +${a}`);

//     }

// }

// const obj2={
//     name: "mayank",
//     rollNumber: 41,
//     obj: obj,
// }

// obj.func.call(obj2,100,400);


// function googaleouter(fun){
//     console.log("inside the google");
//     fun();
//     console.log("end of google function ")
// }

// const funcCopy = obj.func;

// googaleouter(funcCopy);

// const funcCopy2 = obj.func.bind(obj,1,2);
// googaleouter(funcCopy2);

// function car (name, speed, model){

//     this.name = name;
//     this.speed = speed;
//     this.model = model;
// }

// const ferary = new car ("ferary ciron", 300,v8);
// function printThis(params){
//     console.log(this, params);
// }

// let obj = {
//     a: 10,
//     b: 90,
//     c: printThis,
//     d: function(params){
//         console.log(this); 
//         printThis(100);
//         let copy = this.c;
//         copy();

//         this.c();

//         console.log(this.c === printThis)
//     }
// }

// obj.d();

// let obj ={
//     name: "yogesh",

//    func: function (){
//      const inner =()=>{
//         console.log(`hello ${this.name}`)
//      }
//      console.log(`inner function ${this.name}`);
//        inner();
//     }
// }

// obj.func();


