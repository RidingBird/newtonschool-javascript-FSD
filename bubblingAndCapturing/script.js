const grandParentElement = document.getElementById("grandParent");
const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");

childElement.addEventListener("click", (event)=>{
console.log("child click");
});

grandParentElement.addEventListener("click", (event)=>{
    console.log("grandParent clicked");
});

parentElement.addEventListener("click", (event)=>{
    console.log("Parent clicked");
});

childElement.addEventListener("click", (event)=>{
     console.log("child click");
    //  console.log(event);
     }, true ); 

      grandParentElement.addEventListener("click", (event)=>{
           console.log("grandParent clicked");
    //  console.log(event);
        }, true );



setTimeout(() =>{
    childElement.removeEventListener("click", callBack)
},5000);

console.log()





