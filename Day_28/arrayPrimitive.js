// cration of array
let num = [2,4,2,5,54,1, 'two', 'three'];
// intertion in starting
num.unshift(11);

// intertion in End
num.push('13');

// intertion in middle
num.splice(3,0,'a','b',7,'one');
console.log(num);

// Searching in Array Mothod - 1
if(num.indexOf(55) != -1){
    console.log('True');
}
else{
    console.log('false');
}

// // Searching in Array Mothod - 2
console.log(num.includes(5));
console.log(num.includes(5,7));

