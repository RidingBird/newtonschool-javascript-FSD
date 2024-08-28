var obj = {
    name: "yogesh",

    func: function(){
        console.log(`hello guys my name is ${this.name}`)
    }
}
obj.func();
const funcCopy = obj.func;
funcCopy();