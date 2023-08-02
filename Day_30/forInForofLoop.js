// Syntax of for-in
let people = {
    name: 'Addy',
    age: 20
}
for(let key in people){
    console.log(key, people[key]);
}
if('group' in people){
    console.log('Present');
}
else{
    console.log('not present');
}