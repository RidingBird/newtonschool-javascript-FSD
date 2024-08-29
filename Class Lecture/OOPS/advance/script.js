// class student{
//     name;
//     standerd;

//     constructor(name, standerd){
//         this.name = name;
//         this.standerd = standerd;
// }
//         markAttendece() {
//             console.log(`hey there ${this.name} is present: normal classroom`)
//         }

// }

// class SportCapton extends student{
//     favTool; // tool could be any thing

//    constructor(name,standerd,favTool){
//       super(name, standerd);

//       this.favTool = favTool;
//    }
//    markAttendece(){
//     console.log(`sports capton ${this.name} is present for practice`)
//    }

//    routine(){
//        console.log("practice cricket hole day");
//    }
// }

// const student1 = new student("akash", 4);
// const student2 = new student("ankush", 10);

// const virat = new SportCapton("virat",11, "bat");

// function StudentFunc(name, standerd) {
//   this.name = name;
//   this.standerd = standerd;
// }

// StudentFunc.prototype.markAttendece = function () {
//   console.log(`hey there ${this.name} is present in the class`);
// };

// const mayankFunc = new StudentFunc("mayank", 12);
// console.log(mayankFunc);

// // child class

// function SportCaptonFunc(name, stand, favTool) {

// //contex = this = {blank obj}
//   StudentFunc.call(this,name,stand);
//   this.favTool = favTool;
// }



// const viratFun = new StudentFunc("virat", 12, "bat");

// function extendsss() {
//   const objectWithParentMethod = Object.create(StudentFunc.prototype);

//   SportCaptonFunc.prototype = objectWithParentMethod;

//   SportCaptonFunc.prototype.construtor = SportCaptonFunc


// }

// extendsss();

// SportCaptonFunc.prototype.markAttendece = function () {
//     console.log(`sports capton ${this.name} is present in the ground`);
//   };


// console.log(StudentFunc); 

 class homoshepian{
  legs;

  killToEat(){

  }
 }

 class person{
  name;

  walk(){};
  eat (){};
  think(){};
 }

 const killToEat = ()=>{
 };

 const walk = ()=>{};
 const think = ()=>{};

const homoshepian={
  killToEat: killToEat();
}

const per={
  walk: walk(),
  think: think()
}

