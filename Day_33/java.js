// let creatediv = document.createElement('div');

// for(let i = 1; i <= 10; i++){
//     let newPara = document.createElement('p');
//     newPara.textContent= 'paragrapg added' +i;

//     newPara.addEventListener('click', function(event){
//         console.log('kamm ho Gaya');
//     })
//     creatediv.appendChild(newPara);
// }
// document.appendChild(creatediv);


let creatediv = document.createElement('div');
function paragraph(event){
    console.log('kamm ho Gaya  ' + event.target.textContent);
}
creatediv.addEventListener('click', paragraph)
for(let i = 1; i <= 50; i++){
    let newPara = document.createElement('p');
    newPara.textContent= 'paragrapg added' +i;

   
    creatediv.appendChild(newPara);
}
document.body.appendChild(creatediv);