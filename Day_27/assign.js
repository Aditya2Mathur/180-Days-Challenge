// Assigns Method for object cloning
let source ={
    a:20,b:30,c:40
};
let dest = Object.assign({}, source);
console.log(dest);