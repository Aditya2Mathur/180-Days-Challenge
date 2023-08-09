// let function1 = async function(){
//     return "Kaam ho gaya";
// }
// console.log(function1);

// 

async function asyncAwait() {
   let adityaDetail = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("hell  on the D");
    }, 1000);
   });


   let shashankDetail = new Promise((resolve,reject) => {
    setTimeout(() =>{
        resolve("hell  on the D");
    }, 2000);
   });

    let aD = await adityaDetail;
    let sD = await shashankDetail;

    return[aD, sD];

}
