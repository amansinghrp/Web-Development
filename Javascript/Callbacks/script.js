// function getData(dataID, getNextData){
//     setTimeout(()=>{
//         console.log("Some Secret Data " , dataID);
//         if(getNextData){
//             getNextData();
//         }
//     }, 2000);
// }


// //this nesting of callbacks is called callback hell which is also called pyramid of doom 
// //to solve this problem we have the convept of promises
// getData(1, ()=>{
//     console.log("Getting next data");
//     getData(2, ()=>{
//         console.log("Getting next data");
//         getData(3, ()=>{
//             console.log("Getting next data");
//             getData(4);
//         });
//     });
// });

// let promise = new Promise((resolve, reject) =>{
//     console.log("I am a promise");
//     reject("Some Error");
// });

// const getPromsie = () =>{
//     return new Promise ((resolve, reject) =>{
//         console.log("I am a promise");
//         // resolve("Be Happy");
//         reject("Cannot fullfil");
//     });
// }

// let promise = getPromsie();

// promise.then((res) =>{
//     console.log("Success", res);
// });

// promise.catch((err)=>{
//     console.log("Network Error!!", err);
// });



// //PROMISE CHAIN

// function getData(dataID){
//     return new Promise((resolve, reject) =>{        
//         setTimeout(() => {
//             console.log("This is your Data ", dataID);
//             resolve("Success");
//         }, 3000);
//     });
// }
// console.log("Getting data 1...");
// getData(1).then((res) =>{
//     console.log("Getting data 2...");
//     return getData(2);
// }).then((res)=>{
//     console.log("Getting data 3...");
//     return getData(3)
// }).then((res) =>{
//     console.log(res);
// });


//Async- Await

function getData(dataID){
    return new Promise((resolve, reject) =>{
        setTimeout( ()=>{
            console.log("This is your Data", dataID);
            resolve("Success");
        }, 2000);
    });
}

// async function getAllData(){
//     console.log("Getting data 1....");
//     await getData(1);
//     console.log("Getting data 2....");
//     await getData(2);
//     console.log("Getting data 3....");
//     await getData(3);
//     console.log("Getting data 4....");
//     await getData(4);
// }


//another way of writing async function

(async function () {
    console.log("Getting data 1....");
    await getData(1);
    console.log("Getting data 2....");
    await getData(2);
    console.log("Getting data 3....");
    await getData(3);
    console.log("Getting data 4....");
    await getData(4);
})();

//the above function is excuted as soon as it is defined--> no need to call it searately
// it is called IIFE