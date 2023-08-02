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
// for-of loop use for convert function into array

for(let key in Object.entries(people)){
    console.log(key);
}