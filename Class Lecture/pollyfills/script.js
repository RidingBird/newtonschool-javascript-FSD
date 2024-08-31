// function myMap(callBackFunction){
//     let ansArray = [];

//     const array = this;
//     for(let i=0;i<array.length;i++){
//         const itam = array[i];
//         const answer = callBackFunction(itam,i,array)
//       ansArray.push(answer);
//     }
//     return ansArray;
// }
// Array.prototype.myMap = myMap;

// [1,2,3,4,5].myMap((item)=> {return item*3})

//My Filter

// function myFilter(callBackFunction){
//     let ansArray = [];
//   const array1 = this;
//   for(let i=0;i<array1.length;i++){
//     const item = array1[i];
//     const answer = callBackFunction(item,i,array1);
//     if(answer){
//         ansArray.push(item);
//     }
//   }
//   return ansArray;

// }
// Array.prototype.myFilter = myFilter;

// const array = [1,2,3,4,5,6,7,8,9];

// const myFileterdArray= array.myFilter((item)=>{
//   return  item%2==0;
// });
// console.log(myFileterdArray);


//  .push ( you can make poly for POP and shift)------------------------------------------

// function myPush(value){
   
//     const array = this;
    
//     const n = array.length;

//     array.splice(n,0,value);

//     return array;


// }

// Array.prototype.myPush=myPush;

// const arr = [1,2,3];

// const updatedArray = arr.myPush(18);

// console.log(updatedArray);




// Reduce

// function myReduce(callBack, initialValue){
//     const array = this;

//     let previousVal;
//     let i=0;



//     if (initialValue !== undefined){
//        previousVal = initialValue;
//     }else{
//         previousVal = array[0];
//         i++;
//     }

     
//     for(i=0;i<arr.length;i++){
//         const currentValue = arr[i];
//         const returnValue = callBack(previousVal,currentValue)
//         previousVal = returnValue;
        
//     }
//     return previousVal;
// }

// Array.prototype.myReduce=myReduce

// let arr = [1,2,3,4,5]

// const myReducedSum = arr.myReduce((previousValue, currentValue)=>{
//     return previousValue + currentValue;
// });

// console.log(myReducedSum);






//--------------------Debounching------------------------------

//  const inputBoxElement = document.getElementById("inputBox");

// function fetchSuggestion(event){
//     const value = event.target.value;

//     fetch("google.com",{
//         method: "post",
//         body: JSON.stringify(value),
//     })
//  }

// // // inputBoxElement.addEventListener("input",fetchSuggestion)

// // let timerNumber;

// // function debounce(callBackFunction, delay){
// //     function outPutFunction(event){
// //         clearTimeout(timerNumber);
// //        timerNumber= setTimeout(() => {
// //             callBackFunction(event);
// //         }, delay);
// //     }
// //     return outPutFunction;

// // }


// // const betterFetchSuggetions = debounce(fetchSuggestion,1000)

// // inputBoxElement.addEventListener("input",betterFetchSuggetions);

// // --------------------throtling---------------------

// function fireBullet(event){
// console.log("firing");
// }

// function throtling(callBack, delay){

//     let flag = true;

//     function outPutFunction(event){

//         if(flag){
//             callBack(event)
//            flag= false;
//         }

//        setTimeout(()=>{
//         flag=true;
//        },delay);
//     }
//     return outPutFunction;
// }

// const throttledFirebullet = throttling(fireBullet,1000);

// inputBoxElement.addEventListener("input",throttledFirebullet);


