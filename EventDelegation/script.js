// const containerElement = document.getElementById("container");

// const greenElement = document.getElementById("green");
// const yelloElement = document.getElementById("yello");
// const redElement = document.getElementById("red");

// greenElement.addEventListener("click",(eventObj)=>{
//     const color = eventObj.target.id;

//     containerElement.style.background=color;
// });
// yelloElement.addEventListener("click", (eventObj)=>{
//     const color = eventObj.target.id;

//     containerElement.style.background=color;
// });

// redElement.addEventListener("click", (eventObj)=>{
//     const color = eventObj.target.id;

//     containerElement.style.background=color;
// });   



const palletContainerElement = document.getElementById("palletContainer");
const containerElement = document.getElementById("container")
palletContainerElement.addEventListener("click", (eventObj) =>{
    const element = eventObj.target;
   
    const color = element.id;
    
    containerElement.style.background=color;    
});




