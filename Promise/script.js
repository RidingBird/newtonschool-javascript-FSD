// const url= `https://pokeapi.co/api/v2/pokemon/pikachu`

// fetch(url).then((Response)=>{
//     console.log(Response);
//     return Response.json();
// })
// .then((data) =>{
//     console.log(data);
// });

const url = `https://api.kanye.rest/`

// fetch(url) 
// .then((responceObject)=>{
// throw new Error("level 1 error")
//     return responceObject.json();
// })
// .catch((error)=>{
//     console.log("catching error for level 1");
// })

// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//   console.log("i have the ERROR",error);
// });


fetch(url) //level 0
.then(
           //level 1
    (response)=>{
        console.log("level 1",response);
     return response.json();   
    },
(error)=>{
    console.log("handling Error for level 1",error);
})
.this((data)=>{
           //level 2
    console.log("level2", data); 
})
.catch((error)=>{
           //level 3
    console.log("level 5 Error block");
});
