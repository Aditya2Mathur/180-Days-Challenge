// without optimisition
let t1 = performance.now();
for(let i = 1; i <= 500; i++){
    let para = document.createElement('p');
    para.textContent = 'I am the Para' + 1;
    document.body.appendChild(para);
}
let t2 = performance.now();
console.log("time taken " + (t2-t1 ) + ' ms');
// with Optimisition

let t3 = performance.now();
let div = document.createElement('div');
for(let i = 1; i <= 500; i++){
    let para =document.createElement('p');
    para.textContent= "I am the Para";
    div.appendChild(para);
}
document.body.appendChild(div);
let t4 = performance.now();

console.log("time taken " + (t4-t3 ) + ' ms');

