const myFetch = new Promise((resolve,reject)=>{
    resolve(1);
})
myFetch
.then((data)=>{
    console.log("data",data);
})
.catch((error)=>{
    console.log(error,"error in level 2")
});

// how to create Fetch

function myFetch(url){
    return new Promise((resolve,reject)=>{
       
        
        const xmlreq = new XMLHttpRequest();
        const data = xmlreq.open("GET",url)
    
         const ResponceWrapper = {
            url: url,
            status: 200,
            body: MediaStreamAudioDestinationNode(data),
            ok: true,
            redirected: false,
            JSON: function(){

            }
         }
      
      if (data){
        resolve(ResponceWrapper)
      }else{
        reject("server time out")
      }

    
    })
}