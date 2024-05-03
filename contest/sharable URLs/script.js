// function updateTheHeading(){
    
// }

// const nameElement = document.getElementById("name");
// const geadYearElement = document.getElementById("year");

// nameElement.addEventListener("change", (eventObj)=>{
//     console.log("input element is changed");

//    const targetElement = eventObj.target;
//    const value = targetElement.value;
// });

const buttonElement = document.getElementById("button");
buttonElement.addEventListener("click",(eventObj)=>{
const nameElement = document.getElementById("name");
const geadYearElement = document.getElementById("year");
const baseUrl = "https://localhost:8080/";
const name = nameElement.value;
const year = geadYearElement.value;

let str ="?";

if(name && year){
    str += "name=" + name + "&" + "year=" + year;
}else if (name){
str += "name="+ name;
}else if(year){
    str += "year="+year;
}else{
    str+= "";
}

const headingElement = document.getElementById("url");
headingElement.textContent= baseUrl+str;

});

console.log("hi an ")

