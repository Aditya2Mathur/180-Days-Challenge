// function declaration

function goS(){
    console.log('Going to School')
};
console.log(goS());

// Function assignment
let goHome = function goH(){
    console.log('Going to House');
}
goHome();

// use argument 
function sum(a,b){
    let total = 0;
    for(let value of arguments){
        total = total + value;
    }
    return total;   
    
}
let Sum =  sum(1,2,3,4,5,6);
console.log(Sum);