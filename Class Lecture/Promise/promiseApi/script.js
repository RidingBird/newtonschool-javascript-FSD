let payerPromise = new Promise((res, rej)=>{
    res(100);
});

let shopKeeperPromise = new Promise((res, rej)=>{
    res(1000+100);
});

Promise.all([payerPromise, shopKeeperPromise]).then((data)=>{
    console.log(data,"data inside the promise all");
});