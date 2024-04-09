// //HTML -->> Document 
//  const elementHeading = document.getElementById("heading");
// console.log(elementHeading); //english readable Element
// console.dir(elementHeading); //"Real Object"
//  document.getElementById("heading").style.color="red";

// const h1headingElement = document.getElementsByTagName("p");
//   //console.dir(h1headingElement);

//  const classElements= document.getElementsByClassName("firstClass");
//  //console.dir(classElements);

// const element = document.querySelector(".firstClass");

//  const headingElement = document.getElementById("heading");
// headingElement.style.backgroundColor = "green";


// const paraElement = document.getElementById("para");
// console.dir(paraElement);
// paraElement.remove();

// const newHeadingH1Element = document.createElement("h1");
// newHeadingH1Element.textContent = "Hello i am your new element";
// console.log(newHeadingH1Element);
// newHeadingH1Element.style.backgroundColor="aqua";

// const containerElement =document.getElementById("container");
// containerElement.append(newHeadingH1Element);

// const newParagraphElement = document.createElement("p");
// newParagraphElement.textContent = "hey i am new paragraph";
// newParagraphElement.style.backgroundColor="red";
// newParagraphElement.style.color="aqua";

// const container2Element = document.getElementById("container2");
// container2Element.append(newParagraphElement);

// const fakeNodeOfNameListElement = new DocumentFragment();

// const namesListElement= document.getElementById("names");

// const studentList = ["amit","hemant","priyanka"];

// for (let index = 0; index < studentList.length; index++) {
//     const studentName = studentList[index];

//     const listIteamElement =document.createElement("li");
//     listIteamElement.textContent=studentName;

//   //  namesListElement.append(listIteamElement);

//   fakeNodeOfNameListElement.append(listIteamElement);
// }
// namesListElement.append(fakeNodeOfNameListElement);

// namesListElement.style.color="aqua";
// namesListElement.style.backgroundColor="red";

// const headingElementForList = document.createElement("h1");
// const footerElementForList = document.createElement("h3");

// headingElementForList.textContent="The Student List Starts From Here";
// footerElementForList.textContent="The List END";

// namesListElement.before(headingElementForList);
// namesListElement.after(footerElementForList);


