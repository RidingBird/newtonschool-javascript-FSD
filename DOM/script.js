//HTML -->> Document 
 const elementHeading = document.getElementById("heading");
console.log(elementHeading); //english readable Element
console.dir(elementHeading); //"Real Object"
 document.getElementById("heading").style.color="red";

const h1headingElement = document.getElementsByTagName("p");
  //console.dir(h1headingElement);

 const classElements= document.getElementsByClassName("firstClass");
 //console.dir(classElements);

const element = document.querySelector(".firstClass");

 const headingElement = document.getElementById("heading");
headingElement.style.backgroundColor = "green";


const paraElement = document.getElementById("para");
console.dir(paraElement);
paraElement.remove();

const newHeadingH1Element = document.createElement("h1");
newHeadingH1Element.textContent = "Hello i am your new element";
console.log(newHeadingH1Element);
newHeadingH1Element.style.backgroundColor="aqua";

const containerElement =document.getElementById("container");
containerElement.append(newHeadingH1Element);







