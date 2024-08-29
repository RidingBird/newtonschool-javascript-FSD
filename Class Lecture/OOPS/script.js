// class person{
//     name;
//     age;

//     constructor(inputName, inputAge){
//         this.name = inputName;
//         this.age = inputAge;
// }
//         canPersonTalk(){
//             console.log("yes persone can talk")
//         }

    
// }

// const yogeshPersonObject = new person("yogesh", 26);

// console.log(yogeshPersonObject);

// ---------------------inheritence---------------------------

class student{
    name;
    standerd;

    constructor(name, standerd){
        this.name = name;
        this.standerd = standerd;
}
        markAttendece() {
            console.log(`hey there ${this.name} is present: normal classroom`)
        }
    
}

// class sportsPerson extends student{
//     favTool;
// };

class SportCapton extends student{
    favTool; // tool could be any thing

   constructor(name,standerd,favTool){
      super(name, standerd);

      this.favTool = favTool;
   }
   markAttendece(){
    console.log(`sports capton ${this.name} is present for practice`)
   }

   routine(){
       console.log("practice cricket hole day");
   }
}

const student1 = new student("akash", 4);
const student2 = new student("ankush", 10);

const virat = new SportCapton("virat",11, "bat");

console.log(student1);
console.log(student2);
console.log(virat);


// --------------------Before class was created-------------------------

// function personFun(inputName, inputAge){
//     this.name = inputName;
//     this.age = inputAge;

//     this.canPersoneWalk = function(){
//         console.log("yes this can walk");
//     }
// }

// const mayankObj = new personFun("mayank", 20);

// console.log(mayankObj);


//----------setrs and getars ------------------------

// class start {
//     #weight;
//     #years;

//     constructor(weight,year){
//         this.weight=weight;
//         this.#years=year;
//     }

//     set setWeight(value){
//         this.#weight = value;
//     }

//     set setYears(value){
//         this.#years= value;
//     }

//     get getWeight(){
//         return this.#weight;
//     }

//     get getYears(){
//         return this.#years;
//     }
// }

// const sun = new start(138902474738902,6123478906432890);
// console.log(sun);
// console.log(sun.getWeight);

class Circle{
    radius;

    constructor(radius){
        this.radius=radius;
    }

    draw(){
        console.log("DRAW");
    }

    static parse(){
        console.log("static parce");
    }
}

const circule = new Circle(10);
console.log(circule.draw);
console.log(Circle.parse);

