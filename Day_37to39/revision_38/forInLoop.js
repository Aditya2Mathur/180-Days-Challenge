// for in loop

// create object 

let people = {
    name : 'aditya',
    age : 20,
    Address : `
gadi khan janakhan
Farrukhabad,Uttar Pradesh
pin Code : 209625`

}
for (let key in people){
    console.log(key,people[key]);
}

// Searching in this loop

if('email' in  people){
    console.log('Have in object');
}
else{
    console.log("not Have");
}