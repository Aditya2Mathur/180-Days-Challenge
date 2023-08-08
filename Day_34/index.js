// this code is aSync
setTimeout(function (){
    console.log('last');
}, 4000)

// this code is aSync
console.log('Start');
function sync(){
    console.log('middle');
}
sync();



