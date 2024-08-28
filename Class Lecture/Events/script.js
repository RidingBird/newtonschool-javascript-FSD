const button1Element = document.getElementById("button1");

button1Element.addEventListener("click",()=>{
    console.log("somthing is happening");
});

const boxElement = document.getElementById("box");

boxElement.addEventListener("mouseenter",()=>{
   
   boxElement.style.backgroundColor="red"
});

boxElement.addEventListener("mouseleave",()=>{
    boxElement.style.backgroundColor="aqua";
});

function clickFunction(){
    console.log("I am Clicking")
};

boxElement.addEventListener("click",clickFunction);

console.log(button1Element);

const inputElement = document.getElementById("input");


