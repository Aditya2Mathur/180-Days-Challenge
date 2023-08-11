let source ={
    name: 'aditya',
    age: 20,
    DOB: '05/07/2002',
    PhoneNo: 7834881186,
    Address : `gadi khan janakhan
Farrukhabad,Uttar Pradesh
pin Code : 209625`

}
let destination = {};

for(let key in source){
   destination[key] = source[key]; 
}
console.log(destination);