class person{
    name;
    age;

    constructor(inputName, inputAge){
        this.name = inputName;
        this.age = inputAge;
}
        canPersonTalk(){
            console.log("yes persone can talk")
        }

    
}

const yogeshPersonObject = new person("yogesh", 26);

console.log(yogeshPersonObject);

// ---------------------inherence---------------------------

class student{
    name;
    standerd;

    constructor(name, standerd){
        this.name=name;
        this.standerd=standerd;
    }
}

class sportsPerson extends student{
    favTool;
}

// --------------------Before class was created-------------------------

function personFun(inputName, inputAge){
    this.name = inputName;
    this.age = inputAge;

    this.canPersoneWalk = function(){
        console.log("yes this can walk");
    }
}

const mayankObj = new personFun("mayank", 20);

console.log(mayankObj);

