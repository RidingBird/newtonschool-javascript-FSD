
const url = `https://api.kanye.rest/`
// fetch(url)
// .then((responce)=>{
//     return responce.json();
// })
// .then((data)=>{
//     console.log(data);

//     // const {quote}=data

//     const quote = data.quote;
// })
// .then((data)=>{
//     const devElement = document.getElementById("Kanye");
//     devElement.innerHTML = quote;
// })

//---------Asynce-Await--------------------------------------

async function fetQuat(url){
    try{
        const responce =await fetch(url);

        const data = await responce.json();
    
        const {quote}= data;
    
        // DOM manupulation
    
        const devElement = document.getElementById("Kanye");
            devElement.innerHTML = quote;
    }catch(error){
       // handling the error
    //    1, handling error for fetch
        //   2. handling error for responce json conversion
            //  3. handling error for object destructuring.
                // 4. Dom manupulation

      console.log(error);
    }
  
}


function disply (quote){
    const devElement = document.getElementById("Kanye");
    devElement.innerHTML = quote;
}
async function completeProcess(url){
    const quote = await fetQuat(url);
    disply(quote);
}
completeProcess(url);
   