const url= `https://pokeapi.co/api/v2/pokemon/pikachu`

fetch(url).then((Response)=>{
    console.log(Response);
    return Response.json();
})
.then((data) =>{
    console.log(data);
});