// const formElement = document.getElementById("form");

// formElement.addEventListener("submit",(event)=>{
// event.preventDefault()
// });


 const nameElement = document.getElementById("name");

// nameElement.addEventListener("paste",(event) =>{
//     event.preventDefault();
// });

// nameElement.addEventListener("focus",()=>{
// console.log("focus");
// });

// nameElement.addEventListener("blur",() =>{
//     console.log("blur")
// });

nameElement.addEventListener("keyup",(event)=>{
    // console.dir(event);
const targetElement = event.target;
const value = targetElement.value;
targetElement.value =String(value).substring(0,1).toUpperCase() + String(value).substring(1).toLowerCase();

// targetElement.value = String(targetElement.value).toUpperCase();
});

// ---------------------REZEX------------------------------------------------------

const formElement = document.getElementById("form");
formElement.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formElem = event.target;
    const elements = formElem.elements;
   
//Elements
    const nameElement = elements.name;
    const emailElement = elements.email;
    const standerdElement = elements.standerd;
   
    

//values
    const name = nameElement.value;
    const email = emailElement.value;
    const standerd = standerdElement.value;
    //  console.log(name);

//VAlidation

    function nameVAlidatore(name) {
       const nameRezex = /^[a-zA-Z]+$/

       const validate = name.match(nameRezex);

       if(validate){
        return true;

       }else{
        return false;
       }
    }

     const namevalidation = nameVAlidatore(name);
     if(!namevalidation){
        console.log("name is not correct");
        return;
     }



     function phoneNumberValiditore(phone){
        const phoneRegex = /^[0-9]{10}$/;

        const validateAnswer = String(phone).match(phoneRegex);

     }

     if(validateAnswer){
        return true;
     }else{
        return false;
     }

     const phoneAnswerValidation = phoneNumberValiditore(phone);
     if(!phoneAnswerValidation){
        console.log("wrong number input");
    return; 
    }


    const payload ={
        name: name,
        email: email,
        standerd: standerd,
    };

    console.log(payload);

    fetch("yogesh.com",{method: "post", body: JSON.stringify(payload)});

});


