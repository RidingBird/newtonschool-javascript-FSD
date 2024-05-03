// const grandParentElement = document.getElementById("grandParent");
// const parentElement = document.getElementById("parent");
// const childElement = document.getElementById("child");

// childElement.addEventListener("click", (event)=>{
// console.log("child click");
// });

// grandParentElement.addEventListener("click", (event)=>{
//     console.log("grandParent clicked");
// });

// parentElement.addEventListener("click", (event)=>{
//     console.log("Parent clicked");
// });

// childElement.addEventListener("click", (event)=>{
//      console.log("child click");
//     //  console.log(event);
//      }, true ); 

//       grandParentElement.addEventListener("click", (event)=>{
//            console.log("grandParent clicked");
//     //  console.log(event);
//         }, true );


const containerElement = document.getElementById("container");

const greenElement = document.getElementById("green");

greenElement.addEventListener("click",(eventObj)=>{
    const color = eventObj.target.id;

    containerElement.style.background=color;
});

const yelloElement = document.getElementById("yello");
yelloElement.addEventListener("click", (eventObj)=>{
    const color = eventObj.target.id;

    containerElement.style.background=color;
});

const redElement = document.getElementById("red");
redElement.addEventListener("click", (eventObj)=>{
    const color = eventObj.target.id;

    containerElement.style.background=color;
});




