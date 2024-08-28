// // /* ---------------Scope--------------------- */
// // if (true) {
// //     var a =100;
// //     console.log(a);
// // }

// var a=12;
// console.log(a);

// function abc(){
//     var a=100;
//     console.log(a);
//     // return a;
// }

// let result = abc()

// console.log(result);
// console.log(a);

// var a=12;
// var a=100;
//  console.log(a);

// let a=100;
// console.log(a);

// for (let a=1; a<5; a++) {
//     console.log(a); 
// }
// console.log(a);

function spaseship(a,b, action){

    let res;
    try{
        if(action==="add"){
            res=a+b;
            throw Error("spaceship is not working")
        }else if(action==="sub"){
            res=a-b;
        }else if(action==="mult"){
            res=a*b;
        }
    }catch(error){
        console.log("error");
    }
}
const result=spaseship(1,2,"add");
console.log(result);
