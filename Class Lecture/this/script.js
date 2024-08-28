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

const obj ={
    name: "yogesh",
    rollNumber: 47,

    func: function(){
        console.log(`hello..${this.name} and rollNoo..${this.rollNumber}`);

    }

}

const obj2={
    name: "mayank",
    rollNumber: 41,
    obj: obj,
}

obj.func();
