// console.log("a");

// setTimeout(()=>{
//     console.log("c");
// },3000);
// setTimeout(()=>{
//     console.log("d");
// },4000);

// console.log("b");

//promise creation
const pokemonServerPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
       resolve({
        name: "pikachu",
        ability: "lightning thunder",
    })  
    },5000) 
});

//promise cunsumtion
pokemonServerPromise.then((data)=>{
    console.log(data,"pokemon data")
});
