// Iteration Method for object cloning
let source = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in source)
{
    dest[key] = source[key];
}
console.log(dest);