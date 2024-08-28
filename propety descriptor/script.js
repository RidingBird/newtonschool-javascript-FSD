let obj = {
    name: "yogesh",

};

console.log(obj);

// can we write on this propety

obj.name = "guptas";

const descriptorOfName = Object.getOwnPropertyDescriptor(obj, "name");
console.log(descriptorOfName);

Object.defineProperty(obj,"name",{
    writable: false,
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(obj,"name"));

for(let key in obj){
    console.log(key, "yogesh gupta")
};


